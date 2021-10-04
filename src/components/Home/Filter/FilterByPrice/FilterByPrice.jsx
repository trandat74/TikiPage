import React from 'react';
import PropTypes from 'prop-types';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import './filterbyprice.scss'
import { useState } from 'react';

FilterByPrice.propTypes = {
    onChannge: PropTypes.func,

};

function FilterByPrice(props) {
    const { onChannge } = props;

    const [valueState, setValueState] = useState({
        salePrice_gte: 0,
        salePrice_lte: 0,
    })

    const [valueOption, setValueOption] = useState({
        salePrice_gte: 0,
        salePrice_lte: 0,
    })

    const handleOnChangeMin = (e) => {

        setValueState({
            ...valueState,
            salePrice_gte: e.target.value,
        })
    }
    const handleOnChangeMax = (e) => {
        setValueState({
            ...valueState,
            salePrice_lte: e.target.value,
        })
    }
    const handleSubmit = () => {
        if (onChannge)
            if (Number(valueState.salePrice_gte) <= Number(valueState.salePrice_lte)) {
                onChannge(valueState);
            }
            else {
                alert('Vui lòng nhập giá đích lớn hơn giá khởi điểm')
            }
    }



    const handleOptionPrice = (e) => {
        if (e.target.value === '1') {
            const cloneOptionPrice = {
                ...valueOption,
                salePrice_lte: 500000,
            }
            if (onChannge) {
                onChannge(cloneOptionPrice);
            }
        }
        if (e.target.value === '2') {
            const cloneOptionPrice = {
                salePrice_gte: 500000,
                salePrice_lte: 5000000,
            }
            if (onChannge) {
                onChannge(cloneOptionPrice);
            }
        }

        if (e.target.value === '3') {
            const cloneOptionPrice = {
                salePrice_gte: 5000000,
                salePrice_lte: 999999999,
            }
            if (onChannge) {
                onChannge(cloneOptionPrice);
            }
        }
    }
    return (
        <div className="price__filter">
            <h5>
                <LocalOfferIcon />
                GIÁ SẢN PHẨM</h5>
            <ul className="price__combo">
                <button value="1" onClick={handleOptionPrice}>Dưới 500.000đ</button>
                <button value="2" onClick={handleOptionPrice}>Từ 500.000đ đến 5.000.000đ</button>
                <button value="3" onClick={handleOptionPrice}>Trên 5.000.000đ</button>
            </ul>
            <ul className="price__select">
                <p>Chọn khoảng giá</p>
                <div className="price__form">
                    <input type="number" name="salePrice_gte" value={valueState.salePrice_gte} onChange={handleOnChangeMin} />
                    <span>-</span>
                    <input type="number" name="salePrice_lte" value={valueState.salePrice_lte} onChange={handleOnChangeMax} />

                </div>
                <button className="price__apply" onClick={handleSubmit}>Áp dụng</button>
            </ul>
        </div>
    );
}

export default FilterByPrice;