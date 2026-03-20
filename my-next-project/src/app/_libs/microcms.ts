import type {
  MicroCMSImage,
  MicroCMSListContent,
  MicroCMSQueries,
} from 'microcms-js-sdk';
import { createClient } from 'microcms-js-sdk';

export type Member = {
  name: string;
  position: string;
  profile: string;
  image: MicroCMSImage;
} & MicroCMSListContent;

export type Category = {
  name: string;
} & MicroCMSListContent;

export type News = {
  title: string;
  description: string;
  content: string;
  thumbnail?: MicroCMSImage;
  category: Category;
} & MicroCMSListContent;

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required.');
}

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required.');
}

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getMembersList = async (queries?: MicroCMSQueries) => {
  // <Member>型の取得
  return await client.getList<Member>({
    endpoint: 'members',
    queries,
  });
};

export const getNewsList = async (queries?: MicroCMSQueries) =>
  await client.getList<News>({
    endpoint: 'news',
    queries,
  });

export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  return await client.getListDetail<News>({
    endpoint: 'news',
    contentId,
    queries,
  });
};
