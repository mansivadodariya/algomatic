import React from "react";
import styles from "./ourprocess.module.scss";
import Commonlable from "@/components/commonlable";
import { CheckCircle } from "lucide-react";

export default function Ourprocess() {
  return (
    <>
      <div className={styles.ourprocessmain}>
        <div className="container-xl">
          <div className={styles.ourprocesstitle}>
            <Commonlable Text="Our Process" />
            <h2>
              Proven <span>4-Step</span> Implementation Method
            </h2>
            <p>
              From discovery to deployment, we ensure successful AI
              transformation at every stage.
            </p>
          </div>
          <div className={styles.ourprocessgrid}>
            <div className={styles.ourprocessgriditem}>
              <div className={styles.ourprocesscardnumbermain}>
                <div className={styles.ourprocesscardnumber}>
                  <span>01</span>
                </div>
              </div>
              <div className={styles.ourprocesscontent}>
                <h3>AI Strategy & Assessment</h3>
                <p className={styles.paragraph}>
                  Evaluate your data, use cases, and requirements to design the
                  optimal generative AI strategy.
                </p>
                <div className={styles.durationmain}>
                  <p className={styles.durationtitle}>Duration: 1-2 weeks</p>
                  <p className={styles.deliverablestitle}>Deliverables:</p>
                  <div className={styles.listmain}>
                    <div className={styles.list}>
                      <CheckCircle />
                      <span>AI readiness assessment</span>
                    </div>
                    <div className={styles.list}>
                      <CheckCircle />
                      <span>Use case prioritization</span>
                    </div>
                    <div className={styles.list}>
                      <CheckCircle />
                      <span>Data audit</span>
                    </div>
                    <div className={styles.list}>
                      <CheckCircle />
                      <span>ROI projections</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.ourprocessgriditem}>
              <div className={styles.ourprocesscardnumbermain}>
                <div className={styles.ourprocesscardnumber}>
                  <span>02</span>
                </div>
              </div>
              <div className={styles.ourprocesscontent}>
                <h3>Model Selection & Customization</h3>
                <p className={styles.paragraph}>
                  Choose and fine-tune the best AI models for your specific
                  requirements and data.
                </p>
                <div className={styles.durationmain}>
                  <p className={styles.durationtitle}>Duration: 2-4 weeks</p>
                  <p className={styles.deliverablestitle}>Deliverables:</p>
                  <div className={styles.listmain}>
                    <div className={styles.list}>
                      <CheckCircle />
                      <span>Model selection report</span>
                    </div>
                    <div className={styles.list}>
                      <CheckCircle />
                      <span>Custom training datasets</span>
                    </div>
                    <div className={styles.list}>
                      <CheckCircle />
                      <span>Fine-tuned models</span>
                    </div>
                    <div className={styles.list}>
                      <CheckCircle />
                      <span>Performance benchmarks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.ourprocessgriditem}>
              <div className={styles.ourprocesscardnumbermain}>
                <div className={styles.ourprocesscardnumber}>
                  <span>03</span>
                </div>
              </div>
              <div className={styles.ourprocesscontent}>
                <h3>Development & Integration</h3>
                <p className={styles.paragraph}>
                  Build production-ready applications and integrate them with
                  your existing systems.
                </p>
                <div className={styles.durationmain}>
                  <p className={styles.durationtitle}>Duration: 4-8 weeks</p>
                  <p className={styles.deliverablestitle}>Deliverables:</p>
                  <div className={styles.listmain}>
                    <div className={styles.list}>
                      <CheckCircle />
                      <span>AI applications</span>
                    </div>
                    <div className={styles.list}>
                      <CheckCircle />
                      <span>API integrations</span>
                    </div>
                    <div className={styles.list}>
                      <CheckCircle />
                      <span>User interfaces</span>
                    </div>
                    <div className={styles.list}>
                      <CheckCircle />
                      <span>Testing results</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.ourprocessgriditem}>
              <div className={styles.ourprocesscardnumbermain}>
                <div className={styles.ourprocesscardnumber}>
                  <span>04</span>
                </div>
              </div>
              <div className={styles.ourprocesscontent}>
                <h3>Deployment & Optimization</h3>
                <p className={styles.paragraph}>
                  Deploy to production with monitoring, feedback loops, and
                  continuous model improvement.
                </p>
                <div className={styles.durationmain}>
                  <p className={styles.durationtitle}>Duration: Ongoing</p>
                  <p className={styles.deliverablestitle}>Deliverables:</p>
                  <div className={styles.listmain}>
                    <div className={styles.list}>
                      <CheckCircle />
                      <span>Production deployment</span>
                    </div>
                    <div className={styles.list}>
                      <CheckCircle />
                      <span>Monitoring systems</span>
                    </div>
                    <div className={styles.list}>
                      <CheckCircle />
                      <span>Performance analytics</span>
                    </div>
                    <div className={styles.list}>
                      <CheckCircle />
                      <span>Model updates</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
