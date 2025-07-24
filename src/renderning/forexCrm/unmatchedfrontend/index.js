import React, { useEffect, useState } from 'react'
import styles from './unmatchedfrontend.module.scss';
import CommonButton from '@/components/commonButton';
import DownArrow from '@/components/icons/downArrow';
import classNames from 'classnames';
const UnmatchedImage = '/assets/images/Unmatched.png';
const DreamsImage = '/assets/images/dreams.png';
const TradersDashboard = '/assets/images/TradersDashboard.png';
const Deposit = '/assets/images/Deposit.png';
const Withdrawal = '/assets/images/Withdrawal.png';
const TradeAccount = '/assets/images/Trade-Account-and-Wallet-Transfer.png';
const TradingAccount = '/assets/images/Trading-Account.png';
const FinancialReport = '/assets/images/Financial-Report.png';
const Promotions = '/assets/images/Promotions.png';
const PaymentMethods = '/assets/images/Payment-Methods.png';

const Accounts = '/assets/images/Accounts.png'
const TradeAccounts = '/assets/images/Trade-Accounts.png'
const Transactions = '/assets/images/Transactions.png'
const Payouts = '/assets/images/Payouts.png'
const Documents = '/assets/images/Documents.png'
const PaymentMethods2 = '/assets/images/Payment-Methods2.png'
const PSPService = '/assets/images/PSP-Service.png'
const Promotions2 = '/assets/images/Promotions2.png'

const FAQ_Content = [
  {
    question: "Traders Dashboard ",
    answer: "Stay on top of your trading with our comprehensive dashboard. View all your trade accounts and balances in one place, track your performance with dynamic weekly graphs, and make informed decisions with real-time analytics and streamlined management tools.",
    image: TradersDashboard
  },
  {
    question: "Deposit",
    answer: "Quickly and securely fund your account with our fast deposit options. Enjoy real-time balance updates and seamless transactions, ensuring your funds are ready for your next trade in no time.",
    image: Deposit
  },
  {
    question: "Withdrawal ",
    answer: "Effortlessly withdraw your funds with our secure and fast withdrawal process. Enjoy smooth transactions and real-time updates, ensuring quick access to your money whenever you need it.",
    image: Withdrawal
  },
  {
    question: "Trade Account and Wallet Transfer ",
    answer: "Seamlessly manage your assets with our Trade Account and Wallet Transfer feature. Effortlessly move funds between your trading account and wallet with just a few clicks, ensuring quick access to your capital for trading or withdrawals.",
    image: TradeAccount
  },
  {
    question: "Trading Account",
    answer: "Manage your investments with ease through our robust Trading Account. Access real-time market data, monitor your portfolio performance, and execute trades instantly. With intuitive tools and detailed analytics at your fingertips, you'll be empowered to make informed decisions and optimize your trading strategies.",
    image: TradingAccount
  },
  {
    question: "Financial Report",
    answer: "Stay informed with our comprehensive Trading Transfer Report. Easily track all your transfer activities between accounts, view detailed transaction histories, and analyze your trading patterns. With clear insights and organized data, you can make more informed decisions and enhance your trading strategies.",
    image: FinancialReport
  },
  {
    question: "Promotions ",
    answer: "Unlock exclusive opportunities with our Promotions! Take advantage of limited-time offers, bonuses, and special campaigns designed to enhance your trading experience. Whether you’re a seasoned trader or just starting, our promotions provide added value to help you maximize your investments.",
    image: Promotions
  },
  {
    question: "Payment Methods ",
    answer: "Discover a variety of secure and convenient Payment Methods tailored to fit your trading needs. From Digital currency and credit-card to e-wallets and bank transfers, our flexible options ensure quick and hassle-free transactions. Enjoy peace of mind with top-tier security protocols, allowing you to fund your account and withdraw your earnings with confidence.",
    image: PaymentMethods
  },
];

const Back_Office = [
  {
    question: "Accounts",
    answer: "The main area is dedicated to displaying account details with multiple columns that is shown the data for created account by users.Above the account table, there is a filter dropdown to select a date range and a search bar to filter by various criteria like U-ID, Mobile, Email, and Primary Trading Account. There's also a Reset button for clearing filters.",
    image: Accounts
  },
  {
    question: "Trade Accounts",
    answer: "The main area is dedicated to displaying Trade account details with multiple columns .Above Tabledata will show data about trading accounts list which is contain trading details done by users.",
    image: TradeAccounts
  },
  {
    question: "Transactions",
    answer: "The main area is dedicated to displaying deposit, deposit-credit, withdrawals ,withdrawals-credit and transfer tab.which is contain list about its corresponding details.Using this tab admin can make deposit, make withdrawals and transfer amount account to account.",
    image: Transactions
  },
  {
    question: "Payouts",
    answer: "The main area is dedicated to displaying payout details which is contain available payment type,payment method by which user can transfer amount account to accounts.and using the above filters user can filter out data for reliable experience.",
    image: Payouts
  },
  {
    question: "Documents",
    answer: "The main area is dedicated to displaying typically refer to various types of paperwork or digital files that users need to upload or manage as part of the account setup, compliance, and trading processes.",
    image: Documents
  },
  {
    question: "Payment Methods",
    answer: "The main area is dedicated to displaying available payment method list by which user can transfer or deposit amount.",
    image: PaymentMethods2
  },
  {
    question: "PSP Service",
    answer: "The main area is dedicated to displaying  Payment Service Provider (PSP) is a third-party company that facilitates online payments for e-commerce businesses. They act as intermediaries between customers, merchants, and financial institutions, allowing for the seamless processing of various payment methods.Psp service like Bank wire,Credit card ,digital Currancy,e-wallet,Local Bank Transfer etc.",
    image: PSPService
  },
  {
    question: "Promotions",
    answer: "The main area is dedicated to displaying list of available promotions. Using enrollment promotions user can join promotion then it will drag in active panel and ended promotion will shown in ended tab.",
    image: Promotions2
  },
];

export default function Unmatchedfrontend() {
  const [toggle_1, setToggle_1] = useState(0);
  const [toggle, setToggle] = useState(0);
  const [image, setImage] = useState(TradersDashboard)
  const [image_2, setImage_2] = useState(Accounts)
  const [animateClass, setAnimateClass] = useState('');

  useEffect(() => {
    if (image || image_2) {
      setAnimateClass('animate__animated animate__fadeIn');
      const timer = setTimeout(() => {
        setAnimateClass('');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [image, image_2]);

  const handleToggle = (index) => {
    if (toggle === index) {
      setToggle(null);
    } else {
      setToggle(index);
    }
  };


  const handleOnToggle_1 = (index) => {
    if (toggle_1 === index) {
      setToggle_1(null)
    } else {
      setToggle_1(index)
    }
  }
  return (
    <div className={styles.unmatchedfrontend}>
      <div className="container">
        <div className={styles.center}>
          <CommonButton text="Features" />
        </div>
        <h2>
          Client Trader's Room
        </h2>
        <div className={styles.grid}>
          <div className={styles.griditems}>
            {FAQ_Content?.map((item, i) => {
              return (
                <div className={classNames(styles.mainbox, toggle === i ? styles.active : "")}>
                  <div className={styles.cardHeader} onClick={() => { handleToggle(i); setImage(item?.image) }}>
                    <span>{item?.question}</span>
                    <div>
                      <DownArrow />
                    </div>
                  </div>
                  <div className={classNames(styles.cardbody, toggle === i ? styles.show : styles.hide)}>
                    <p>
                      {item?.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className={styles.griditems}>
            <div >
              <div className={styles.img}>
                {/* {image &&  */}
                <img className={animateClass} src={image} alt="image" />
                {/* } */}
              </div>
            </div>
          </div>
        </div>
        <h2>
          Back office Panel
        </h2>
        <div className={styles.grid}>
          <div className={styles.griditems}>
            {Back_Office?.map((item, i) => {
              return (
                <div className={classNames(styles.mainbox, toggle_1 === i ? styles.active : "")}>
                  <div className={styles.cardHeader} onClick={() => { handleOnToggle_1(i); setImage_2(item?.image) }}>
                    <span>{item?.question}</span>
                    <div>
                      <DownArrow />
                    </div>
                  </div>
                  <div className={classNames(styles.cardbody, toggle_1 === i ? styles.show : styles.hide)}>
                    <p>
                      {item?.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className={styles.griditems}>
            <div className={styles.img}>
              <img className={animateClass} src={image_2} alt="DreamsImage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
