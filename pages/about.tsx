import { DefaultLayout } from "../layouts/DefaultLayout";

import styles from "../styles/about.module.scss";

export default function About() {
    const calculateAge = (birthday: Date) => {
        const ageDiffMs = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDiffMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };

    return (
        <DefaultLayout>
            <section className={styles.hero}>
                <h1>
                    {`I'm Raymon, a ${calculateAge(
                        new Date("12-11-2006")
                    )} year old student developer from Bellevue,
                    Washington.`}
                </h1>
            </section>
        </DefaultLayout>
    );
}
