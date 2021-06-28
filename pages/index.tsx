import Head from "next/head";
import Image from "next/image";

import { Bounce, Zoom, Slide } from "react-awesome-reveal";

import { DefaultLayout } from "../layouts/DefaultLayout";

import profilePic from "../public/images/profilePhoto.jpg";

import styles from "../styles/Home.module.scss";

export default function Home() {
    return (
        <DefaultLayout>
            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <div className={styles.bgBox} />
                    <div className={styles.bgVerticalLine} />
                    <div className={styles.bgHorizontalLine} />
                    <div className={styles.heroInner}>
                        <div className={styles.heroCopy}>
                            <Bounce>
                                <h1 className={styles.heroTitle}>
                                    <mark>Hi!</mark> {"I'm"} <mark>Raymon</mark>
                                    <mark className={styles.period}>.</mark>
                                </h1>
                            </Bounce>
                            <Zoom direction="right" delay={250}>
                                <h2 className={styles.heroSubtitle}>
                                    An <mark>avid</mark> full-stack software{" "}
                                    <mark>engineer</mark>
                                    <mark className={styles.period}>.</mark>
                                </h2>
                            </Zoom>
                        </div>
                    </div>
                    <div className={styles.heroProfile}>
                        <div className={styles.heroProfileCard}>
                            <div className={styles.imageContainer}>
                                <Image
                                    priority
                                    layout="fill"
                                    src={profilePic}
                                    className={styles.profilePhoto}
                                />
                            </div>
                            <div className={styles.profileDescription}>
                                <h3>Raymon Zhang</h3>
                                <p>14 year old student devloper</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </DefaultLayout>
    );
}
