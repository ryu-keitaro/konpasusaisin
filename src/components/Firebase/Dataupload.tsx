import { initializeApp } from "firebase/app";
import { useState } from 'react';
import { getFirestore, doc, setDoc, Timestamp, serverTimestamp, limit } from 'firebase/firestore';


interface TagFields {
  [tagName: string]: boolean;
  }

interface FirestoreData {
  id: string;
  title: string;
  name: string;
  detail: string;
  strT:number;
  tag: TagFields;
  time:Date;
  limit:Date;
}

const firebaseConfig = {
  apiKey: "AIzaSyBE6W2TXtedCPj5ZoKQu2WIyVEBOMD0BIg",
  authDomain: "test-nextjs-d6670.firebaseapp.com",
  projectId: "test-nextjs-d6670",
  storageBucket: "test-nextjs-d6670.appspot.com",
  messagingSenderId: "531537153080",
  appId: "1:531537153080:web:5b1656e3c43845d1baeacd",
  measurementId: "G-KYVPHJTMQX"
};

const initialTags: TagFields = {
  初心者歓迎: false,
  エンジョイ: false,
  ガチ: false,
  ギルミ: false,
  Discord: false,
  少人数: false,
  固定多め: false,
  カスタム多め: false,
  無言加入可: false,
  朝: false,
  昼: false,
  夕方: false,
  夜: false,
  深夜: false,
  // 追加したタグにも初期値を設定してください。
};


const currentTime = new Date();
const limitTime = new Date(currentTime.getTime()+(14 * 24 * 60 * 60 * 1000));



export function useFirestoreUpload() {
    const [uploadStatus, setUploadStatus] = useState<string>('');

    const [formData, setFormData] = useState<FirestoreData>({
        id: '',
        title: '',
        name: '',
        detail: '',
        strT:currentTime.getTime(),
        time:currentTime,
        limit: limitTime,
        tag: initialTags,
      });
  
    const uploadData = async (formData: FirestoreData) => {
      try {
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
  
        await setDoc(doc(db, 'posts', formData.id), {
            title: formData.title,
            name: formData.name,
            detail: formData.detail,
            tag: formData.tag,
            strT:formData.strT,
            time:formData.time,
            limit:formData.limit,
          });
  
        setUploadStatus('Success');

        setFormData((prevData) => ({
            ...prevData,
            id: '',
            title: '',
            name: '',
            detail: '',
            strT:currentTime.getTime(),
            time:currentTime,
            limit: limitTime,
            tag: initialTags,
          }));

      } catch (error) {
        setUploadStatus('Error');
        console.error('Error uploading document:', error);
      }
    };
      return { formData, setFormData, uploadData, uploadStatus };
   
  }