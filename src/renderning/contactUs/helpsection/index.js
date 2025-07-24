import React, { useState } from 'react'
import styles from './helpsection.module.scss';
import Button from '@/components/button';
import RightLgArrow from '@/components/icons/rightLgArrow';
import Link from 'next/link';
import toast from 'react-hot-toast';
import axios from 'axios';
export default function Helpsection() {
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

                const newData = {
                    text: `Name:${contactData?.firstName}\n Email:${contactData?.email}\n Country:${contactData?.country} Phone Number:${contactData?.phone}\n Description:${contactData?.message}`,
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
                    })
                    .catch((err) => {
                        toast.error("Something went wrong");
                        setIsLoading(false)
                    });
            }
        }
    };

    return (
        <div className={styles.helpsectionAlignment}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.griditems}>
                        <h2>We're Here to Help</h2>
                        <p>
                            Need assistance? Get in touch with our team for any queries about our services.
                        </p>
                    </div>
                    <div className={styles.griditems}>
                        {/* <form
                            // action="mailto:yash@rejoicehub.com" 
                            method="post" onSubmit={(e) => functionPostContact(e)}> */}
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
                        {/* </form> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
