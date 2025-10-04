import React from "react";
import styles from "./flexiblepricing.module.scss";
import Commonlable from "@/components/commonlable";
import { Check, Crown, Star, Zap } from "lucide-react";
import Commonarrowbutton from "@/components/commonarrowbutton";

export default function Flexiblepricing() {
  const plans = [
    {
      id: "starter",
      icon: Zap,
      name: "Starter",
      description: "Perfect for small projects and getting started",
      originalPrice: "$3,000",
      price: "$2,500",
      priceNote: "Starting from",
      isPopular: false,
      buttonText: "Get Started",
      buttonVariant: "widthfull lightoutlined",
      features: [
        "Basic implementation",
        "Standard support",
        "Documentation included",
        "30-day warranty",
        "Email support",
      ],
    },
    {
      id: "professional",
      icon: Star,
      name: "Professional",
      description: "Ideal for growing businesses with advanced needs",
      originalPrice: "$4,500",
      price: "$4,000",
      priceNote: "Custom pricing available",
      isPopular: true,
      buttonText: "Choose Professional",
      buttonVariant: "widthfull darkoutlined",
      features: [
        "Basic implementation",
        "Standard support",
        "Documentation included",
        "30-day warranty",
        "Email support",
      ],
    },
    {
      id: "enterprise",
      icon: Crown,
      name: "Enterprise",
      description: "Complete solution for large-scale implementations",
      originalPrice: "$7,000",
      price: "$6,000",
      priceNote: "Custom pricing available",
      isPopular: false,
      buttonText: "Contact Sales",
      buttonVariant: "widthfull lightoutlined",
      features: [
        "Full-scale implementation",
        "Dedicated support team",
        "Custom development",
        "1-year warranty",
        "24/7 support",
        "Quarterly reviews",
        "Advanced analytics",
        "Training & onboarding",
        "SLA guarantee",
      ],
    },
  ];

  const allPlansInclude = [
    {
      icon: "✓",
      title: "Free Consultation",
      description: "Initial strategy session at no cost",
    },
    {
      icon: "✓",
      title: "Quality Guarantee",
      description: "100% satisfaction or money back",
    },
    {
      icon: "✓",
      title: "Ongoing Support",
      description: "Continuous assistance after delivery",
    },
  ];

  return (
    <>
      <div className={styles.getstartedmain}>
        <div className="container-xl">
          <div className={styles.contentholder}>
            <div className={styles.getstartedtitle}>
              <Commonlable Text="Flexible Pricing" />
              <h4>
                Choose Your <span>Perfect Plan</span>
              </h4>
              <p>
                From starter projects to enterprise solutions, we have the right
                package for your business needs and budget.
              </p>
            </div>
            <div className={styles.plansgrid}>
              {plans.map((plan) => {
                const IconComponent = plan.icon;
                return (
                  <div
                    key={plan.id}
                    className={`${styles.plangriditems} ${
                      plan.isPopular ? styles.plangriditemsactive : ""
                    }`}
                  >
                    {plan.isPopular && (
                      <div className={styles.populartag}>
                        <span>⭐ Most Popular</span>
                      </div>
                    )}
                    <div className={styles.plantypemain}>
                      <div className={styles.icon}>
                        <IconComponent />
                      </div>
                      <span>{plan.name}</span>
                      <p>{plan.description}</p>
                    </div>
                    <div className={styles.plandetailsmain}>
                      {/* <div className={styles.planprice}>
                        <p>
                          <del>{plan.originalPrice}</del>
                        </p>
                        <h2>{plan.price}</h2>
                        <p>{plan.priceNote}</p>
                      </div> */}
                      <div className={styles.contactbtns}>
                        <div className={styles.tag}>Contact us for tailored pricing</div>
                        <span>Custom solutions</span>
                      </div>
                      <div className={styles.plandetailslistmain}>
                        {plan.features.map((feature, index) => (
                          <div key={index} className={styles.plandetailslist}>
                            <Check />
                            <p>{feature}</p>
                          </div>
                        ))}
                      </div>
                      <div className={styles.planbutton}>
                        <Commonarrowbutton
                          Text={plan.buttonText}
                          Butttonvarient={plan.buttonVariant}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.planincmain}>
              <h6>All Plans Include</h6>
              <div className={styles.grid}>
                {allPlansInclude.map((item, index) => (
                  <div key={index} className={styles.griditems}>
                    <div className={styles.icon}>{item.icon}</div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
