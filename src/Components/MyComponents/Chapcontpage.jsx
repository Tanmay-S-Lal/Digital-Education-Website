import React, { useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp} from "react-icons/ti";
import {AiOutlineDownload} from "react-icons/ai";
import bear from '../Images/Bear.png'
import penguin from '../Images/Penguin.png'
import tiger from '../Images/Tiger.png'
import poonamchart from '../Images/poonamchart.png'
import poonamdaypdf from '../Docs/poonamdaychart.pdf'
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import PoonamAnimation from "../Videos/poonams_animation.mp4";
import animation1thumbnail from "../Images/animation1thumbnail.png";
import poonamsSummary from "../Docs/poonams_summary.pdf";
import summary1 from "../Images/summary_1.png";
import english from '../Docs/Englishscript.pdf'
import kannada from '../Docs/Kannadascript.pdf'

function Contentcontainer(props){
    const navigate = useNavigate();

    // const [isOpen,setIsOpen] = useState(false)
    // const [isOpen1,setIsOpen1] = useState(false)
    // const [isOpen2,setIsOpen2] = useState(false)
    const [isOpen3,setIsOpen3] = useState(false)
    // const [upbutton,setupbutton]=useState(<TiArrowSortedDown/>)
    const [chapcont,setchapcont]=useState('CHAPTER 1: POONAM\'S DAY OUT')
    const [attributes,setattributes]=useState()
    
    
    function handleEvent(){

        setchapcont('SCAN THE QR CODES TO VISUALIZE');      // Note: Similarly make changes for rest of the stuffs 
        setattributes(()=>{
            return <div className="qrimagescontainer">
                <div className="qrnames">
                    <h1>BEAR</h1>
                    <h1>PENGUIN</h1>
                    <h1>TIGER</h1>
                </div>
                <img src={bear} alt=""  />
                <img src={penguin} alt="" />
                <img src={tiger} alt="" />
            </div>
        })

    }

    function handleanimation() {
       
        setchapcont('Animation')
        setattributes(()=>{
        return <div className="animationcontainer">
            <div className="animation">
                <ReactPlayer
                light={animation1thumbnail}
                controls={true}
                url={PoonamAnimation}
                height="250px"
                width="600px"
                />
            </div> 

            <div className="scripts">
            <a href={english} download={true}><button className="englishdownload">English transcript <AiOutlineDownload/></button></a>
            <a href={kannada} download={true}><button className="kannadadownload">ಕನ್ನಡ ಪ್ರತಿಲಿಪಿ <AiOutlineDownload/></button></a>
            </div>

            </div>
        })
    }

    function handlequiz(){
        navigate("/class3/EVS/chapter1/Quiz")
        
    }

    // function handleactivity(){
    //     setchapcont('Activity')
    // }

    function handleCharts(){

        setchapcont('Charts')
        setattributes(()=>{
            return <div className="charts">
                <img className="poonamchart"src={poonamchart} alt="" />
                <a href={poonamdaypdf} download={true}><button className="chartdownload">Click here to download <AiOutlineDownload/></button></a>  
            </div>
        })
    }

    function handleSummary(){

        setchapcont('SUMMARY')
        setattributes(()=>{
            return <div className="summary">
                <img className="poonamSummary"src={summary1} alt="" />
                <a href={poonamsSummary} download={true}><button className="summaryDownload">Click here to download <AiOutlineDownload/></button></a>  
            </div>
        })

    }
    
    return (
        <div>
            <div className="chapcontainer">
                <div className="chapnavs">
                    <div className="chapheading">
                        <h1>CONTENTS / ವಿಷಯ</h1>
                    </div>
                    <div className="mainbutton">
                        <button onClick={handleanimation} className="button1">ANIMATED VIDEOS / ಅನಿಮೇಟೆಡ್ ವೀಡಿಯೊಗಳು</button>
                    
                    </div>

                    <div className="mainbutton">
                        <button onClick={handleEvent} className="button1">AR MODELS / ಎ‌ ಆರ್ ಮಾದರಿಗಳು</button>
                    </div>

                    <div className="mainbutton">
                        <button onClick={handleCharts} className="button1">CHARTS / ಮಾಹಿತಿ ನಕಾಶೆಗಳು</button>
                    </div>
                    <div className="mainbutton">
                        <button onClick={handlequiz}className="button1">QUIZZES / ರಸಪ್ರಶ್ನೆ</button>
                    </div>

                    <div className="mainbutton">
                        <button onClick={()=>setIsOpen3((prev)=>!prev)} className="button1"> ACTIVITY SHEETS / ಚಟುವಟಿಕೆಗಳು
                        {
                            !isOpen3? <TiArrowSortedDown className="upbutton"/>:(
                                <TiArrowSortedUp className="upbutton"/>
                            )
                        }
                        </button>

                        {isOpen3 && (
                            <div className="list">
                                <div className="listitems">
                                        <button onClick={() => navigate('/class3/EVS/chapter1/Activity1')}>ACTIVITY-1</button>
                                        <button onClick={() => navigate('/class3/EVS/chapter1/Activity2')}>ACTIVITY-2</button>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="mainbutton">
                        <button className="button1" onClick={handleSummary}>SUMMARY / ಸಾರಾಂಶ</button>
                    </div>

                </div>

                <div className="chapcontent">
                    <div className="chapname">
                        <h1 className="contenttitle">{chapcont}</h1>
                        <div className="elementscontainer">{attributes}</div>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Contentcontainer;