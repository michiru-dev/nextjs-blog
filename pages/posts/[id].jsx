import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

//Dynamic Routesしたい時はgetStaticPaths!
//getStaticPathsはビルド時にレンダリングする必要のあるパスのリストを生成する
//pathの配列を作る
export async function getStaticPaths() {
  const paths = getAllPostIds();
  //pathsの中身は[ { params: { id: 'pre-rendering' } }, { params: { id: 'ssg-ssr' } } ]
  //idなのはファイルの名前が[id].jsxだから
  return {
    paths,
    fallback: false,
  };
}

//getStaticPathsでreturnされた値はparamsに挿入されてるから、getStaticPropsの引数で受け取れる！
//getStaticPropsの引数は色々種類がある！
//上でreturnしたparamsは2つあるけど、これ以降の処理はparamsごとに一つずつ行われる。
//だからここの引数のparamsに入ってくるのはidひとつ！
export async function getStaticProps({ params }) {
  // paramsは{ id: 'ssg-ssr' }
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
