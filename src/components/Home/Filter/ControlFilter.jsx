import React from 'react';
import PropTypes from 'prop-types';
import FilterByCategory from './FillterByCategory/FilterByCategory';
import FilterByPrice from './FilterByPrice/FilterByPrice';
import FilterByService from './FilterByService/FilterByService';

ControlFilter.propTypes = {
    productFillters: PropTypes.object.isRequired,
    onChange: PropTypes.func,
};
function ControlFilter(props) {
    const { productFillters, onChange } = props;
    // ProductFilterCategory
    const handleCategoryChage = (newCategoryId) => {
        if (!onChange) return;
        const newFilter = {
            ...productFillters,
            'category.id': newCategoryId,
        };
        onChange(newFilter);
    }
    // ProductFilterPrice
    const handlePriceChange = (valueState) => {
        if (!onChange) return;
        const newFilter = {
            ...productFillters,
            ...valueState,
        };
        onChange(newFilter);
    }
    // Product checked
    const handleServiceCheck=(valueCheck)=>{
        if (!onChange) return;
        const newFilter = {
            ...productFillters,
            ...valueCheck,
        };
        onChange(newFilter);  
    }
    return (
        <div>
            <FilterByCategory onChange={handleCategoryChage} />
            <FilterByPrice onChannge={handlePriceChange} />
            <FilterByService initProductList={productFillters} onCheck={handleServiceCheck}/>
        </div>
    );
}

export default ControlFilter;