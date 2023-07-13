//_app.jsが全ページに共通の親コンポーネント
//中身はしたのをコピーでOK
//このコンポーネント作ったら一回localhost3000を切って再起動

import "../styles/global.css";
//グローバルcssのインポートは必ずpages/_app.jsにする!ここしかできない

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
