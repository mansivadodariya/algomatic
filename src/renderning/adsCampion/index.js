'use client'
import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import styles from './adsCampion.module.scss';
import classNames from 'classnames';
import Webinarfooter from './webinarfooter';
import Webinarfaq from './webinarfaq';
import { useAppContext } from '@/context/AppContext';
const gamesData = [
    {
        title: 'Volatile markets demand precision, speed, and strategy — not guesswork.',
        description:
            'AlgoMatic is built to perform when markets move fast, helping you execute smarter trades with automation and logic-driven systems. Stay ahead of market swings and trade with confidence.',

        points: [
            'AlgoMatic ',
            'SmartTrading ',
            'AutomatedTrading ',
            'ForexTrading ',
            'VolatileMarkets  ',
            'TradeSmart   ',
        ],
        button: "Chat with Expert team",
        image: '/assets/images/first.jpeg',
    },
    {
        title: 'Trade smarter, not harder.',
        description:
            'With AlgoMatic’s Spot–Future Spread Based Trading, you’re leveraging price differences between markets instead of predicting direction. That means a more systematic, strategy-driven approach powered by automation and precision execution.',
        points: [
            'AlgoTrading ',
            'ArbitrageTrading ',
            'AutomatedTrading ',
            'TradingStrategy ',
            'SmartInvesting  ',
            'QuantTrading   ',
            'FinTech  ',
            'AlgorithmicTrading  ',
        ],
        button: "Chat with our Expert team",
        image: '/assets/images/sec.jpeg',
    },
    {
        title: 'Designed to execute gold arbitrage through logic-driven automation, minimizing emotional bias and maintaining consistency across market conditions.',
        description:
            'Built for traders who value structure, discipline, and systems-led execution.',
        points: [
            'AlgoMatic ',
            'GoldArbitrage ',
            'AlgoTrading',
            'AutomatedTrading ',
            'EmotionFreeTrading',
            'RuleBasedTrading ',
            'TradingSystems',
        ],
        button: "Chat with Expert arbitrage team",
        image: '/assets/images/three.jpeg',
    },
    {
        title: 'Hedging logic built directly into the system’s execution flow.',
        description:
            'Each trade is structured with risk considerations in mind, driven by algorithms that focus on balance, control, and consistency rather than market guesses.',
        points: [
            'AlgoMatic ',
            'SmartHedging ',
            'AlgoTrading',
            'AutomatedTrading ',
            'HedgedTrading',
            'RuleBasedTrading ',
            'TradingSystems',
            'FinTech ',
            'TradingTechnology  ',
            'GoldTrading',
        ],
        button: "Chat with Expert Hedging team",
        image: '/assets/images/four.jpeg',
    },
    {
        title: 'Market inefficiencies exist when prices momentarily fall out of sync.',
        description:
            'The system is designed to identify and act on these gaps using predefined logic and automated execution, focused on structure, not speculation.',
        points: [
            'AlgoMatic  ',
            'PriceInefficiency  ',
            'AlgoTrading',
            'AutomatedTrading ',
            'ArbitrageTrading',
            'RuleBasedTrading  ',
            'TradingSystems',
            'FinTech  ',
            'TradingTechnology  ',
        ],
        button: "Chat with our strategy Expert team",
        image: '/assets/images/five.jpeg',
    },
    {
        title: 'No guesswork. No predictions. Just precision.',
        description:
            'AlgoMatic is built for traders who prefer logic over luck, leveraging smart automation to identify arbitrage opportunities in real time. Let the system do the work while you stay in control.',
        points: [
            'AlgoMatic  ',
            'AlgoTrading   ',
            'ArbitrageTrading ',
            'SmartTrading  ',
            'Automation ',
            'TradingTech  ',
            'RuleBasedTrading ',
            'Fintech   ',
            'TradeSmart   ',
            'DigitalTrading  ',
        ],
        button: "Chat with our Expert team",
        image: '/assets/images/six.jpeg',
    },
    {
        title: 'Capital protection isn’t optional, it’s the foundation.',
        description:
            'AlgoMatic is designed with a logic-first approach, helping traders focus on disciplined execution and risk-aware strategies through automation. Because smart trading starts with protecting what matters most.',
        points: [
            'AlgoMatic   ',
            'CapitalProtection   ',
            'SmartTrading   ',
            'AlgoTrading   ',
            'RiskManagement   ',
            'TradingTech   ',
            'Automation   ',
            'TradeSmart   ',
            'Fintech   ',
            'RuleBasedTrading  ',
        ],
        button: "Chat with our Expert team",
        image: '/assets/images/seven.jpeg',
    },
    {
        title: 'Trade gold the smart way — with precision, speed, and strategy. ✨',
        description:
            'AlgoMatic empowers you to approach the market like institutions do, using technology instead of guesswork.',
        points: [
            'AlgoMatic',
            'GoldTrading ',
            'TradeSmart ',
            'AlgorithmicTrading ',
            'SmartInvesting ',
            'ForexGold ',
            'InstitutionalTrading ',
            'AutomatedTrading',
        ],
        button: "Chat with our strategy Expert team",
        image: '/assets/images/eight.jpeg',
    },
    {
        title: 'Consistency. Hedging. Automation.',
        description:
            'Let technology handle the execution while you focus on results. AlgoMatic is built for traders who want a structured, disciplined, and smarter approach to the markets.',
        points: [
            'AlgoMatic',
            'AutomatedTrading  ',
            'AlgoTrading  ',
            'SmartTrading  ',
            'ConsistentTrading  ',
            'ForexAutomation  ',
            'TradingTechnology ',
        ],
        button: "Chat with Hedging Automation Expert team",

        image: '/assets/images/none.jpeg',
    },
];
export default function AdsCampion() {
    const { utilitySettings } = useAppContext();
    return (
        <div>
            <div className={styles.adsCampionAlignment}>
                <div className='container-xl'>
                    <div className={classNames(styles.allBoxAlignment)}  >
                        {gamesData.map((game, index) => {
                            return (
                                <div
                                    key={game.title}
                                    className={styles.box}
                                >
                                    <div className={styles.content}>
                                        <h3>{game.title}</h3>
                                        <p>{game.description}</p>
                                        <ul>
                                            {game.points.map((point, idx) => (
                                                <li key={idx}>{point}</li>
                                            ))}
                                        </ul>
                                        <div className={styles.buttonUi}>
                                            <a href={`https://wa.me/${utilitySettings?.phoneNo}`} target="_blank" >
                                                <button>
                                                    {game.button}
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className={styles.image}
                                        whileHover={{ scale: 1.05, rotate: 2 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                    >
                                        <img
                                            src={game.image}
                                            alt={`Play To Earn Crypto Game - ${game.title}`}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <Webinarfaq />
            <Webinarfooter title='Lets Connect With Us' />
        </div>
    )
}
