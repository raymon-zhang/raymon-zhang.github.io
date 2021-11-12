import { GetStaticProps } from "next";
import Link from "next/link";

import Date from "../../components/Date";

import { getSortedPostsData, frontMatterType } from "../../lib/posts";

import { DefaultLayout } from "../../layouts/DefaultLayout";

import styles from "../../styles/post.module.scss";
import utilStyles from "../../styles/utils.module.scss";

export default function Blog({
    allPostsData,
}: {
    allPostsData: frontMatterType[];
}) {
    return (
        <DefaultLayout>
            <section
                className={`${utilStyles.headingMd} ${styles.blogDescription}`}
            >
                <div className={styles.meImageContainer}>
                    <img
                        src="/images/me.png"
                        alt="me"
                        className={styles.meImage}
                    />
                </div>
                <p>This is my blog, written by me.</p>
                <p>
                    I write new articles occasionally, mostly about topics
                    relating to programming.
                </p>
            </section>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${styles.index}`}
            >
                <h1 className={utilStyles.headingLg}>Blog</h1>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ slug, date, title, coverImage }) => (
                        <BlogItem
                            slug={slug}
                            date={date}
                            title={title}
                            coverImage={coverImage}
                            key={slug}
                        />
                    ))}
                </ul>
            </section>
        </DefaultLayout>
    );
}

const BlogItem = ({ slug, date, title, coverImage }: frontMatterType) => {
    return (
        <Link href={`/blog/${slug}`} passHref>
            <li className={`${utilStyles.listItem} ${styles.blogItem}`}>
                <img
                    src={coverImage}
                    alt={title}
                    className={styles.blogItemImage}
                />
                <div className={styles.blogItemData}>
                    <span className={styles.blogItemTitle}>{title}</span>
                    <br />
                    <small className={utilStyles.lightText}>
                        <Date dateString={date} />
                    </small>
                </div>
            </li>
        </Link>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    const allPostsData = getSortedPostsData();

    return {
        props: {
            allPostsData,
        },
    };
};
