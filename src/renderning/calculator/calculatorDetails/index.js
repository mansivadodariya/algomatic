import React from 'react'
import CommonButton from '@/components/commonButton';
import Slider from "react-slick";
const CardLogo = '/assets/icons/card-logo.svg';
import styles from './calculatorDetails.module.scss';
export default function CalculatorDetails() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
  return (
    <div>
       <div className={styles.calculatorDetails}>
            <div className="container">
                
                <div className={styles.itemsAlignment}>
                    <div className={styles.items}>
                        <div className={styles.logoCenteralignment}>
                            <div className={styles.icons}>|</div>
                        </div>
                        <p>Compliance</p>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.logoCenteralignment}>
                            <div className={styles.icons}>|</div>
                        </div>
                        <p>Trading Platform</p>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.logoCenteralignment}>
                            <div className={styles.icons}>|</div>
                        </div>
                        <p>CRM & Trader’s Room</p>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.logoCenteralignment}>
                            <div className={styles.icons}>|</div>
                        </div>
                        <p>Cabinet Mobile App
                        </p>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.logoCenteralignment}>
                            <div className={styles.icons}>|</div>
                        </div>
                        <p>CRM Mobile App</p>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.logoCenteralignment}>
                            <div className={styles.icons}>|</div>
                        </div>
                        <p>Risk Management System</p>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.logoCenteralignment}>
                            <div className={styles.icons}>|</div>
                        </div>
                        <p>Liquidity</p>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.logoCenteralignment}>
                            <div className={styles.icons}>|</div>
                        </div>
                        <p>Copy Trading</p>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.logoCenteralignment}>
                            <div className={styles.icons}>|</div>
                        </div>
                        <p>PAMM</p>
                    </div> <div className={styles.items}>
                        <div className={styles.logoCenteralignment}>
                            <div className={styles.icons}>|</div>
                        </div>
                        <p>CRM Mobile App</p>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.logoCenteralignment}>
                            <div className={styles.icons}>|</div>
                        </div>
                        <p>Risk Management System</p>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.logoCenteralignment}>
                            <div className={styles.icons}>|</div>
                        </div>
                        <p>Liquidity</p>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.logoCenteralignment}>
                            <div className={styles.icons}>|</div>
                        </div>
                        <p>Copy Trading</p>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.logoCenteralignment}>
                            <div className={styles.icons}>|</div>
                        </div>
                        <p>PAMM</p>
                    </div>

                </div>
                <div className={styles.tradingPlatform}>
                    <h3>Compliance</h3>
                </div>
                <Slider {...settings}>
                   {
                    [...Array(10)].map(()=> {
                        return(
                            <div className={styles.cardbox}>
                            <div className={styles.cardHeaderalignment}>
                                <img src={CardLogo} alt="CardLogo" />
                                <input type="radio" />
                            </div>
                            <div className={styles.cardDetails}>
                                <h4>Lorem Ipsum is simply</h4>
                                <p>30 Days</p>
                            </div>
                            <div className={styles.cardBottom}>
                                <span>Total Cost</span>
                                <p>$ 6,000.00</p>
                            </div>
                        </div>
                        )
                    })
                   }
                </Slider>
                <div className={styles.totalAmount}>
                    <p>Total Amount</p>
                    <span>$ 6,000.00</span>
                </div>
            </div>
        </div>
    </div>
  )
}
