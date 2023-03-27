import React from 'react';
import style from './Result.module.scss';

type ResultType = {
    correct: any
    questions: any
}

const Result: React.FC<ResultType> = ({ /* Чего-то не хватает*/ }) => {
  return (
    <div className={style.result}>
      <img alt="/img/winner.gif" src="Michael Scott Clapping"/>
      <h2>You got [correct] out of [questions.length]</h2>
      <a href="badRoute">
        <button>Try again</button>
      </a>
    </div>
  );
}

export default Result;