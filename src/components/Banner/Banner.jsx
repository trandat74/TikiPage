import React from 'react';
import './banner.scss';




function Banner() {
    return (
        <section className="section__baner">
            <div className="banner__container">
                <div className="banner__left">
                    <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/a2/ea/e0/2039ad3a146affade25532ed4e2d1b64.png" alt="banner" />
                </div>
                <div className="banner__right">
                    <img src="https://salt.tikicdn.com/cache/w400/ts/banner/40/6c/26/3fc89bed0cb796f26f055a539876c70d.png" alt="banner" />
                </div>
            </div>
        </section>
    );
}

export default Banner;