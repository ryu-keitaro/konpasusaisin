//src/components/nav/index.tsx
//ナビゲーションバーの非表示、追加（４９～５２行目）（６６～７３行目）（１１８～１２２行目）

import Link from "next/link";
import styles from "./index.module.scss";
import Image from "next/image";
import React,{useState} from "react";
import {useRouter} from "next/router";//追加：現在のpathを取得するやつ



const TOPICS = [
  {
    icon: "/megaphone.png",
    path: "/",
    title: "募",
    name: "メンバー募集",
  },
  {
    icon: "/planning.png",
    path: "/solicit",
    title: "誘",
    name: "勧誘募集",
  },
  {
    icon: "/swords.png",
    path: "/fight",
    title: "共",
    name: "固定募集",
  },
  {
    icon: "/question-mark.png",
    path: "/question",
    title: "疑",
    name: "質問募集",
  },
  {
    icon: "/menu.png",
    path: "/menu",
    title: "使",
    name: "使い方",
  },
];


const Nav: React.FC = () => {

  //追加：ナビゲーションバーの非表示　
  const [isNavClose, setIsNavClose] = useState(true);
  const handleNavClose = () => {
    setIsNavClose(!isNavClose);//
  };
  //追加：ここまで


  
  const router = useRouter();
  const currentPath = router.pathname;
  



  return (
  
    // 追加：ここから
    <>
    {/* ナビゲーションバーの表示 */}
    {!isNavClose && (
        <button className={styles.openbtn} onClick={handleNavClose}>{'▶'}</button>
      )}  
    
    {/* ナビゲーションバーの非表示 */}
    {isNavClose && (
    //追加：ここまで

    


    <section className={styles.container}  >
      <ul className={styles.contents} >      
        {TOPICS.map((topic, index) => {

          const isActive = currentPath === topic.path;//追加：現在のパスとボタンのパスが同じときisActiveとする。
          
          return (
            
            <li key={index} className={`${styles.navbtn}    ${isActive ? styles.navbtn_after:""}`}>
                      {/*変更：↑通常時はnavbtnスタイルを適用    ↑isActiveがtrueの時はボタンのスタイルをnavbtn_afterに変更 */}

              <Link legacyBehavior href={topic.path} >
          {/*変更：　↑aタグをLinkタグにするとページ遷移時にブラウザのロードなくなってスムーズになる */}

                <div className={`${styles.button}      ${isActive ? styles.button_after : ""}`}>
              {/*変更： ↑通常時はbuttonスタイルを適用     ↑isActiveがtrueの時ボタンのスタイルをbutton_afterに変更 */}

                  <Image
                      src={topic.icon}
                      alt=""
                      loading="eager"
                      width={33}
                      height={33}
                      priority
                  />

                  <span className={styles.titlesize}>{topic.title}</span>

                  <p className={styles.namelogo}>{topic.name}</p>  
                </div>
              </Link>
             
            </li>
               
          );  
        })}


      {/* 追加：ここから */}
     <button className={styles.closebtn} onClick={handleNavClose}>◀CLOSE</button>
      </ul>    
    </section>
    )}
     </>   
    //  追加：ここまで 
     
  );
};

export default Nav;