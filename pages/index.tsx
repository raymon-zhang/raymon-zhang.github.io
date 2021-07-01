import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { DefaultLayout } from "../layouts/DefaultLayout";

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
                            delay: 0.2,
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
                                    mass: 1.2,
                                    damping: 15,
                                    stiffness: 120,
                                    bounce: 0.5,
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
                                transform: "translateY(-5rem)",
                            }}
                            transition={{
                                delay: 1.25,
                                ease: "easeOut",
                                duration: 0.5,
                            }}
                        >
                            <div className={styles.heroProfileCard}>
                                <div className={styles.imageContainer}>
                                    {/* <Image
                                        priority
                                        placeholder="blur"
                                        layout="fill" */}
                                    <img
                                        src="/images/profilePhoto.jpg"
                                        className={styles.profilePhoto}
                                        alt="Raymon"
                                    />
                                </div>
                                <motion.div
                                    initial={{ maxWidth: 0, opacity: 0 }}
                                    animate={{ maxWidth: "8rem", opacity: 1 }}
                                    transition={{
                                        delay: 2,
                                        ease: "easeOut",
                                        duration: 0.5,
                                    }}
                                    className={styles.profileDescription}
                                >
                                    <h3>Raymon Zhang</h3>
                                    <Link href="/about">
                                        <a className={styles.profileCta}>
                                            about me
                                        </a>
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section className={styles.projects} id="projects">
                <ul className={styles.projectsList}>
                    <Project
                        link="https://kidoop.ga/"
                        image="/images/kidoop.png"
                        name="Kidoop"
                        description="Helping students find their teachers"
                    />
                    <Project
                        link="https://dynamily.tk/"
                        image="/images/dynamily.png"
                        name="Dynamily"
                        description="Empowering families to stay organized"
                    />
                </ul>
            </section>
        </DefaultLayout>
    );
}

type ProjectProps = {
    link: string;
    image: string;
    name: string;
    description: string;
};

const Project: React.FC<ProjectProps> = ({
    link,
    image,
    name,
    description,
}) => {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    return (
        <li
            ref={ref}
            className={`${styles.project} ${inView && styles.visible}`}
        >
            <a href={link}>
                <AnimatePresence>
                    {inView && (
                        <motion.div
                            className={styles.projectDescription}
                            initial={{ opacity: 0, y: "50%" }}
                            animate={{ opacity: 1, y: "0%" }}
                            exit={{ opacity: 0, y: "50%" }}
                        >
                            <h3>{name}</h3>
                            <p>{description}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className={`${styles.projectImage}`}>
                    {/* <Image */}
                    <img
                        src={image}
                        alt={name}
                        className={styles.projectImage}
                    />
                </div>
            </a>
        </li>
    );
};
