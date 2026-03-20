import { getNewsList } from '@/app/_libs/microcms';
import NewsList from '@/app/_components/NewsList';

export default async function News() {
  // 戻り値から contentsプロパティを取り出し、newsという変数名にリネームして代入（分割代入）
  const { contents: news } = await getNewsList();

  return <NewsList news={news} />;
}
