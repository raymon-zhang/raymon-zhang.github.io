import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import Date from "../../components/Date";

import { DefaultLayout } from "../../layouts/DefaultLayout";

import { getAllPostSlugs, getPostData, frontMatterType } from "../../lib/posts";

import utilStyles from "../../styles/utils.module.scss";
import styles from "../../styles/post.module.scss";

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params?.slug);
    return {
        props: {
            postData,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostSlugs();
    return {
        paths,
        fallback: false,
    };
};

export default function Post({ postData }: { postData: frontMatterType }) {
    return (
        <DefaultLayout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article className={styles.postArticle}>
                <h1 className={`${utilStyles.headingXl} ${styles.postTitle}`}>
                    {postData.title}
                </h1>
                <div className={`${utilStyles.lightText} ${styles.date}`}>
                    <Date dateString={postData.date} />
                </div>
                <div
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml! }}
                />
            </article>
        </DefaultLayout>
    );
}
