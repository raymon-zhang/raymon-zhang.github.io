import { GetStaticPaths, GetStaticProps } from "next";

import { DefaultLayout } from "../../layouts/DefaultLayout";

import { getAllPostSlugs, getPostData, frontMatterType } from "../../lib/posts";

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

export default function Post({ postData }) {
    return (
        <DefaultLayout>
            {postData.title}
            <br />
            {postData.slug}
            <br />
            {postData.date}
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </DefaultLayout>
    );
}
