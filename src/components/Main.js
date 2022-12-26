import React from 'react'
import {useState} from 'react';


import Popup from './Popup';
import phone1 from '../assets/images/phone1-min.png'
import phone2 from '../assets/images/phone2-min.png'
import phone3 from '../assets/images/phone3-min.png'
import phone4 from '../assets/images/phone4-min.png'
import banner from '../assets/images/banner-min.png'
import banner2 from '../assets/images/banner2-min.png'




export default function Main(popup) {
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current);
    };
    
    const obj = {};
    return (
    <>

      {isShown && <Popup />}

        <div className={`app`}> 
            <div className="banner-area" style={{ backgroundImage: `url(${banner})`}}>
                <div className="bg-blackop" />
                <div className="container">
                <div className="bnr-content">
                    <div className="bnr-texts d-none d-md-block">
                    <h2>Ne yesem diye düşünme, sana <br /> en uygun yemeği bul</h2>
                    </div>
                    <div className="bnr-texts d-block d-md-none ">
                    <h2>Ne yesem diye düşünme</h2>
                    <p>Sana en uygun yemeği bul!</p>
                    </div>
                    <div className="bnr-buttons">
                    <a onClick={handleClick } className="button button--primary">Hemen Başla</a>
                    <a className="button button--secondary">Nasıl Çalışır?</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="container ph-mb-bg">
                <div className="phone-block">
                    <img src={phone1} alt="img" className=" d-none d-md-block" />
                    {/* <img src={phone1mb} alt="img" className=" d-block d-md-none" /> */}
                </div>
                <div className="div-line d-none d-md-block" />
            </div>
            <div className="container">
            <h2>Ne Yesem Nasıl Çalışır?</h2>
            <div className="div-line d-block d-md-none" />
            <div className="step-how-to">
                <div className="row">
                <div className="col-12 col-md-12 order-md-2">
                    <div className="step-text-area">
                    <div>
                        <h3>Soruları cevapla</h3>
                        <p>Soracağımız sorulara vereceğin cevaplar, sizin için doğru önerileri yapmamıza yardımcı olacak.</p>
                        <a>Hemen Başla</a>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 order-md-1">
                    <div className="step-phone-area">
                        <img src={phone2} alt="img" />
                    </div>
                </div>
                </div><div className="row">
                <div className="col-12 col-md-6">
                    <div className="step-text-area">
                    <div>
                        <h3>Sana Özel Yemeği Gör</h3>
                        <p>Cevaplarına göre çalışacak algoritmamız sana en optimum yemeği sunacak. </p>
                        <a>Önerini Gör</a>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="step-phone-area">
                         <img src={phone3} alt="img" />
                    </div>
                </div>
                </div><div className="row">
                <div className="col-12 col-md-5 order-md-2">
                    <div className="step-text-area">
                    <div>
                        <h3>İster Sipariş Ver, İster Kendin yap!</h3>
                        <p>Önerdiğimiz yemeği ister sipariş ver, ister yemek tarifini incele, ister sadece eğlencesine tekrar soruları cevapla :) </p>
                        <a>Sipariş Ver</a>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-md-7  order-md-1">
                    <div className="step-phone-area">
                         <img src={phone4} alt="img" />
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="banner-area bnr2" style={{ backgroundImage: `url(${banner2})`}}>
                <div className="bg-blackop" />
                <div className="container">
                <div className="bnr-content">
                    <div className="bnr-texts">
                        <h2>Bugün ne yesem, akşama ne pişirsem derdine son!</h2>
                        <p>Bugün ne yesem, ne pişirsem diye düşünme! Sorulara vereceğin cevaplara göre algoritmamız sana en uygun yemeği önersin.</p>
                    </div>
                    <div className="bnr-buttons">
                    <a onClick={handleClick } className="button button--primary">Hemen Başla</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}