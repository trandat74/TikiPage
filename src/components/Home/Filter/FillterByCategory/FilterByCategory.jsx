import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';
import categoryApi from 'api/categoryApi';
import ListIcon from '@mui/icons-material/List';
import './filterbycategory.scss'


FilterByCategory.propTypes = {
    onChange: PropTypes.func,

};


function FilterByCategory(props) {
    const { onChange } = props;
    const [categoryList, setCategoryList] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const listCat = await categoryApi.getAll();
                setCategoryList(listCat);
                // console.log({ listCat })

            }
            catch (error) {
                console.log('Error category list', error)
            }
        })()
    }, [])

    const handleOnCat=(cat)=>{
        const newCategoryId=(cat.id);
        if(onChange)
        {
            onChange(newCategoryId);
        }
        // console.log(cat.id)
    }
    return (
        <div className="category__filter">
            <h5>
                <ListIcon/>
                DANH MỤC SẢN PHẨM </h5>
            <ul className="category__list">
                {categoryList.map((cat) => (
                    <li
                        key={cat.id}
                        className="category__item"
                        onClick={()=>handleOnCat(cat)}
                        >
                        
                        {cat.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FilterByCategory;