import fs from "fs";
import path from "path";

import matter from "gray-matter";

import remark from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export interface frontMatterType {
    title: string;
    date: string;
    slug: string;
    contentHtml: string;
}

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData: frontMatterType[] = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, "");

        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const { title, date } = matter(fileContents).data;

        return {
            slug,
            title,
            date,
        };
    });
    return allPostsData.sort(({ date: a }, { date: b }) => {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    });
}

export function getAllPostSlugs() {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((fileName) => {
        return {
            params: {
                slug: fileName.replace(/\.md$/, ""),
            },
        };
    });
}

export async function getPostData(slug?: string | string[]) {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const {
        content,
        data: { title, date },
    } = matter(fileContents);

    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
        slug,
        contentHtml,
        title,
        date,
    };
}
