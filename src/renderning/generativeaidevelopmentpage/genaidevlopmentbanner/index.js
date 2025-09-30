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
                    Generative AI Development &{" "}
                    <span>Integration Services</span>
                  </h1>
                  <p>
                    Harness the power of GPT, Claude, and custom AI models to
                    create intelligent content, automate workflows, and
                    transform customer experiences with cutting-edge generative
                    AI solutions.
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
                  <button type="button" className={styles.consultationbtn}>
                    <span>Get Free AI Strategy Consultation</span>
                    <Right />
                  </button>
                  <button type="button" className={styles.casestudiesbtn}>
                    <Triangleicon />
                    <span>View AI Case Studies</span>
                  </button>
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
                        Generative AI Development & Integration Services Builder
                      </h2>
                    </div>
                    <p>
                      Describe your specific generative ai development services
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
