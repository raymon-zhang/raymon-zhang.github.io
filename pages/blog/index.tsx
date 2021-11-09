import { GetStaticProps } from "next";

import { getSortedPostsData, frontMatterType } from "../../lib/posts";

import { DefaultLayout } from "../../layouts/DefaultLayout";

export default function Blog({
    allPostsData,
}: {
    allPostsData: frontMatterType[];
}) {
    return (
        <DefaultLayout>
            <h1>Coming soon!</h1>{" "}
            <ul>
                {allPostsData.map(({ slug, date, title }) => (
                    <li key={slug}>
                        {title}
                        <br />
                        {slug}
                        <br />
                        {date}
                    </li>
                ))}
            </ul>
        </DefaultLayout>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
    const allPostsData = getSortedPostsData();

    return {
        props: {
            allPostsData,
        },
    };
};
