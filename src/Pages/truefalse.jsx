import { useState, useEffect } from 'react';
import '../Components/Styles/truefalse.css'
import questionsData from '../Components/jsons/true_false.json'
import { NAVBAR_QUIZ } from './NavBar';
import clapping from "../Components/sounds/Quiz_CorrectClapping.mp3"
import negative from "../Components/sounds/Quiz_WrongNegative.mp3"
import quizCorrectSound from "../Components/sounds/Quiz_ThatsRightUAreCorrect.mp3"
import quizWrongSound from "../Components/sounds/Quiz_SorryUAreWrong.mp3"
// import { useSpeechSynthesis } from 'react-speech-kit';
const Truefalse = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [points, setPoints] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showThumbsUp, setShowThumbsUp] = useState(false);
    const [showThumbsDown, setShowThumbsDown] = useState(false);
    const [playClappingMusic, setPlayClappingMusic] = useState(false);
    const [playNegativeMusic, setPlayNegativeMusic] = useState(false);
    const [playRightMusic, setPlayRightMusic] = useState(false);
    const [playWrongMusic, setPlayWrongMusic] = useState(false);
    // const { speak } = useSpeechSynthesis();
    // const speakCorrect = "That's right you are correct";
    // const isWrong = "Sorry you are wrong";
    const handleOptionChange = (event) => {
        console.log(event.target.value);
        setSelectedOption(event.target.value);
    };

    const handleNextQuestion = () => {
        if (submitted) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setSelectedOption(null);
            setIsCorrect({});
            setSubmitted(false);
        }
    };

    useEffect(() => {
        const clappingAudio = new Audio(clapping);
        if (playClappingMusic) {
            clappingAudio.play();
            setTimeout(() => {
                clappingAudio.pause();
                clappingAudio.currentTime = 0;
                setPlayClappingMusic(false);
            }, 2000);
        }
    }, [playClappingMusic]);

    useEffect(() => {
        const wrong = new Audio(negative)
        if (playNegativeMusic) {
            wrong.play();
            setTimeout(() => {
                wrong.pause();
                wrong.currentTime = 0;
                setPlayNegativeMusic(false);
            }, 2000);
        }
    }, [playNegativeMusic]);

    useEffect(() => {
        const correctgirl = new Audio(quizCorrectSound)
        if (playRightMusic) {
            correctgirl.play();
            setTimeout(() => {
                correctgirl.pause();
                correctgirl.currentTime = 0;
                setPlayRightMusic(false);
            }, 2000);
        }
    }, [playRightMusic]);
    
    useEffect(() => {
        const wronggirl = new Audio(quizWrongSound)
        if (playWrongMusic) {
            wronggirl.play();
            setTimeout(() => {
                wronggirl.pause();
                wronggirl.currentTime = 0;
                setPlayWrongMusic(false);
            }, 2000);
        }
    }, [playWrongMusic]);

    const handleSubmit = (param1, param2, points) => {
        if (param1 === selectedOption) {
            console.log("true");

            // speak({ text: speakCorrect });
            setIsCorrect(prevCorrect => ({
                ...prevCorrect,
                [param2]: true,
            }));
            setPoints((prevPoints) => prevPoints + points);
            setShowThumbsUp(true);
            setTimeout(() => {
                setShowThumbsUp(false);
            }, 2000); 
            setPlayClappingMusic(true);
            setPlayRightMusic(true);
        }
        else if (selectedOption === null) {
            return
        }

        else {
            console.log("false");

            // speak({ text: isWrong });
            setIsCorrect(prevCorrect => ({
                ...prevCorrect,
                [param2]: false,
            }));
            setShowThumbsDown(true);
            setTimeout(() => {
                setShowThumbsDown(false);
            }, 2000); 
            setPlayNegativeMusic(true);
            setPlayWrongMusic(true);
        }
        setSubmitted(true);
    };
    return (
        <>
            <NAVBAR_QUIZ/>
            <div className="truefalsebg">

                <div className="section">
                    <h3>Section 3 - True or False</h3>
                    <h3>Level: {questionsData[currentQuestionIndex]?.difficulty}, Points : {questionsData[currentQuestionIndex]?.points}</h3>
                </div>
                <div className="template1">
                    <div key={questionsData[currentQuestionIndex]?.id}>
                        {currentQuestionIndex < questionsData.length ? (
                            <>
                                <h3>{questionsData[currentQuestionIndex]?.question}</h3>
                                <label className='label1'>
                                    <input type="radio" value="True" name="ans" onChange={handleOptionChange} disabled={submitted}/>
                                    True
                                </label>
                                <br />
                                <label className='label1'>
                                    <input type="radio" value="False" name="ans" onChange={handleOptionChange} disabled={submitted}/>
                                    False
                                </label>
                                <button className="submit-button" onClick={() => handleSubmit(questionsData[currentQuestionIndex]?.answer, questionsData[currentQuestionIndex]?.id, questionsData[currentQuestionIndex]?.points)} disabled={submitted}>Submit</button>
                                {isCorrect[questionsData[currentQuestionIndex]?.id] === true && (
                                    <div className="rw">You are right!!</div>
                                )}
                                {isCorrect[questionsData[currentQuestionIndex]?.id] === false && (
                                    <div className="rw1">Sorry, you are wrong, the reason is : {questionsData[currentQuestionIndex]?.reason}</div>
                                )}
                                <button className="next-button" onClick={handleNextQuestion} disabled={!submitted}>
                                    Next Question
                                </button>
                                <h4 className="score1">Points: {points}</h4>
                            </>
                        ) : (
                            <div className="quiz-over-message1">
                                <img className='trophy' alt='' src='https://img.freepik.com/free-vector/gold-cup-illustration_1284-17139.jpg?size=626&ext=jpg&ga=GA1.2.1873050670.1691914218&semt=ais'/>
                                <h5>Quiz Over! Your total points: {points}</h5>
                            </div>
                        )}
                        {showThumbsUp && (
                            <div className="thumbs-up-animation">
                                <span className="thumbs-up-icon" role="img" aria-label="Thumbs Up">
                                    👍
                                </span>
                            </div>
                        )}
                        {showThumbsDown && (
                            <div className="thumbs-up-animation">
                                <span className="thumbs-up-icon" role="img" aria-label="Thumbs Up">
                                👎
                                </span>
                            </div>
                        )}
                    </div>
                </div>


            </div>
        </>
    )
}

export default Truefalse