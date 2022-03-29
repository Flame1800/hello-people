import React, {Component} from 'react';
import NavBarMobile from "../MobileComponents/NavBarMobile/NavBarMobile";

type Layout = {
    children: Component
}

const MainLayout: React.FC<Layout> = ({children}) => {
    return (
        <div>
            {children}
            <NavBarMobile/>
        </div>
    );
};

export default MainLayout;