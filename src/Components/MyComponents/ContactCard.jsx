
function ContactCard(props) {
    return(
        <div className="contactCard">
            <div className="contactimg">
                <img src={props.ImgURL} alt="" />
            </div>
            <div className="eachcontcontent">
                <h2>{props.h2}</h2>
                <p>{props.p}</p>
                <button >{props.button}</button>
            </div>
        </div>
    )
}

export default ContactCard;