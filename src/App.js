/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

    let post = '강남 우동 맛집';
    let [text, setText] = useState([
      '남자 코트 추천',
      '강남 우동 맛집',
      '파이썬독학'
    ]);
  
    let [like, setLike] = useState([0, 0, 0]);
    let [modal, setModal] = useState(false);
    let [title, setTitle] = useState(0);
  
    return (
      <div className="App">
        <div className="black-nav">
          <h4>Sunny Blog</h4>
        </div>
  
        <button
          onClick={() => {
            let copy2 = [...text.sort()];
            setText(copy2);
          }}
        >
          정렬
        </button>
  
        <button
          onClick={() => {
            let copy = [...text];
            copy[0] = '여자 코트 추천';
            setText(copy);
          }}
        >
          Reset
        </button>
  
        {text.map(function (a, i) {
          return (
            <div className="list" key={i}>
              <h4
                onClick={() => {
                  setModal(!modal); setTitle(i)
                }}
              >
                {text[i]}
                <span
                  onClick={() => {
                    let copy = [...like];
                    copy[i] = copy[i] + 1;
                    setLike(copy);
                  }}
                >
                  ❤️
                </span>
                {like[i]}
              </h4>
              <p>2월 17일 발행</p>
      
            </div>
          );
        })}
  
        {/* <div className='list'>
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
          <button onClick={()=>{setModal(false)}}>close</button>
          </div> */}
  
        {modal == true ? 
          <Modal color={'skyblue'} text={text} setText={setText} title={title} />
        : null}
      </div>
    );
  }
  
  function Modal(props) {
    return (
      <div className="modal" style={{ background: props.color }}>
        <h4>{props.text[props.title]}</h4>
        <p>날짜</p>
        <p>상세 내용</p>
      </div>
    );
  }
    
export default App;
