import React, { useState, useEffect } from 'react';
import dummy from '../assets/images/dummy.png'
import chLeft from '../assets/images/chevron-left.png'


export default function Popup() {


  var dataNum = 4;
  
  const [questionList, setPosts] = useState([]);
  const [answerList, answerPosts] = useState([]);



  getQues(dataNum);
  const handleClick = event => {
    event.preventDefault();
    let answKey = event.currentTarget.dataset.key;
    alert("Soru İD = " + questionList.id + " QUESTİON İD = " + answKey)
    console.log(dataNum)
    
    dataNum++
    getQues(dataNum)
  };

  function getQues(e){
    useEffect(() => {
      fetch('http://164.92.130.148:8081/service/api/v1/questions', {method: 'GET'})
         .then((response) => response.json())
         .then((data) => {
            console.log(data)
            setPosts(data.questionList[e]);
            answerPosts(data.questionList[e].answerList)
         })
         .catch((err) => {
            console.log(err.message);
         });
      }, []);
  }

  return (
    <>
     
     
     <div className="popup-container">
        <div className="popup-content">
          <a  className="back-btn">
          <img src={chLeft} alt="true" />
          </a>
          <div className="popup-section">
            <a  className="dots active"><span /></a>
            <a  className="dots"><span /></a>
            <a  className="dots"><span /></a>
            <a  className="dots"><span /></a>
          </div>
          <div className="contents">

          <h2>{questionList.question}</h2>
          <div className="answer-block answ-1">
           
          {answerList.map((answ, item) => {
                return (
                  <a onClick={handleClick} key={answ.id} data-key={answ.id}>
                    <label className="item"  >
                        <div className="radio-btn">
                          <input type="radio" name="radio1" />
                        <span className="checkmark" />
                        </div>
                        <div className="img"><img src={dummy} alt="dummy" /></div>
                        <span>{answ.answer} </span>
                    </label>
                  </a>
                );
            })} 
           
            </div> 
        </div>
         
         {/*  <div className="contents">
          {questionList.map((post, item) => {
                return (
                    <div className="post-card" key={item}>
                        <h2>{post.question}</h2>
                    </div>
                );
            })}
            <h2>Kendinizi nasıl tanımlıyorsunuz?</h2>
            <div className="answer-block answ-1">
              <label className="item">
                <div className="radio-btn">
                  <input type="radio" name="radio1" />
                  <span className="checkmark" />
                </div>
                <div className="img"><Image src={dummy} alt="dummy" /></div>
                <span>Cevap 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
              </label>
              <label className="item">
                <div className="radio-btn">
                  <input type="radio" name="radio1" />
                  <span className="checkmark" />
                </div>
                <div className="img"><Image src={dummy} alt="dummy" /></div>
                <span>Cevap 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
              </label>
              <label className="item">
                <div className="radio-btn">
                  <input type="radio" name="radio1" />
                  <span className="checkmark" />
                </div>
                <div className="img"><Image src={dummy} alt="dummy" /></div>
                <span>Cevap 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
              </label>
              <label className="item">
                <div className="radio-btn">
                  <input type="radio" name="radio1" />
                  <span className="checkmark" />
                </div>
                <div className="img"><Image src={dummy} alt="dummy" /></div>
                <span>Cevap 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
              </label>
            </div>
          </div> */}
        </div>
      </div>


    </>
  )
}