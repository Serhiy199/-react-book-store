import { useState } from 'react';
import css from './QuizQuestions.module.css';

function QuizQuestions({ onSelectedQuiz }) {
    const arrQuestions = onSelectedQuiz.questions;

    let [indexQuestion, setIndexQuestion] = useState(0);
    let [questions, setQuestions] = useState(arrQuestions[indexQuestion]);
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [result, setResult] = useState(false);
    let [answered, setAnswered] = useState(null);

    const handleAnswerButtonClick = (index, answerOption) => {
        if (lock === false) {
            setAnswered(index);
            setLock(true);
            if (answerOption.isCorrect) {
                setScore(score + 1);
            }
        }
    };

    const next = () => {
        const nextQuestion = indexQuestion + 1;
        if (nextQuestion < arrQuestions.length) {
            setIndexQuestion(nextQuestion);
            setQuestions(arrQuestions[indexQuestion]);
            setAnswered(null);
            setLock(false);
        } else {
            setResult(true);
        }
    };

    const reset = () => {
        setIndexQuestion(0);
        setQuestions(arrQuestions[indexQuestion]);
        setScore(0);
        setLock(false);
        setAnswered(null);
        setResult(false);
    };

    return (
        <div className={css.container}>
            <h1>{onSelectedQuiz.title}</h1>
            <hr className={css.hr} />
            {result ? (
                <>
                    <h2>
                        You Score {score} out of {arrQuestions.length} questions
                    </h2>
                    <button className={css.button} onClick={reset}>
                        Reset
                    </button>
                </>
            ) : (
                <>
                    <h2 className={css.questionsTitel}>
                        {arrQuestions[indexQuestion].titleQuestions}
                    </h2>
                    <ul>
                        {arrQuestions[indexQuestion].answerOption.map(
                            (answerOption, index = Math.random()) => (
                                <li
                                    key={index}
                                    className={`${css.listAnswers} ${
                                        answered === index
                                            ? answerOption.isCorrect
                                                ? css.correct
                                                : css.wrong
                                            : ''
                                    }`}
                                    onClick={() => handleAnswerButtonClick(index, answerOption)}
                                >
                                    {answerOption.answerText}
                                </li>
                            )
                        )}
                    </ul>
                    <button className={css.button} onClick={next}>
                        Next
                    </button>
                    <div className={css.index}>
                        {indexQuestion + 1} of {arrQuestions.length} questions
                    </div>
                </>
            )}
        </div>
    );
}

export default QuizQuestions;
