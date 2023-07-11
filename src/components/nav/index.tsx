//src/components/nav/index.tsx
//ナビゲーションバーのボタン全部にstyleを適用できるよう変更

import Link from "next/link";
import styles from "./index.module.scss";
import Image from "next/image";
import React from "react";




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
  return (
    <section className={styles.container}>
      <ul className={styles.contents}>
        {TOPICS.map((topic, index) => {
          return (
            <li key={index} className={styles.navbtn}>
            
                <a href={`${topic.path}`} rel="noopener noreferrer">

                {/* <Link href ={`${topic.path}`}> */}
                <div className={styles.button}>
                  <Image
                      src={topic.icon}
                      alt=""
                      loading="eager"
                      width={33}
                      height={33}
                      priority
                    />
                    <span className={styles.titlesize}>{topic.title}</span>
                  
                
                {/* </Link> */}
       
                  <p className={styles.namelogo}>{topic.name}</p>
              </div>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Nav;