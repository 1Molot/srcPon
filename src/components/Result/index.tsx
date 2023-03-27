import React from 'react';
import style from './Result.module.scss';
import {QuestType} from "../App";

type ResultType = {
    correct: number
    questions: QuestType[]
}

const Result: React.FC<ResultType> = ({correct, questions}) => {
    return (
        <div className={style.result}>
            <img alt="Michael Scott Clapping" src="/img/winner.gif"/>
            <h2>You got {correct} out of {questions.length}</h2>
            <a href="index.html">
                <button>Try again</button>
            </a>
        </div>
    );
}

export default Result;