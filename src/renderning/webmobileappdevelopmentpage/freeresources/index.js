import React from "react";
import styles from "./freeresources.module.scss";
import Commonlable from "@/components/commonlable";
import Commonarrowbutton from "@/components/commonarrowbutton";
import { BookOpen, Download, Lightbulb, Smartphone, TrendingUp } from "lucide-react";

export default function Freeresources() {
  const resourcesData = [
    {
      id: 1,
      icon: Smartphone,
      title: "Mobile App Development Guide",
      description:
        "Complete guide to mobile app development including planning, design, development, and launch strategies.",
      tags: [
        "Development roadmap",
        "Technology selection",
        "Launch checklist",
      ],
      value: "$2,000 Value",
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "App Store Optimization Guide",
      description:
        "Learn how to optimize your app for better visibility and downloads in app stores.",
      tags: [
        "ASO strategies",
        "Keyword optimization",
        "Performance tracking",
      ],
      value: "$1,500 value",
    },
  ];

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
              {resourcesData.map((resource) => {
                const IconComponent = resource.icon;
                return (
                  <div
                    key={resource.id}
                    className={styles.freeresourcescolsitem}
                  >
                    <div className={styles.icons}>
                      <IconComponent />
                    </div>
                    <div className={styles.freeresourcescenter}>
                      <h6>{resource.title}</h6>
                      <p>{resource.description}</p>
                      <div className={styles.tagsflx}>
                        {resource.tags.map((tag, index) => (
                          <span key={index}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className={styles.value}>
                      <span className={styles.valuetext}>{resource.value}</span>
                      {/* <button type="button" className={styles.downloadbutton}>
                        <span>Get Free</span>
                        <Download />
                      </button> */}
                    </div>
                  </div>
                );
              })}
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
