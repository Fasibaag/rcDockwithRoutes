import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const Product = () => {
    const path = useLocation()
    return (
        <div>
                Product page {path.pathname}
                <Outlet/>
        </div>
    );
};

export default Product;