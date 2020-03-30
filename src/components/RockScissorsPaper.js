import React, { Component } from 'react';
import './RockScissorsPaper.css';

const RockScissorsPaper = ({ onRock,onScissors,onPaper,rock_scissors_paper,computer_rock_scissors_paper, onNext, onReset,who_win,me_win,com_win, timer}) => {

  return (
    <div>
      <h1>
        {(rock_scissors_paper.length>0)?
        <div>
        </div>
        :
        <div>
        시간제한 10초
        <br></br>
         {timer+'초 경과'}   
        </div>
        }
      </h1>
    <h1>
    {'나 :'+me_win +'승   |      '}{'컴퓨터 :'+com_win+'승'}
    </h1>
    <div className="RockScissorsPaper">
      {(rock_scissors_paper === '')
      ?
      <div>
      <h1>'골라주세요'</h1>
      <button onClick={onRock}>rock</button>
      <button onClick={onScissors}>scissors</button>
      <button onClick={onPaper}>paper</button>      
      </div>      
      :
      <div>
      <h1>'나의 선택'</h1>
      <h1>{rock_scissors_paper}</h1>
      </div>
    }
    </div>
    vs
    <div className="RockScissorsPaper">
      <h1>'컴퓨터'</h1>
      {(rock_scissors_paper === '')
      ?  <div> </div>
      :  <div>
        <h1>
        {computer_rock_scissors_paper}
        </h1>
          <br></br>
      </div>
      } 
    </div>
    {who_win === 'same'?
    <div><h1>무승부</h1></div>
    :
    <div><h1>{who_win}</h1></div>
    }
             <button onClick={onNext}>다음판</button>
    <button onClick={onReset}>리셋하기</button>

    </div>
  );
};

export default RockScissorsPaper;
