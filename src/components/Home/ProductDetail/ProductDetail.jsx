import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import productApi from 'api/productApi';
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import { STATIC_DOMAIN, THUMNAIL_DEFAULT } from '../../../constants';
import ProductDesc from './ProductDesc/ProductDesc';
import './productdetail.scss';

ProductDetail.propTypes = {
    
};
function ProductDetail(props) {
    const { params: { productId } } = useRouteMatch();
    const [product, setProduct] = useState([])
    // get Api [get by productId]
    useEffect(() => {
        (async () => {
            try {
                const product = await productApi.get(productId)
                setProduct(product)
            }
            catch (error) {
                
                console.log('Error getId', error);
            }
        })()
    }, [productId])
    const thumbnailProduct = product.thumbnail
        ? `${STATIC_DOMAIN}${product.thumbnail?.url}`
        : THUMNAIL_DEFAULT;
    // quantity
    const [valueQuantity, setValueQuantity] = useState(0)
    const handleOnChangeValue = (e) => {
        const value = (e.target.value);
        if (value === '') {
            setValueQuantity(0)
        }
        else {
            setValueQuantity(Number.parseInt(value))
        }
    }
    const handleDow = () => {
        if (valueQuantity <= 0)
            return;
        setValueQuantity(valueQuantity - 1)
    }
    const handleUp = () => {
        setValueQuantity(valueQuantity + 1)
    }
    const handleAddCart = () => {
        if (valueQuantity > 0) {
            // console.log(valueQuantity)
        }

    }
    return (
        <div className="detail">
            <div className="detail__container">
                <div className="detail__content">
                    <div className="detail__img">
                        <img src={thumbnailProduct} alt="produc" />
                        <div className="detail__share">
                            Chia sẻ:
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-facebook.svg" alt="facebook" />
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-messenger.svg" alt="facebook" />
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-pinterest.svg" alt="facebook" />
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-twitter.svg" alt="facebook" />
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-copy.svg" alt="facebook" />
                        </div>
                    </div>
                    <div className="detainl__info">
                        <h4 className="detail__name">
                            Tên sản phẩm: {product.name}
                        </h4>
                        <div className="detail__desc">
                            {product.shortDescription}
                        </div>
                        <div className="detail__price">
                            <p className="detail__priceInit">
                                {(new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.originalPrice > product.salePrice ? product.originalPrice : `${product.salePrice + 2000}`))}
                            </p>
                            <p className="detail__salePrice">
                                {(new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice))}
                            </p>
                            <span className="detail__percent">{!product.isPromotion ? '' : `-${product.promotionPercent}%`}</span>
                        </div>
                        <div className="detail__address">
                            <p>Bạn hãy <b>NHẬP ĐỊA CHỈ </b> nhận hàng để được dự báo thời gian & chi phí giao hàng một cách chính xác nhất.</p>
                        </div>
                        <div className="detail__aquantity">
                            <div className="detail__form">
                                <p>Số lượng</p>
                                <button className={`detail__dow`} onClick={handleDow}>-</button>
                                {/* Quantity */}
                                <input type="number" className="detail__value" onChange={handleOnChangeValue} value={valueQuantity} min="0" placeholder="0" />
                                <button className="detail__up" onClick={handleUp}>+</button>
                            </div>
                        </div>
                        <div className="detail__buy">
                            <button className="detail__buyNow">
                                Mua Nngay
                            </button>
                            <button className="detail__addCart" onClick={handleAddCart}>
                                <AddShoppingCartIcon /> Thêm vào giỏ hàng
                            </button>
                        </div>
                    </div>
                </div>
            {/* {console.log(product)} */}
                <div className="desc__tab">
                    <ProductDesc desc={product.description}/>
                </div>


            </div>
        </div>
    );
}

export default ProductDetail;