import Head from "next/head";
import Image from "next/image";

import { Bounce, Zoom } from "react-awesome-reveal";

import { DefaultLayout } from "../layouts/DefaultLayout";

import styles from "../styles/Home.module.scss";

export default function Home() {
    return (
        <DefaultLayout>
            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroInner}>
                        <div className={styles.heroCopy}>
                            <Bounce>
                                <h1 className={styles.heroTitle}>
                                    <mark>Hi!</mark> {"I'm"} <mark>Raymon</mark>
                                    .
                                </h1>
                            </Bounce>
                            <Zoom direction="right" delay={750}>
                                <h2 className={styles.heroSubtitle}>
                                    An <mark>avid</mark> full-stack web{" "}
                                    <mark>developer</mark>.
                                </h2>
                            </Zoom>
                        </div>
                    </div>
                </div>
            </section>
        </DefaultLayout>
    );
}
