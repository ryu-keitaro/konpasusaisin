//src/components/nav/index.tsx
//現在いるページのナビゲーションバーのボタンのスタイルを変える

import Link from "next/link";
import styles from "./index.module.scss";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";//現在のpathを取得するためのやつ




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

  //追加　現在のページのpathを取得
  const router = useRouter();
  const currentPath = router.pathname;
  //ここまで

  return (
    <section className={styles.container}>
      <ul className={styles.contents}>
        {TOPICS.map((topic, index) => {
          const isActive = currentPath === topic.path;
          return (
            // ここからボタン一つ分のデザイン
            <li key={index} className={`${styles.navbtn} ${isActive ? styles.navbtn_after:""}`}>
          
               {/* Linkのほうがaよりデータ読み込み少なくていいかも */}
              <Link legacyBehavior href={topic.path} > 
                <div className={`${styles.button} ${isActive ? styles.button_after : ""}`}>
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
            // ここまでボタン一つ分のデザイン
          );
        })}
      </ul>
    </section>
  );
};

export default Nav;