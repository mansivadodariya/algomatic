import React from "react";
import styles from "./technologystack.module.scss";
import Commonlable from "@/components/commonlable";
import Image from "next/image";
import gpt4 from "../.././../../public/assets/icons/gpt4.svg";
import claude from "../.././../../public/assets/icons/claude.svg";
import lungchain from "../.././../../public/assets/icons/lungchain.svg";
import tensorFlow from "../.././../../public/assets/icons/tensorFlow.svg";
import PyTorch from "../.././../../public/assets/icons/PyTorch.svg";
import aws from "../.././../../public/assets/icons/aws.svg";
import GoogleCloud from "../.././../../public/assets/icons/GoogleCloud.svg";
import MongoDB from "../.././../../public/assets/icons/MongoDB.svg";
import postgresql from "../.././../../public/assets/icons/postgresql.svg";
import reactjs from "../.././../../public/assets/icons/reactjs.svg";
import NodeJS from "../.././../../public/assets/icons/NodeJS.svg";
import FastAPI from "../.././../../public/assets/icons/FastAPI.svg";

export default function Technologystack() {
  return (
    <>
      <div className={styles.technologystackmain}>
        <div className="container-xl">
          <div className={styles.contentholder}>
            <div className={styles.technologystacktitle}>
              <Commonlable Text="Technology Stack" />
              <h2>
                Built on Industry-Leading <span>Technologies</span>
              </h2>
              <p>
                We leverage the best tools and frameworks to ensure scalable,
                secure, and efficient solutions.
              </p>
            </div>
            <div className={styles.grid}>
              <div className={styles.griditems}>
                <div className={styles.icon}>
                  <Image src={gpt4} alt="gpt4" />
                </div>
                <p>GPT-4</p>
                <span>AI/ML</span>
              </div>
              <div className={styles.griditems}>
                <div className={styles.icon}>
                  <Image src={claude} alt="claude" />
                </div>
                <p>Claude</p>
                <span>AI/ML</span>
              </div>
              <div className={styles.griditems}>
                <div className={styles.icon}>
                  <Image src={lungchain} alt="lungchain" />
                </div>
                <p>LangChain</p>
                <span>AI/ML</span>
              </div>
              <div className={styles.griditems}>
                <div className={styles.icon}>
                  <Image src={tensorFlow} alt="tensorFlow" />
                </div>
                <p>TensorFlow</p>
                <span>AI/ML</span>
              </div>
              <div className={styles.griditems}>
                <div className={styles.icon}>
                  <Image src={PyTorch} alt="PyTorch" />
                </div>
                <p>PyTorch</p>
                <span>AI/ML</span>
              </div>
              <div className={styles.griditems}>
                <div className={styles.icon}>
                  <Image src={aws} alt="aws" />
                </div>
                <p>AWS</p>
                <span>Cloud</span>
              </div>
              <div className={styles.griditems}>
                <div className={styles.icon}>
                  <Image src={GoogleCloud} alt="GoogleCloud" />
                </div>
                <p>Google Cloud</p>
                <span>Cloud</span>
              </div>
              <div className={styles.griditems}>
                <div className={styles.icon}>
                  <Image src={MongoDB} alt="MongoDB" />
                </div>
                <p>MongoDB</p>
                <span>Database</span>
              </div>
              <div className={styles.griditems}>
                <div className={styles.icon}>
                  <Image src={postgresql} alt="postgresql" />
                </div>
                <p>PostgreSQL</p>
                <span>Database</span>
              </div>
              <div className={styles.griditems}>
                <div className={styles.icon}>
                  <Image src={reactjs} alt="reactjs" />
                </div>
                <p>React</p>
                <span>Framework</span>
              </div>
              <div className={styles.griditems}>
                <div className={styles.icon}>
                  <Image src={NodeJS} alt="NodeJS" />
                </div>
                <p>Node.js</p>
                <span>Framework</span>
              </div>
              <div className={styles.griditems}>
                <div className={styles.icon}>
                  <Image src={FastAPI} alt="FastAPI" />
                </div>
                <p>FastAPI</p>
                <span>Framework</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
