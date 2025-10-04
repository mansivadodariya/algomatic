import React from "react";
import styles from "./genaidevlopmentbanner.module.scss";
import Commonlable from "@/components/commonlable";
import Playicon from "../../../../public/assets/icons/playicon";
import Truecirclicon from "../../../../public/assets/icons/truecirclicon";
import Right from "@/components/icons/right";
import Triangleicon from "../../../../public/assets/icons/triangleicon";
import Certifiedicon from "../../../../public/assets/icons/certifiedicon";
import Shieldicon from "../../../../public/assets/icons/shieldicon";
import Staroutlinedicon from "../../../../public/assets/icons/staroutlinedicon";
import Mindicon2 from "../../../../public/assets/icons/mindicon2";
import Sparkleicon from "../../../../public/assets/icons/sparkleicon";
import Roboicon from "../../../../public/assets/icons/roboicon";
import Commonarrowbutton from "@/components/commonarrowbutton";
import Fileicon from "../../../../public/assets/icons/fileicon";
import Codeicon from "../../../../public/assets/icons/codeicon";
import Ideaicon from "../../../../public/assets/icons/ideaicon";
import Downloadicon from "../../../../public/assets/icons/downloadicon";

export default function Genaidevlopmentbanner() {
  return (
    <>
      <section class={styles.genaidevlopmentbannermain}>
        <div class="container-xl">
          <div className={styles.contentholder}>
            <div class={styles.genaidevlopmentbannergrd}>
              <div className={styles.itemsleft}>
                <div className={styles.title}>
                  <Commonlable Text="Premium AI Solutions" />
                  <h1>
                    Mobile App Development Services
                    <span>& Solutions</span>
                  </h1>
                  <p>
                    Build scalable, custom mobile apps for Android, iOS, and
                    cross-platform using Flutter and React Native. Help your
                    business grow and engage customers with modern,
                    high-performance applications.
                  </p>
                </div>
                <div className={styles.tagsflx}>
                  <div className={styles.tagsbtn}>
                    <Truecirclicon />
                    <span>90% Cost Reduction</span>
                  </div>
                  <div className={styles.tagsbtn}>
                    <Truecirclicon />
                    <span>Enterprise-Grade Security</span>
                  </div>
                  <div className={styles.tagsbtn}>
                    <Truecirclicon />
                    <span>Free Implementation Support</span>
                  </div>
                </div>
                <div className={styles.casestudiesbtnflx}>
                  <a
                    href="https://calendly.com/dipak-rejoicehub"
                    target="_blank"
                  >
                    <button type="button" className={styles.consultationbtn}>
                      <span>Get Free App Consultation</span>
                      <Right />
                    </button>
                  </a>
                  {/* <button type="button" className={styles.casestudiesbtn}>
                    <Triangleicon />
                    <span>View AI Case Studies</span>
                  </button> */}
                </div>
                <p className={styles.trustline}>
                  Trusted by industry leaders across generative ai development
                  services
                </p>
                <div className={styles.trustgrid}>
                  <div className={styles.trustgriditem}>
                    <h6>500+</h6>
                    <p>AI Projects Delivered</p>
                  </div>
                  <div className={styles.trustgriditem}>
                    <h6>99%</h6>
                    <p>Client Satisfaction</p>
                  </div>
                  <div className={styles.trustgriditem}>
                    <h6>24/7</h6>
                    <p>Expert Support</p>
                  </div>
                  <div className={styles.trustgriditem}>
                    <h6>10x</h6>
                    <p>Faster Implementation</p>
                  </div>
                </div>
                <div className={styles.certiflx}>
                  <div className={styles.certiflxitems}>
                    <Certifiedicon />
                    <span>ISO 27001 Certified</span>
                  </div>
                  <div className={styles.certiflxitems}>
                    <Shieldicon />
                    <span>Enterprise Grade Security</span>
                  </div>
                  <div className={styles.certiflxitems}>
                    <Staroutlinedicon />
                    <span>4.9/5 Client Rating</span>
                  </div>
                </div>
              </div>
              <div className={styles.itemsrightmain}>
                <div className={styles.itemsright}>
                  <div className={styles.itemsrighttitle}>
                    <div className={styles.itemsrighttitleflx}>
                      <div className={styles.icon}>
                        <Mindicon2 />
                      </div>
                      <h2>
                        Mobile App Development Services & Solutions Builder
                      </h2>
                    </div>
                    <p>
                      Describe your specific mobile app development services
                      requirements and get a detailed implementation blueprint
                    </p>
                  </div>
                  <div className={styles.buildchatbox}>
                    <label htmlFor="Textarea">What do you want to build?</label>
                    <div className={styles.textareamain}>
                      <textarea
                        id="Textarea"
                        className={styles.textarea}
                        placeholder="I want to build an AI-powered customer service chatbot that can handle inquiries 24/7"
                      />
                      <span className={styles.copyrighttext}>AI-powered</span>
                    </div>
                  </div>
                  <div className={styles.solutionsmain}>
                    <p className={styles.solutionstitle}>
                      Or choose from popular generative ai development services
                      solutions:
                    </p>
                    <div className={styles.solutionsgrid}>
                      <div className={styles.solutionsbox}>
                        <div className={styles.solutionsboxtitleflx}>
                          <div className={styles.flexitemsleft}>
                            <Roboicon />
                            <span>iOS Mobile App</span>
                          </div>
                          <div className={styles.flexitemsright}>
                            <span>Advanced</span>
                            <p>8-10 weeks</p>
                          </div>
                        </div>
                        <p className={styles.solutionsboxdescription}>
                          Native iOS application with modern UI/UX design
                        </p>
                      </div>
                      <div className={styles.solutionsbox}>
                        <div className={styles.solutionsboxtitleflx}>
                          <div className={styles.flexitemsleft}>
                            <Roboicon />
                            <span>Android Mobile App</span>
                          </div>
                          <div className={styles.flexitemsright}>
                            <span>Advanced</span>
                            <p>8-10 weeks</p>
                          </div>
                        </div>
                        <p className={styles.solutionsboxdescription}>
                          Native Android application with material design
                        </p>
                      </div>
                      <div className={styles.solutionsbox}>
                        <div className={styles.solutionsboxtitleflx}>
                          <div className={styles.flexitemsleft}>
                            <Roboicon />
                            <span>Cross-Platform App</span>
                          </div>
                          <div className={styles.flexitemsright}>
                            <span>Intermediate</span>
                            <p>6-8 weeks</p>
                          </div>
                        </div>
                        <p className={styles.solutionsboxdescription}>
                          React Native or Flutter app for both iOS and Android
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.solutionbuttonmain}>
                    <a
                      href="https://calendly.com/dipak-rejoicehub"
                      target="_blank"
                    >
                      <button type="button" className={styles.solutionbutton}>
                        <span>Build My Solution</span>
                        <Right />
                      </button>
                    </a>
                  </div>
                  <div className={styles.recievebox}>
                    <div className={styles.recieveboxtitle}>
                      <Sparkleicon />
                      <p>What you'll receive instantly:</p>
                    </div>
                    <div className={styles.recieveboxgrd}>
                      <div className={styles.recieveboxgrditems}>
                        <Fileicon />
                        <p>Detailed technical blueprint</p>
                      </div>
                      <div className={styles.recieveboxgrditems}>
                        <Codeicon />
                        <p>Implementation roadmap</p>
                      </div>
                      <div className={styles.recieveboxgrditems}>
                        <Ideaicon />
                        <p>Technology recommendations</p>
                      </div>
                      <div className={styles.recieveboxgrditems}>
                        <Downloadicon />
                        <p>Free consultation call</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
