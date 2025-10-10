import React from "react";
import styles from "./freeresources.module.scss";
import Commonlable from "@/components/commonlable";
import Commonarrowbutton from "@/components/commonarrowbutton";
import { BookOpen, Download, Lightbulb } from "lucide-react";

export default function Freeresources() {
  return (
    <>
      <div className={styles.freeresourcesmain}>
        <div className="container-xl">
          <div className={styles.faqcontent}>
            <div className={styles.freeresourcestitle}>
              <Commonlable Text="Free Resources" />
              <h6>
                Accelerate Your <span>Success</span>
              </h6>
              <p>
                Get instant access to our premium tools and guides designed by
                experts for business leaders.
              </p>
            </div>
            <div className={styles.freeresourcescols}>
              <div className={styles.freeresourcescolsitem}>
                <div className={styles.icons}>
                  <BookOpen />
                </div>
                <div className={styles.freeresourcescenter}>
                  <h6>AI Content Strategy Guide</h6>
                  <p>
                    Learn how to leverage generative AI for content creation,
                    marketing, and customer engagement.
                  </p>
                  <div className={styles.tagsflx}>
                    <span>Content strategy framework</span>
                    <span>AI tool recommendations</span>
                    <span>Implementation tips</span>
                  </div>
                </div>
                <div className={styles.value}>
                  <span className={styles.valuetext}>$1,800 Value</span>
                  {/* <button type="button" className={styles.downloadbutton}>
                    <span>Get Free</span>
                    <Download />
                  </button> */}
                </div>
              </div>
              <div className={styles.freeresourcescolsitem}>
                <div className={styles.icons}>
                  <Lightbulb />
                </div>
                <div className={styles.freeresourcescenter}>
                  <h6>Generative AI Use Cases</h6>
                  <p>
                    Discover 50+ practical use cases for generative AI across
                    different industries and business functions.
                  </p>
                  <div className={styles.tagsflx}>
                    <span>Industry-specific examples</span>
                    <span>ROI calculations</span>
                    <span>Implementation roadmap</span>
                  </div>
                </div>
                <div className={styles.value}>
                  <span className={styles.valuetext}>$1,200 value</span>
                  {/* <button type="button" className={styles.downloadbutton}>
                    <span>Get Free</span>
                    <Download />
                  </button> */}
                </div>
              </div>
            </div>
            <div className={styles.freeresourcesbottom}>
              <p>
                Need personalized guidance? Schedule a free consultation with
                our experts
              </p>
              <div className={styles.btnflx}>
                <Commonarrowbutton
                  Text="Book Free Consultation"
                  link="https://calendly.com/dipak-rejoicehub"
                  Target="blank"
                  Butttonvarient="lightoutlined"
                />
                <Commonarrowbutton
                  Text="Call: +91 98251 22840"
                  link="tel:+919825122840"
                  Target="blank"
                  Butttonvarient="darkoutlined"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
