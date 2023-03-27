import React from "react";
import style from './Game.module.scss';

// Типизация V
type GameType = {
    question: any
    onClickVariant: any
    step: any
    questions: any
}


const Game: React.FC<GameType> = ({ question, onClickVariant, step, questions}) => {
  const persentage = Math.round((step / questions.length) * 100);
  return (
    <>
      <div className={style.progress}>
        <div style={{ width: `50%` /* <= исправить чтобы показывало прогресс ответов на вопросы */ }} className={`${style.progress__inner}`}></div>
      </div>
      <h1>{questions.title}</h1> {/* <= Почему-то не показывает title вопроса, исправить */}
      <ul>
        {
          question.variants.map((text: string, index: number) => <li
            onClick={() => onClickVariant(1)}
            key={text}>{text}</li>)
        }
      </ul>
    </>
  );
}

export default Game;