import React, { useState } from "react";
import styles from "./calculator.module.scss";
import CommonButton from "@/components/commonButton";
import Slider from "react-slick";
import classNames from "classnames";
import Button from "@/components/button";
import RightLgArrow from "@/components/icons/rightLgArrow";
import toast from "react-hot-toast";
import axios from "axios";
const CardLogo = "/assets/icons/card-logo.svg";

export default function Calculator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [modal, setModal] = useState(false);
  const [totalCost, setTotalCost] = useState(0);
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [selectedRadio, setSelectedRadio] = useState({
    step1: {
      name: "",
      title: "",
      value: 0,
    },
    step2: {
      name: "",
      title: "",
      value: 0,
    },
    step3: {
      name: "",
      title: "",
      value: 0,
    },
    step4: {
      name: "",
      title: "",
      value: 0,
    },
    step5: {
      name: "",
      title: "",
      value: 0,
    },
    step6: {
      name: "",
      title: "",
      value: 0,
    },
    step7: {
      name: "",
      title: "",
      value: 0,
    },
  });
  const [previousAmount, setPreviousAmount] = useState(0);

  const steps = ["Compliance", "Logo", "Website", "CRM & Trader's Room", "CRM Mobile App", "Risk Management System", "Liquidity"];


  const handleNext = () => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    setTotalCost((prevCost) => prevCost + selectedAmount);
    setSelectedAmount(0);
    setPreviousAmount(selectedAmount);
  };

  const handleSkip = () => {
    setCurrentStep((prev) => (prev + 1 < steps.length ? prev + 1 : steps.length - 1));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
    setTotalCost((prevCost) => prevCost - previousAmount);
  };

  const handleSelectAmount = (event, name, title) => {
    const selectedValue = parseInt(event.target.value);
    setSelectedAmount(selectedValue);
    setSelectedRadio({
      ...selectedRadio,
      [name]: { name: event.target.name, title: title, value: event.target.value },
    });
  };
  const [contactData, setContactData] = useState({ country: "Afghanistan" });
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const disposableDomains = ["soebing", "yopmail", "sharklasers", "guerrillamail", "getairmail", "grr", "guerrillamailblock", "pokemail", "spam4", "cazlq", "sloveniakm", "mybx", "memsg", "matra", "maildrop"];

  const bindInput = (value) => {
      var regex = new RegExp("^[^0-9]*$");
      var key = String.fromCharCode(!value.charCode ? value.which : value.charCode);
      if (regex.test(key)) {
          value.preventDefault();
          return false;
      }
  };

  const validateData = () => {
      let isValid = true;
      let err = {};
      let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!contactData?.email) {
          err.email = "Please enter your email address";
          isValid = false;
      } else if (contactData?.email && regexEmail.test(contactData?.email) === false) {
          err.email = "Please enter valid email address";
          isValid = false;
      }

      if (!contactData?.firstName) {
          err.firstName = "Please enter your name";
          isValid = false;
      }

      if (!contactData?.phone) {
          err.phone = "Please enter phone number";
          isValid = false;
      }

      if (!contactData?.message) {
          err.message = "Please enter your message";
          isValid = false;
      }

      setError(err);
      return isValid;
  };

  const isDisposableEmail = (email) => {
      let domain = email.split("@")[1].split(".")[0];
      if (disposableDomains.includes(domain)) {
          return true;
      } else {
          return false;
      }
  };


  
  const functionPostContact = async () => {
      if (validateData()) {
          if (isDisposableEmail(contactData?.email)) {
              toast.error("This email is not allowed. Please use your official email");
              setContactData({
                  ...contactData,
                  email: "",
              });
          } else {

              setIsLoading(true)
              let additionalInfo = "";

              for (const step in selectedRadio) {
                  if (selectedRadio[step].title && selectedRadio[step].value) {
                      additionalInfo += `${selectedRadio[step].title}: ${selectedRadio[step].value}\n`;
                  }
              }
              const newData = {
                  text: `Name:${contactData?.firstName}\n Email:${contactData?.email}\n Country:${contactData?.country} Phone Number:${contactData?.phone}\n Description:${contactData?.message}\n${additionalInfo}`,
              };
              await axios(`https://hooks.slack.com/services/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`, {
                  method: "POST",
                  data: JSON.stringify(newData),
                  headers: {
                      "Content-type": "application/x-www-form-urlencoded",
                  },
              })
                  .then((res) => {
                      setIsLoading(false)
                      toast.success("Thank you for contacting us. We will get back to you soon.");
                      setContactData({
                          firstName: "",
                          email: "",
                          phone: "",
                          country: "",
                          message: "",
                      });
                      setModal(false);
                  })
                  .catch((err) => {
                      toast.error("Something went wrong");
                      setIsLoading(false)
                  });
          }
      }
  };

  
  return (
    <>
      <div className={styles.calculatorAlignment}>
        <div className="container">
          <div className={styles.btnCenter}>
            <CommonButton text="Calculator" />
          </div>
          <div className={styles.title}>
            <h2>Forex Calculator</h2>
          </div>
          <div className={styles.itemsAlignment}>
            {steps?.map((step, index) => {
              return (
                <div>
                  <div
                    className={classNames(
                      styles.items,
                      { [styles.itemsActive]: currentStep >= index } // Conditional active class
                    )}
                  >
                    <div className={styles.logoCenteralignment}>
                      <div className={styles.icons}>|</div>
                    </div>
                    <p>{step}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.tradingPlatform}>
            <h3>Trading Platform</h3>
          </div>
          {currentStep === 0 ? (
            <div className={styles.cardGrid}>
              <div className={styles.cardbox}>
                <div className={styles.cardHeaderalignment}>
                  <img src={CardLogo} alt="CardLogo" />
                  <input
                    type="radio"
                    name="license1"
                    checked={selectedRadio?.step1?.name === "license1"}
                    value={0}
                    onChange={(e) => handleSelectAmount(e, "step1", "Mauritius Forex License")}
                  />
                </div>
                <div className={styles.cardDetails}>
                  <h4>Mauritius Forex License</h4>
               
                </div>
                {/* <div className={styles.cardBottom}>
                  <span>Total </span>
                  <p>$ 35000</p>
                </div> */}
              </div>
              <div className={styles.cardbox}>
                <div className={styles.cardHeaderalignment}>
                  <img src={CardLogo} alt="CardLogo" />
                  <input
                    type="radio"
                    name="license2"
                    checked={selectedRadio?.step1?.name === "license2"}
                    value={0}
                    onChange={(e) => handleSelectAmount(e, "step1", "St. Vincent Forex License")}
                  />
                </div>
                <div className={styles.cardDetails}>
                  <h4>St. Vincent Forex License</h4>
                </div>
                {/* <div className={styles.cardBottom}>
                  <span>Total   </span>
                  <p>$ 25000</p>
                </div> */}
              </div>
            </div>
          ) : currentStep === 1 ? (
            <div className={styles.cardGrid}>
              <div className={styles.cardbox}>
                <div className={styles.cardHeaderalignment}>
                  <img src={CardLogo} alt="CardLogo" />
                  <input
                    type="radio"
                    name="license3"
                    checked={selectedRadio?.step2?.name === "license3"}
                    value={500}
                    onChange={(e) => handleSelectAmount(e, "step2", "Standard Logo")}
                  />
                </div>
                <div className={styles.cardDetails}>
                  <h4>Standard Logo</h4>
                
                </div>
                <div className={styles.cardBottom}>
                  <span>Total Cost</span>
                  <p>$ 500</p>
                </div>
              </div>
              <div className={styles.cardbox}>
                <div className={styles.cardHeaderalignment}>
                  <img src={CardLogo} alt="CardLogo" />
                  <input
                    type="radio"
                    name="license4"
                    checked={selectedRadio?.step2?.name === "license4"}
                    value={1000}
                    onChange={(e) => handleSelectAmount(e, "step2", "Premium Logo")}
                  />
                </div>
                <div className={styles.cardDetails}>
                  <h4>Premium Logo</h4>
                </div>
                <div className={styles.cardBottom}>
                  <span>Total Cost</span>
                  <p>$ 1000</p>
                </div>
              </div>
            </div>
          ) : currentStep === 2 ? (
            <div className={styles.cardGrid}>
              <div className={styles.cardbox}>
                <div className={styles.cardHeaderalignment}>
                  <img src={CardLogo} alt="CardLogo" />
                  <input
                    type="radio"
                    name="license5"
                    checked={selectedRadio?.step3?.name === "license5"}
                    value={1000}
                    onChange={(e) => handleSelectAmount(e, "step3", "Standard Website")}
                  />
                </div>
                <div className={styles.cardDetails}>
                  <h4>Standard Website</h4>
                 
                </div>
                <div className={styles.cardBottom}>
                  <span>Total Cost</span>
                  <p>$ 1000</p>
                </div>
              </div>
              <div className={styles.cardbox}>
                <div className={styles.cardHeaderalignment}>
                  <img src={CardLogo} alt="CardLogo" />
                  <input
                    type="radio"
                    name="license6"
                    checked={selectedRadio?.step3?.name === "license6"}
                    value={2500}
                    onChange={(e) => handleSelectAmount(e, "step3", "Premium Website")}
                  />
                </div>
                <div className={styles.cardDetails}>
                  <h4>Premium Website</h4>
                
                </div>
                <div className={styles.cardBottom}>
                  <span>Total Cost</span>
                  <p>$ 2500</p>
                </div>
              </div>
            </div>
          ) : currentStep === 3 ? (
            <div className={styles.cardGrid}>
              <div className={styles.cardbox}>
                <div className={styles.cardHeaderalignment}>
                  <img src={CardLogo} alt="CardLogo" />
                  <input
                    type="radio"
                    name="license7"
                    value={4000}
                    checked={selectedRadio?.step4?.name === "license7"}
                    onChange={(e) => handleSelectAmount(e, "step4", "CRM Panel")}
                  />
                </div>
                <div className={styles.cardDetails}>
                  <h4>CRM Panel</h4>
                </div>
                <div className={styles.cardBottom}>
                  <div>
                    <span>One Time Cost</span>
                    <p>$ 5000</p>
                  </div>
                  <div>
                    <span>Monthly</span>
                    <p>$ 4000</p>
                  </div>
                </div>
              </div>
            </div>
          ) : currentStep === 4 ? (
            <div className={styles.cardGrid}>
              <div className={styles.cardbox}>
                <div className={styles.cardHeaderalignment}>
                  <img src={CardLogo} alt="CardLogo" />
                  <input
                    type="radio"
                    name="license8"
                    value={1000}
                    checked={selectedRadio?.step5?.name === "license8"}
                    onChange={(e) => handleSelectAmount(e, "step5", "CRM Mobile App")}
                  />
                </div>
                <div className={styles.cardDetails}>
                  <h4>CRM Mobile App</h4>
                </div>
                <div className={styles.cardBottom}>
                  <div>
                    <span>One Time Cost</span>
                    <p>$ 500</p>
                  </div>
                  <div>
                    <span>Monthly</span>
                    <p>$ 1000</p>
                  </div>
                </div>
              </div>
            </div>
          ) : currentStep === 5 ? (
            <div className={styles.cardGrid}>
              <div className={styles.cardbox}>
                <div className={styles.cardHeaderalignment}>
                  <img src={CardLogo} alt="CardLogo" />
                  <input
                    type="radio"
                    name="license9"
                    value={500}
                    checked={selectedRadio?.step6?.name === "license9"}
                    onChange={(e) => handleSelectAmount(e, "step6", "RMS with 1 Manager")}
                  />
                </div>
                <div className={styles.cardDetails}>
                  <h4>RMS with 1 Manager</h4>
                </div>
                <div className={styles.cardBottom}>
                  <span>Total Cost</span>
                  <p>$ 500</p>
                </div>
              </div>
              <div className={styles.cardbox}>
                <div className={styles.cardHeaderalignment}>
                  <img src={CardLogo} alt="CardLogo" />
                  <input
                    type="radio"
                    name="license10"
                    value={1000}
                    checked={selectedRadio?.step6?.name === "license10"}
                    onChange={(e) => handleSelectAmount(e, "step6", "RMS with 2 Manager")}
                  />
                </div>
                <div className={styles.cardDetails}>
                  <h4>RMS with 2 Manager</h4>
                </div>
                <div className={styles.cardBottom}>
                  <span>Total Cost</span>
                  <p>$ 1000</p>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.cardGrid}>
              <div className={styles.cardbox}>
                <div className={styles.cardHeaderalignment}>
                  <img src={CardLogo} alt="CardLogo" />
                  <input
                    type="radio"
                    name="license11"
                    value={2000}
                    checked={selectedRadio?.step7?.name === "license11"}
                    onChange={(e) => handleSelectAmount(e, "step7", "Liquidity")}
                  />
                </div>
                <div className={styles.cardDetails}>
                  <h4>Liquidity</h4>
                </div>
                <div className={styles.cardBottom}>
                  <div>
                    <span>One Time Cost</span>
                    <p>Minimum deposit $20k</p>
                  </div>
                  <div>
                    <span>Monthly</span>
                    <p>$ 2000</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className={styles.threeAlignment}>
            <div className={styles.rightButton}>
              {currentStep > 0 && (
                <div onClick={handlePrev} disabled={currentStep === 0}>
                  <Button text="Back" outline={true} />
                </div>
              )}
            </div>
            {currentStep < 6 && (
              <div className={styles.rightButton}>
                <div onClick={handleSkip} disabled={currentStep >= steps.length - 1}>
                  <Button text="Skip" outline={true} />
                </div>
                <div onClick={handleNext} disabled={currentStep === steps.length - 1}>
                  <Button text="Next" />
                </div>
              </div>
            )}
          </div>
          <div className={styles.totalAmount}>
            <p>Total Amount</p>
            <div className={styles.totlRight}>
              <span> ${totalCost ?? 0}</span>
              <div onClick={() => setModal(!modal)}>
                <Button text="Proceed " outline={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <div className={styles.modalWrapper}>
          <div className={styles.modalMd}>
            <div className={styles.modalClose}>
              <div onClick={() => setModal(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
              </div>
            </div>
            <div className={styles.modalbody}>
              <div className={styles.detailsShow}>
                {Object.entries(selectedRadio)
                  .filter(([_, { value }]) => value > 0)
                  .map(([key, { name, title, value }]) => (
                    <div key={key} className={styles.listText}>
                      <h4>{title}:</h4>
                      <span>${value}</span>
                    </div>
                  ))}
              </div>
              <div>
                <h3>Send the Inquiry</h3>
                <p>We guarantee to get back to you within a business day.</p>
                <div className={styles.twoCol}>
                            <div className={styles.input}>
                                <label>First Name <span>* {error?.firstName}</span></label>

                                <input type="name" placeholder="Enter your first name" value={contactData?.firstName} onChange={(e) => {
                                    setContactData({
                                        ...contactData,
                                        firstName: e.target.value,
                                    });
                                    setError({ ...error, firstName: "" });
                                }} />
                            </div>
                            <div className={styles.input}>
                                <label>Email Address
                                    <span>* {error?.email}</span></label>
                                <input type="email" placeholder="Enter your email address" value={contactData?.email} onChange={(e) => {
                                    setContactData({
                                        ...contactData,
                                        email: e.target.value,
                                    });
                                    setError({ ...error, email: "" });
                                }} />
                            </div>
                            <div className={styles.input}>
                                <label>Country</label>
                                <select value={contactData?.country} onChange={(e) => setContactData({
                                    ...contactData,
                                    country: e.target.value,
                                })}>
                                    <option value="Afghanistan">Afghanistan</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Algeria">Algeria</option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Angola">Angola</option>
                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Azerbaijan">Azerbaijan</option>
                                    <option value="Bahamas">Bahamas</option>
                                    <option value="Bahrain">Bahrain</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Barbados">Barbados</option>
                                    <option value="Belarus">Belarus</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="Belize">Belize</option>
                                    <option value="Benin">Benin</option>
                                    <option value="Bhutan">Bhutan</option>
                                    <option value="Bolivia">Bolivia</option>
                                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                    <option value="Botswana">Botswana</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="Brunei">Brunei</option>
                                    <option value="Bulgaria">Bulgaria</option>
                                    <option value="Burkina">Burkina Faso</option>
                                    <option value="Burundi">Burundi</option>
                                    <option value="Cabo Verde">Cabo Verde</option>
                                    <option value="Cambodia">Cambodia</option>
                                    <option value="Cameroon">Cameroon</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Central African Republic">Central African Republic</option>
                                    <option value="Chad">Chad</option>
                                    <option value="Chile">Chile</option>
                                    <option value="China">China</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Comoros">Comoros</option>
                                    <option value="Congo">Congo</option>
                                    <option value="Congo (DRC)">Congo (DRC)</option>
                                    <option value="Costa Rica">Costa Rica</option>
                                    <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                                    <option value="Croatia">Croatia</option>
                                    <option value="Cuba">Cuba</option>
                                    <option value="Cyprus">Cyprus</option>
                                    <option value="Czech Republic">Czech Republic</option>
                                    <option value="Denmark">Denmark</option>
                                    <option value="Djibouti">Djibouti</option>
                                    <option value="Dominica">Dominica</option>
                                    <option value="Dominican Republic">Dominican Republic</option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="Egypt">Egypt</option>
                                    <option value="El Salvador">El Salvador</option>
                                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                                    <option value="Eritrea">Eritrea</option>
                                    <option value="Estonia">Estonia</option>
                                    <option value="Eswatini">Eswatini</option>
                                    <option value="Ethiopia">Ethiopia</option>
                                    <option value="Fiji">Fiji</option>
                                    <option value="Finland">Finland</option>
                                    <option value="France">France</option>
                                    <option value="Gabon">Gabon</option>
                                    <option value="Gambia">Gambia</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Greece">Greece</option>
                                    <option value="Grenada">Grenada</option>
                                    <option value="Guatemala">Guatemala</option>
                                    <option value="Guinea">Guinea</option>
                                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                                    <option value="Guyana">Guyana</option>
                                    <option value="Haiti">Haiti</option>
                                    <option value="Honduras">Honduras</option>
                                    <option value="Hungary">Hungary</option>
                                    <option value="Iceland">Iceland</option>
                                    <option value="India">India</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Iran">Iran</option>
                                    <option value="Iraq">Iraq</option>
                                    <option value="Ireland">Ireland</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Jamaica">Jamaica</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Jordan">Jordan</option>
                                    <option value="Kazakhstan">Kazakhstan</option>
                                    <option value="Kenya">Kenya</option>
                                    <option value="Kiribati">Kiribati</option>
                                    <option value="North Korea">North Korea</option>
                                    <option value="South Korea">South Korea</option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                                    <option value="Laos">Laos</option>
                                    <option value="Latvia">Latvia</option>
                                    <option value="Lebanon">Lebanon</option>
                                    <option value="Lesotho">Lesotho</option>
                                    <option value="Liberia">Liberia</option>
                                    <option value="Libya">Libya</option>
                                    <option value="Liechtenstein">Liechtenstein</option>
                                    <option value="Lithuania">Lithuania</option>
                                    <option value="Luxembourg">Luxembourg</option>
                                    <option value="Madagascar">Madagascar</option>
                                    <option value="Malawi">Malawi</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Maldives">Maldives</option>
                                    <option value="Mali">Mali</option>
                                    <option value="Malta">Malta</option>
                                    <option value="Marshall Islands">Marshall Islands</option>
                                    <option value="Mauritania">Mauritania</option>
                                    <option value="Mauritius">Mauritius</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Micronesia">Micronesia</option>
                                    <option value="Moldova">Moldova</option>
                                    <option value="Monaco">Monaco</option>
                                    <option value="Mongolia">Mongolia</option>
                                    <option value="Montenegro">Montenegro</option>
                                    <option value="Morocco">Morocco</option>
                                    <option value="Mozambique">Mozambique</option>
                                    <option value="Myanmar">Myanmar</option>
                                    <option value="Namibia">Namibia</option>
                                    <option value="Nauru">Nauru</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Netherlands">Netherlands</option>
                                    <option value="New Zealand">New Zealand</option>
                                    <option value="Nicaragua">Nicaragua</option>
                                    <option value="Niger">Niger</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="North Macedonia">North Macedonia</option>
                                    <option value="Norway">Norway</option>
                                    <option value="Oman">Oman</option>
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="Palau">Palau</option>
                                    <option value="Panama">Panama</option>
                                    <option value="Papua New Guinea">Papua New Guinea</option>
                                    <option value="Paraguay">Paraguay</option>
                                    <option value="Peru">Peru</option>
                                    <option value="Philippines">Philippines</option>
                                    <option value="Poland">Poland</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Qatar">Qatar</option>
                                    <option value="Romania">Romania</option>
                                    <option value="Russia">Russia</option>
                                    <option value="Rwanda">Rwanda</option>
                                    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                    <option value="Saint Lucia">Saint Lucia</option>
                                    <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                    <option value="Samoa">Samoa</option>
                                    <option value="San Marino">San Marino</option>
                                    <option value="São Tomé and Príncipe">São Tomé and Príncipe</option>
                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                    <option value="Senegal">Senegal</option>
                                    <option value="Serbia">Serbia</option>
                                    <option value="Seychelles">Seychelles</option>
                                    <option value="Sierra Leone">Sierra Leone</option>
                                    <option value="Singapore">Singapore</option>
                                    <option value="Slovakia">Slovakia</option>
                                    <option value="Slovenia">Slovenia</option>
                                    <option value="Solomon Islands">Solomon Islands</option>
                                    <option value="Somalia">Somalia</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="South Sudan">South Sudan</option>
                                    <option value="Spain">Spain</option>
                                    <option value="Sri Lanka">Sri Lanka</option>
                                    <option value="Sudan">Sudan</option>
                                </select>
                            </div>
                            <div className={styles.input}>
                                <label>Phone <span>* {error?.phone}</span></label>
                                <input type="text" value={contactData?.phone} placeholder="Enter your number"
                                    onChange={(e) => {
                                        setContactData({
                                            ...contactData,
                                            phone: e.target.value,
                                        });
                                        setError({ ...error, phone: "" });
                                    }}
                                    onKeyPress={bindInput}
                                />
                            </div>
                            <div className={styles.input}>
                                <label>Message <span>* {error?.message}</span></label>
                                <textarea placeholder="Type your message here..." value={contactData?.message} onChange={(e) => {
                                    setContactData({
                                        ...contactData,
                                        message: e.target.value,
                                    });
                                    setError({ ...error, message: "" });
                                }}></textarea>
                            </div>
                        </div>
                        <div className={styles.firstButton} onClick={functionPostContact}>
                            <Button text="Get Started" icon={<RightLgArrow />} />
                        </div>
                        
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
