import React from 'react';

import './productLoading.scss'



function ProductLoading() {
    return (
        <div className="loading">
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>

    );
}

export default ProductLoading;