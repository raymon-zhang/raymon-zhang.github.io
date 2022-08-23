import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { DefaultLayout } from "../layouts/DefaultLayout";

import styles from "../styles/Home.module.scss";

import Reveal from "../components/Reveal";

export default function Home() {
    const grades = ["freshman", "sophomore", "junior", "senior"];
    const curDate = new Date();
    let curYear = curDate.getFullYear();

    if (curDate.getMonth() <= 6) {
        curYear -= 1;
    }

    const curGrade = grades[4 - (2025 - curYear)];

    return (
        <DefaultLayout>
            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <motion.div
                        initial={{ transform: "scaleX(0)" }}
                        animate={{ transform: "scaleX(1)" }}
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
                                    An <mark>avid</mark> student/
                                    <mark>developer</mark> who enjoys creating{" "}
                                    <mark>innovative</mark> solutions to{" "}
                                    <mark>complex</mark> problems<mark>.</mark>
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
                                transform: "translateY(-6rem)",
                            }}
                            transition={{
                                delay: 1.25,
                                ease: "easeOut",
                                duration: 0.5,
                            }}
                        >
                            <div className={styles.heroProfileCard}>
                                <div className={styles.imageContainer}>
                                    <img
                                        src="/images/me.png"
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
            <section className={styles.about} id="about">
                <Reveal
                    motionProps={{
                        initial: { y: 100, opacity: 0 },
                        animate: { y: 0, opacity: 1 },
                        exit: { y: 100, opacity: 0 },
                        transition: {
                            duration: 0.5,
                            type: "spring",
                            bounce: 0.5,
                            damping: 12,
                        },
                    }}
                >
                    <h1 className={styles.aboutHeading}>About me</h1>
                </Reveal>
                <Reveal
                    motionProps={{
                        initial: { x: 100, opacity: 0 },
                        animate: { x: 0, opacity: 1 },
                        exit: { x: 100, opacity: 0 },
                        transition: {
                            duration: 0.5,
                            type: "spring",
                            bounce: 0.5,
                            damping: 12,
                        },
                    }}
                >
                    <div className={styles.aboutContainer}>
                        <div className={styles.aboutText}>
                            <p className={styles.aboutBody}>
                                {"I'm"} Raymon, an enthusiastic and passionate
                                student developer from Bellevue, Washington.
                                Currently, {"I'm"} a {curGrade} at Interlake
                                High School enrolled in the ALS IB program, and
                                have a strong focus on academics heading into
                                the future.
                            </p>
                            <p className={styles.aboutBody}>
                                Outside of school, I spend the majority of my
                                time programming, mainly focusing on competitive
                                programming and web development. When {"I'm"}{" "}
                                not coding, {"you'll"} find me drawing, playing
                                the piano, or competing in math competitions.
                            </p>
                        </div>
                        <img
                            src="/images/me.png"
                            width={240}
                            height={300}
                            alt="me"
                            className={styles.aboutImage}
                        />
                    </div>
                </Reveal>
            </section>
            <section className={styles.projects} id="projects">
                <Reveal
                    motionProps={{
                        initial: { y: 100, opacity: 0 },
                        animate: { y: 0, opacity: 1 },
                        exit: { y: 100, opacity: 0 },
                        transition: {
                            duration: 0.5,
                            type: "spring",
                            bounce: 0.5,
                            damping: 12,
                        },
                    }}
                >
                    <h1 className={styles.projectsHeading}>Notable Projects</h1>
                </Reveal>
                <ul className={styles.projectsList}>
                    <Project
                        link="https://kidoop.ga/"
                        image="/images/kidoop.png"
                        name="Kidoop"
                        description="Helping students find their teachers"
                    />
                    <Project
                        link="https://dynamily.ga/"
                        image="/images/dynamily.png"
                        name="Dynamily"
                        description="Empowering families to stay organized"
                    />
                </ul>
            </section>
            <section className={styles.contact}>
                <Reveal
                    motionProps={{
                        initial: { opacity: 0, y: 100 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: 100 },
                    }}
                    className={styles.contactContent}
                    threshold={0.5}
                >
                    <h3>Interested in working together? Lets talk. </h3>
                    <p>
                        You can email me at{" "}
                        <a href="mailto:raymonzhang.rz@gmail.com?subject=Let%27s work together">
                            raymonzhang.rz@gmail.com
                        </a>
                    </p>
                </Reveal>
            </section>
        </DefaultLayout>
    );
}

interface ProjectProps {
    link: string;
    image: string;
    name: string;
    description: string;
}

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
