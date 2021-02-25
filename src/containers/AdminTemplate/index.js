import React from 'react';
import NavbarAdmin from '../../components/NavbarAdmin';
import { Route } from 'react-router-dom';

function LayoutAdmin(props) {
    return (
        <div>
            <NavbarAdmin />
            {props.children}
        </div>
    )
}

export default function AdminTemplate({Component, ...props}) {
    return (
        <Route 
            {...props} 
            render={(propsComponent) => (
                <LayoutAdmin>
                    <Component {...propsComponent} />
                </LayoutAdmin>
            )}
        />
    )
}