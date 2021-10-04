import React from 'react';
import PropTypes from 'prop-types';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import './filterbyservice.scss'
import { useState } from 'react';

FilterByService.propTypes = {
    initProductList: PropTypes.object,
    onCheck: PropTypes.func,
};

function FilterByService(props) {
    const { initProductList, onCheck } = props;
    const isFreeShipBool=initProductList.isFreeShip==="true" ? true : false;
    const isPromotionBool=initProductList.isPromotion==="true" ? true : false;
    const handleOnChecked=(e)=>{
      
        if (e.target.name === "isPromotion") {
            onCheck({
                ...initProductList, 
                isPromotion: !isPromotionBool,
            })
        }
           
        if (e.target.name === "isFreeShip") {
            onCheck({ 
                ...initProductList, 
                isFreeShip: !isFreeShipBool,
            })
        }  
    }
    return (

        <div className="service__filter">
            <h5>
                <FactCheckIcon />
                DỊCH VỤ
            </h5>
            <div className="service__list">
                <div className="service__item">
                    <input type="checkbox" name="isPromotion" value="isPromotion" checked={initProductList.isPromotion==="true" ? true : false} onChange={handleOnChecked} />
                    <img src="https://salt.tikicdn.com/ts/upload/f9/ad/0e/a8a97f5ac7661d637942b42796893662.png" alt="service" className="service__img" />
                    <p>Khuyến mãi</p>
                </div>

                <div className="service__item">
                    <input type="checkbox" name="isFreeShip" value="isFreeShip" checked={initProductList.isFreeShip==="true" ? true : false} onChange={handleOnChecked} />
                    <img src="https://salt.tikicdn.com/ts/upload/af/84/fc/2037c3b93a81767aed21358ebf3f8b8e.png" alt="service" className="service__img" />
                    <p>Không giới hạn</p>
                </div>
            </div>

        </div>
    );
}

export default FilterByService;