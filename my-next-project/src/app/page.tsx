import styles from './page.module.css';
import Image from 'next/image';
import { getNewsList } from '@/app/_libs/microcms';
import { TOP_NEWS_LIMIT } from '@/app/_constants';
import NewsList from '@/app/_components/NewsList';
import ButtonLink from '@/app/_components/ButtonLink';

export default async function Home() {
  const name = '世界';

  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

  return (
    // <>でフラグメント <Fragment></Fragment>の省略記法
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で{name}を変える!</h1>
          <p className={styles.description}>
            私たちは市場をリードしているグローバルテックカンパニーです。
          </p>
        </div>
        {/*ブラウザ幅に適した画像の表示のためImageを使う*/}
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt="background"
          width={4000}
          height={1200}
        ></Image>
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっと見る</ButtonLink>
        </div>
      </section>
    </>
  );
}
