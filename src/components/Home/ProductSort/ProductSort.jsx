import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import PropTypes from 'prop-types';
import React from 'react';

ProductSort.propTypes = {
    // Tham số props
    productFillters: PropTypes.object,
    onSortPrice: PropTypes.func,

};
ProductSort.defaultProps = {
    productFillters: {},
    onSortPrice: null,
}

function ProductSort(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    const { productFillters, onSortPrice } = props;




    const handleSortChanges = (event) => {
        const valuesss = event.target.name;
        onSortPrice(valuesss)
    };

    return (

        <Tabs
            textColor="primary"
            indicatorColor="primary"
            aria-label="primary tabs example"
            value={value} onChange={handleChange}
        >
             <Tab label="Sắp xếp"/>
            <Tab label="Giá thấp" name="salePrice:ASC" onClick={handleSortChanges} />
            <Tab label="Giá cao" name="salePrice:DESC" onClick={handleSortChanges} />

        </Tabs>

    );

}

export default ProductSort;