//firebase.js
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
        apiKey: "AIzaSyB1iCXwSmW_I3nclO6S2_pUglwXxB0iE1w",
        authDomain: "my-first-project-aea25.firebaseapp.com",
        projectId: "my-first-project-aea25",
        storageBucket: "my-first-project-aea25.appspot.com",
        messagingSenderId: "88748168333",
        appId: "1:88748168333:web:55507d9373b0de1965fec4",
        measurementId: "G-JDZR23XJY2"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };



