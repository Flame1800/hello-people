import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import YandexMetrika from "../src/Components/YandexMetrika";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }

    return await Document.getInitialProps(ctx);
  }

  render() {
    // @ts-ignore
    return (
      <Html lang="ru">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="apple-mobile-web-app-title" content="City Expert" />
          <meta name="theme-color" content="#FC5130" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link rel="apple-touch-icon" href="/icon-192x192.png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <meta name="MobileOptimized" content="176" />
          <script
            type="text/javascript"
            src="https://vk.com/js/api/share.js?93"
            charSet="windows-1251"
          ></script>
          <YandexMetrika
            yid={91158101}
            clickmap={true}
            trackLinks={true}
            accurateTrackBounce={true}
            webvisor={true}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
