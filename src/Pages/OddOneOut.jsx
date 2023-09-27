import React, { useState, useEffect } from 'react';
import '../Components/Styles/OddOneOut.css';
import questions from '../Components/jsons/OddOneOut.json';
// import { useSpeechSynthesis } from 'react-speech-kit';
import clapping from "../Components/sounds/Quiz_CorrectClapping.mp3"
import negative from "../Components/sounds/Quiz_WrongNegative.mp3"
import quizCorrectSound from "../Components/sounds/Quiz_ThatsRightUAreCorrect.mp3"
import quizWrongSound from "../Components/sounds/Quiz_SorryUAreWrong.mp3"
//import crow from '../images/crow.png';
import { NAVBAR_QUIZ } from './NavBar';

const OddOneOut = () => {
	const [option, selectedOption] = useState(null);
	// const { speak } = useSpeechSynthesis();
	const [correct,isCorrect]= useState({});
	const [points, setPoints] = useState(0);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [submitted, setSubmitted] = useState(false);
	const [showThumbsUp, setShowThumbsUp] = useState(false);
    const [showThumbsDown, setShowThumbsDown] = useState(false);
    const [playClappingMusic, setPlayClappingMusic] = useState(false);
    const [playNegativeMusic, setPlayNegativeMusic] = useState(false);
	const [playRightMusic, setPlayRightMusic] = useState(false);
    const [playWrongMusic, setPlayWrongMusic] = useState(false);
	// const text = "Choose the odd one out";
	// const speakCorrect = "That's right you are correct";
	// const isWrong = "Sorry you are wrong!";
	// const handleOnClick = () => {
		// speak({ text:text  });
	// };
	const handleOptionChange = (event) => {
		console.log(event.target.value);
		selectedOption(event.target.value);
	};
	const handleNextQuestion = () => {
        if (submitted) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            
			selectedOption(null);
            isCorrect({});
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

	const handleSubmit = (param1,param2,param3) => {
		setSubmitted(true);
		if (param1 === option)
		{	console.log("true");
		
		// speak({ text: speakCorrect});
		isCorrect(prevCorrect => ({
			...prevCorrect,
			[param2]: true,
		  }));
		  setPoints((prevPoints) => prevPoints + param3);
		  setShowThumbsUp(true);
		  setTimeout(() => {
			  setShowThumbsUp(false);
		  }, 2000); 
		  setPlayClappingMusic(true);  
		  setPlayRightMusic(true);

	}
		else if(option===null){
			return
		}
		else
			{
				console.log("false");
			
			isCorrect(prevCorrect => ({
				...prevCorrect,
				[param2]: false,
			  }));
			// speak({ text:isWrong});
			setShowThumbsDown(true);
            setTimeout(() => {
                setShowThumbsDown(false);
            }, 2000); 
            setPlayNegativeMusic(true);
			setPlayWrongMusic(true);
		}
			
	};
	
	return (
		<>
		<NAVBAR_QUIZ/>
		{currentQuestionIndex < questions.length ? (
				<div className='correct'>
					<div className="left">
						<div className="talk" /*onClick={handleOnClick}*/ >
							<div className="questiona">
								Choose the Odd one Out!!
							</div>
						</div>
					</div>
					<div className="right">
						<div className="formi">
						<div className='form2'>
							<label>
								<input type="radio" value="option1" name="ans" onChange={handleOptionChange} />
								<h3 className='correct-h3'>{questions[currentQuestionIndex].option1}</h3>
								<div><img src={questions[currentQuestionIndex]?.option1_url} alt="" style={{ width: "30%"}} /></div>
							</label>
							
							<label>
								<input type="radio" value="option2" name='ans' onChange={handleOptionChange} />
								<h3 className='correct-h3'>{questions[currentQuestionIndex].option2}</h3>
								<div><img src={questions[currentQuestionIndex]?.option2_url} alt="" style={{ width: "30%"}} /></div>
							</label>
						</div>
							
						<div className='form2'>
							<label>
								<input type="radio" value="option3" name='ans' onChange={handleOptionChange} />
								<h3 className='correct-h3'>{questions[currentQuestionIndex].option3}</h3>
								<div><img src={questions[currentQuestionIndex]?.option3_url} alt="" style={{ width: "30%"}} /></div>
							</label>
							<label>
								<input type="radio" value="option4" name='ans' onChange={handleOptionChange} />
								<h3 className='correct-h3'>{questions[currentQuestionIndex].option4}</h3>
								<div><img src={questions[currentQuestionIndex]?.option4_url} alt="" style={{ width: "30%"}} /></div>
							</label>
						</div>
						<div className='form2'>
							<button className='normal-button' onClick={() => handleSubmit(questions[currentQuestionIndex]?.answer,questions[currentQuestionIndex]?.id,questions[currentQuestionIndex]?.points) } disabled={submitted}>Submit</button>
							<button className='normal-next' onClick={handleNextQuestion} disabled={!submitted}>
                                    Next Question
                                </button>
						</div>
							
						</div>
						<div>
							{(correct[questions[currentQuestionIndex]?.id]===true) && <div style={{display:"flex",margin:"10px", justifyContent:"center",alignItems:'center',fontSize:'1.5rem', color:'black',backgroundColor:"lightgreen"}}>You are right!<br/>{questions[currentQuestionIndex].reason}</div>}
							{(correct[questions[currentQuestionIndex]?.id]===false) && <div style={{display:"flex",margin:"10px", justifyContent:"center",alignItems:'center',fontSize:'1.5rem', color:'black',backgroundColor:"red"}}>Sorry, you are wrong!</div>}
							</div>
							
						<h2 className="score2">Points: {points}</h2>
						{showThumbsUp && (
                            <div className="thumbs-up-animation">
                                <span className="thumbs-up-icon1" role="img" aria-label="Thumbs Up">
                                    👍
                                </span>
                            </div>
                        )}
                        {showThumbsDown && (
                            <div className="thumbs-up-animation">
                                <span className="thumbs-up-icon1" role="img" aria-label="Thumbs Up">
                                👎
                                </span>
                            </div>
                        )}
			
					</div>
				</div>):(
					<div className="quiz-over-message">
					<img className='trophy' alt='' src='https://img.freepik.com/free-vector/gold-cup-illustration_1284-17139.jpg?size=626&ext=jpg&ga=GA1.2.1873050670.1691914218&semt=ais' />
                                <h5>Quiz Over! Your total points: {points}</h5>
                            </div>
				)}
				
		</>
	);
};

export default OddOneOut;