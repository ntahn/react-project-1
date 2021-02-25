import React from 'react';
import NavbarHome from '../../components/NavbarHome';
import { Route } from 'react-router-dom';
import FooterHomePage from '../../components/FooterHomePage';

function LayoutHome(props) {
    return (
        <div>
            <NavbarHome />
            {props.children}
            <FooterHomePage />
        </div>
    )
}

export default function HomeTemplate({Component, ...props}) {
    return (
        <Route 
            {...props} 
            render={(propsComponent) => (
                <LayoutHome>
                    <Component {...propsComponent} />
                </LayoutHome>
            )}
        />
    )
}


