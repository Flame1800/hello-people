import React, { useEffect, useState } from "react";
import { API_URL } from "../../src/Constants/api";
import { useRouter } from "next/router";
import * as qs from "querystring";

const Redirect = () => {
  const [text, setText] = useState("Loading...");
  const router = useRouter();

  console.log(qs.stringify(router.query));

  useEffect(() => {
    // Successfully logged with the provider
    // Now logging with strapi by using the access_token (given by the provider) in props.location.search
    fetch(`${API_URL}/api/auth/google/callback?${qs.stringify(router.query)}`)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(`Couldn't login to Strapi. Status: ${res.status}`);
        }
        return res;
      })
      .then((res) => res.json())
      .then((res) => {
        // Successfully logged with Strapi
        // Now saving the jwt to use it for future authenticated requests to Strapi
        localStorage.setItem("jwt", res.jwt);
        localStorage.setItem("username", res.user.username);
        setText(
          "You have been successfully logged in. You will be redirected in a few seconds..."
        );
        setTimeout(() => router.push("/"), 3000); // Redirect to homepage after 3 sec
      })
      .catch((err) => {
        console.log(err);
        setText("An error occurred, please see the developer console.");
      });
  }, [router]);

  return <p>{text}</p>;
};

export default Redirect;
