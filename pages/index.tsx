import Head from "next/head";
import Image from "next/image";

import { motion } from "framer-motion";

import { DefaultLayout } from "../layouts/DefaultLayout";

import profilePic from "../public/images/profilePhoto.jpg";

import styles from "../styles/Home.module.scss";

export default function Home() {
    return (
        <DefaultLayout>
            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <motion.div
                        initial={{ width: "0vw" }}
                        animate={{ width: "50vw" }}
                        transition={{
                            delay: 0.5,
                            ease: "easeOut",
                            duration: 0.5,
                        }}
                        className={styles.bgBox}
                    />
                    <div className={styles.bgVerticalLine} />
                    <div className={styles.bgHorizontalLine} />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={styles.scrollCta}
                        transition={{ delay: 3 }}
                    >
                        <motion.div
                            initial={{ y: "calc(0.75rem - 3px)", opacity: 1 }}
                            animate={{ y: "calc(2.75rem - 3px)", opacity: 0 }}
                            transition={{
                                delay: 3,
                                repeat: Infinity,
                                repeatDelay: 0.25,
                                ease: "easeOut",
                                duration: 0.75,
                            }}
                            className={styles.scrollCtaInner}
                        />
                    </motion.div>
                    <div className={styles.heroInner}>
                        <div className={styles.heroCopy}>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    type: "spring",
                                    bounce: 0.6,
                                }}
                            >
                                <h1 className={styles.heroTitle}>
                                    <mark>Hi!</mark> {"I'm"} <mark>Raymon</mark>
                                    <mark className={styles.period}>.</mark>
                                </h1>
                            </motion.div>
                            <motion.div
                                initial={{ transform: "translateX(-120%)" }}
                                animate={{ transform: "translateX(0%)" }}
                                transition={{
                                    delay: 0.75,
                                    type: "spring",
                                    mass: 0.2,
                                    damping: 7,
                                    stiffness: 70,
                                    bounce: 0.7,
                                    duration: 0.5,
                                }}
                            >
                                <h2 className={styles.heroSubtitle}>
                                    An <mark>avid</mark> full-stack software{" "}
                                    <mark>engineer</mark>
                                    <mark className={styles.period}>.</mark>
                                </h2>
                            </motion.div>
                        </div>
                    </div>
                    <div className={styles.heroProfile}>
                        <motion.div
                            initial={{
                                opacity: 0,
                                transform: "translateY(0%)",
                            }}
                            animate={{
                                opacity: 1,
                                transform: "translateY(-10rem)",
                            }}
                            transition={{
                                delay: 1.25,
                                ease: "easeOut",
                                duration: 0.5,
                            }}
                        >
                            <div className={styles.heroProfileCard}>
                                <div className={styles.imageContainer}>
                                    <Image
                                        priority
                                        layout="fill"
                                        src={profilePic}
                                        className={styles.profilePhoto}
                                        alt="Raymon"
                                    />
                                </div>
                                <motion.div
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={{ width: "auto", opacity: 1 }}
                                    transition={{
                                        delay: 2,
                                        ease: "easeOut",
                                        duration: 0.5,
                                    }}
                                >
                                    <div className={styles.profileDescription}>
                                        <h3>Raymon Zhang</h3>
                                        <p>14 year old student devloper</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </DefaultLayout>
    );
}
