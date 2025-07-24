import React from 'react'
import styles from './buildingaBrokerage.module.scss';
import Link from 'next/link';
const BuildingImage = '/assets/images/building.png';
export default function BuildingaBrokerage() {
    return (
        <div className="container">
            <div className={styles.buildingaBrokerage}>
                <div className={styles.grid}>
                    <div className={styles.griditems}>
                        <h2>
                            Building a brokerage from scratch will cost you $5 mln. Our fees? Divide
                            that by a thousand
                        </h2>
                        <Link href="/contact-us">
                        <button>
                            Get Started Now
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path d="M20.9099 11.0647L14.8451 5L13.9361 5.909L19.871 11.8451H3.5V13.1309H19.8736L13.9361 19.067L14.8451 19.976L20.9099 13.9126C21.2904 13.532 21.5 13.0254 21.5 12.488C21.5 11.9506 21.2904 11.444 20.9099 11.066V11.0647Z" fill="#9657FA" />
                            </svg>
                        </button>
                        </Link>
                    </div>
                    <div className={styles.griditems}>
                        <div className={styles.img}>
                            <img src={BuildingImage} alt="BuildingImage"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
