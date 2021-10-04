import Pagination from '@mui/material/Pagination';
import React, { useEffect, useState } from 'react';
import { useMemo } from 'react';
import { useHistory, useLocation } from 'react-router';
import productApi from '../../../api/productApi';
import ControlFilter from '../Filter/ControlFilter';
import ProductLoading from '../ProductLoading/ProductLoading';
import ProductSort from '../ProductSort/ProductSort';
import ProductView from '../ProductView/ProductView';
import queryString from 'query-string';

import './page.scss';

Page.propTypes = {

};

function Page(props) {
    // const queryString = require('query-string');
    // history
    const history = useHistory();
    const location = useLocation();
    // phụ thuộc URL để lấy sản phẩm
    const valueUrl = useMemo(() => {
        const values = queryString.parse(location.search);
        // Chỉ chạy lại khi url/? (location.search) thay đổi
        return {
            ...values,
            _page: Number.parseInt(values._page) || 1,
            _limit: Number.parseInt(values._limit) || 12,
            // _sort: values._sort,
            // isPromotion: values.isPromotion ==='true' ? false : true,
            // isFreeShip: values.isPromotion === 'true' ? false : true,
        }
    }, [location.search]);
    const [productList, setProductList] = useState([]);
    const [paginationState, getPaginationState] = useState({
        limit: 12,
        total: 12,
        page: 1,
    });
    /* loading trong khi đợi Api được gọi lên  */
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        /* tạo và gọi luôn hàm async() */
        (
            async () => {
                try {
                    // lấy phần data trong Api trả về
                    const { data, pagination } = await productApi.getAll(valueUrl);
                    // Set state bằng danh sách data get được
                    setProductList(data);
                    getPaginationState(pagination);
                }
                catch (error) {
                    console.log('Error');
                }
                setLoading(false);
            })();
        // Fillter thay đổi get lại danh sách sản phẩm
    }, [valueUrl]);

    /* Thay đổi pagination */
    const handleOnChange = (e, page) => {
        const filter = {
            ...valueUrl,
            _page: page,
        }
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filter)
        })
    }
    const handleSortChange = (newValue) => {

        const filter = {
            ...valueUrl,
            _sort: `${newValue}`,
            // _sort: 'newValue'
        }


        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filter)
        })
    }
    const handleControlFilter = (newFilter) => {

        const filter = {
            ...valueUrl,
            ...newFilter,
        }
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filter)
        })
    }
    return (
        // Full view
        <section className="section">
            
            <div className="product__container">
                <div className="product__left">
                    <ControlFilter productFillters={valueUrl} onChange={handleControlFilter} />
                </div>
                <div className="product__right">
                    <ProductSort productFillters={valueUrl} onSortPrice={handleSortChange} />
                    {loading === true ? <ProductLoading /> : <ProductView data={productList} />}
                    <Pagination
                        onChange={handleOnChange}
                        className='product__pagination' count={Math.ceil(paginationState.total / paginationState.limit)} page={paginationState.page} color="primary" />
                </div>
            </div>
        </section>

    );
}

export default Page;