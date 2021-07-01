import React from 'react';
import { Route } from 'react-router';
import {BrowserRouter} from "react-router-dom";
import {loadWordFB,loadWord,createWord} from "./redux/modules/word";
import {firestore} from "./firebase";
import styled from "styled-components";

import Write from "./Write";
import WordList from "./WordList";

/**
 * BrowserRouter를 사용해서 라우터를 잡아줍니다.
 * /에는 목록 페이지를, /write에는 작성 페이지를 엮어줍니다. (path는 각각의 주소를, component에는 각각 페이지를 담당하는 컴포넌트를 넣어줘요!)
 * 
 */
const App = () => {
  
  return (
    <React.Fragment>
      <Wrapper>
        <BrowserRouter>
          <Route path="/" exact component={WordList} />
          <Route path="/write" exact component={Write} />
        </BrowserRouter>
      </Wrapper>
    </React.Fragment>
  );
};


// 가장 바깥에 있을 div 스타일을 잡아줄거예요.
const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #0f0c29; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #0f0c29, #302b63, #24243e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;


export default App;
