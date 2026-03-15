import styles from './index.module.css';

// 引数の型
type Props = {
  href: string;
  children: React.ReactNode;
};

// exportは単一のもののみであればdefault,1ファイルで複数をexportする場合はnamed exportする
export default function ButtonLink({ href, children }: Props) {
  return (
    <a href={href} className={styles.button}>
      {children}
    </a>
  );
}
