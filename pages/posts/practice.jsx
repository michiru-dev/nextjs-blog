import Link from "next/link";
import Head from "next/head";
import { useState, useRef, useCallback, useEffect } from "react";

export default function FirstPost() {
  const inputEl = useRef(null);
  const [name, setName] = useState("");
  const handleOnChange = (e) => setName(e.target.value);
  const handleOnClick = () => inputEl.current.focus();
  //   console.log(inputEl);
  const handleOnClick2 = () => {
    console.log(inputEl.current.value);
  };
  console.log("rendered");

  const handleOnClick3 = useCallback(() => {
    console.log(name);
  }, [name]);

  useEffect(() => {}, [name]);

  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <div style={{ margin: "2em" }}>
        <input
          ref={inputEl}
          type="text"
          //   value={name}
          //   onChange={handleOnChange}
        />

        {/* <p>名前：{name}</p> */}
        <button onClick={handleOnClick}>フォーカスを当てる</button>
        <button onClick={handleOnClick2}>中身を見る</button>
        <input type="text" value={name} onChange={handleOnChange} />
        <button onClick={handleOnClick3}>中身を見る</button>
      </div>
    </>
  );
}
