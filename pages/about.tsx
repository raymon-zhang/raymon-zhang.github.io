import { MotionProps } from "framer-motion";

import { DefaultLayout } from "../layouts/DefaultLayout";

import Reveal from "../components/Reveal";

import styles from "../styles/about.module.scss";

import ReactLogo from "/icons/react.svg";
import HTMLLogo from "../icons/html.svg";
import CSSLogo from "../icons/css.svg";
import JSLogo from "../icons/js.svg";
import TSLogo from "../icons/ts.svg";
import NodeJSLogo from "../icons/nodejs.svg";
import ReactNativeLogo from "../icons/react.svg";
import PythonLogo from "../icons/python.svg";
import JavaLogo from "../icons/java.svg";
import CPPLogo from "../icons/c++.svg";

export default function About() {
    const calculateAge = (birthday: Date) => {
        const ageDiffMs = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDiffMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };

    const skillsCardMotionProps: MotionProps = {
        initial: { y: 100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        // exit: { y: 100, opacity: 0, display: "none" },
    };

    return (
        <DefaultLayout>
            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <Reveal
                        motionProps={{
                            initial: { x: -100 },
                            animate: { x: 0 },
                            exit: { x: -100 },
                            transition: {
                                duration: 0.5,
                                type: "spring",
                                bounce: 0.5,
                                damping: 12,
                            },
                        }}
                        className={styles.heroInner}
                    >
                        <div className={styles.heroImage}>
                            <img src="/images/me.png" alt="Raymon" />
                        </div>
                    </Reveal>
                    <Reveal
                        motionProps={{
                            initial: { y: 100, opacity: 0 },
                            animate: { y: 0, opacity: 1 },
                            exit: { y: 100, opacity: 0 },
                            transition: {
                                delay: 0.2,
                                type: "spring",
                                duration: 0.5,
                            },
                        }}
                        className={styles.heroInner}
                    >
                        <h1 className={styles.heroTitle}>
                            {`I'm Raymon, a ${calculateAge(
                                new Date("12-11-2006")
                            )} year old student developer from Bellevue,
                    Washington.`}
                        </h1>
                        <p className={styles.heroSub}>
                            I work to create innovative solutions to complex
                            problems. I also enjoy learning about new
                            technologies, doing competitive programming, and
                            playing video games.
                        </p>
                    </Reveal>
                </div>
            </section>
            <section className={styles.skills}>
                <h2 className={styles.skillsHeading}>My skills</h2>
                <div className={styles.skillGrid}>
                    <Reveal motionProps={skillsCardMotionProps}>
                        <div className={styles.skillCard}>
                            <ReactLogo />
                            React <mark>advanced</mark>
                        </div>
                    </Reveal>
                    <Reveal motionProps={skillsCardMotionProps}>
                        <div className={styles.skillCard}>
                            <PythonLogo />
                            Python <mark>advanced</mark>
                        </div>
                    </Reveal>
                    <Reveal motionProps={skillsCardMotionProps}>
                        <div className={styles.skillCard}>
                            <JavaLogo />
                            Java <mark>intermediate</mark>
                        </div>
                    </Reveal>
                    <Reveal motionProps={skillsCardMotionProps}>
                        <div className={styles.skillCard}>
                            <CPPLogo />
                            C++ <mark>beginner</mark>
                        </div>
                    </Reveal>
                    <Reveal motionProps={skillsCardMotionProps}>
                        <div className={styles.skillCard}>
                            <JSLogo />
                            JS <mark>advanced</mark>
                        </div>
                    </Reveal>
                    <Reveal motionProps={skillsCardMotionProps}>
                        <div className={styles.skillCard}>
                            <TSLogo />
                            TS <mark>beginner</mark>
                        </div>
                    </Reveal>
                    <Reveal motionProps={skillsCardMotionProps}>
                        <div className={styles.skillCard}>
                            <HTMLLogo />
                            HTML <mark>expert</mark>
                        </div>
                    </Reveal>
                    <Reveal motionProps={skillsCardMotionProps}>
                        <div className={styles.skillCard}>
                            <CSSLogo />
                            CSS <mark>expert</mark>
                        </div>
                    </Reveal>
                    <Reveal motionProps={skillsCardMotionProps}>
                        <div className={styles.skillCard}>
                            <NodeJSLogo />
                            Node.js <mark>beginner</mark>
                        </div>
                    </Reveal>
                    <Reveal motionProps={skillsCardMotionProps}>
                        <div className={styles.skillCard}>
                            <ReactNativeLogo />
                            React Native <mark>beginner</mark>
                        </div>
                    </Reveal>
                </div>
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
