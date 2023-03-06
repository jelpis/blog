/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [text , setText] = useState(['남자 코드 추천', '강남 우동 맛집', '파이썬독학','여자']);
  
  let [like, setLike] = useState(0);
  let [modal, setModal] = useState(false) ;

  return (
    <div className="App">
      <div className="black-nav">
        <h4>
          Sunny Blog
        </h4>
      </div>

      <button onClick={()=>{
        let copy2 = [...text.sort()];
        setText(copy2);
        }}>정렬</button> 

        <button onClick={()=>{
         let copy = [...text];
         copy[0] = '여자 코트 추천';
         setText(copy)
        }}>Reset</button>

      <div className='list'>
        <h4> {text[0]} <span onClick={()=>{setLike(like+1)}}>❤️</span>{like}</h4>
        <p>2월 17일 발행</p>
        </div>
      <div className='list'>
        <h4> {text[1]} </h4>
        <p>2월 17일 발행</p>
        </div>
      <div className='list'>
        <h4 onClick={()=>{setModal(true)}}> {text[2]} </h4>
        <p>2월 17일 발행</p>
        </div>

    {
      modal == true ? <Modal/> : null
    }

    </div>
  );
}

function Modal(){

  return(
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세 내용</p>

  </div>
  )
}
export default App;
