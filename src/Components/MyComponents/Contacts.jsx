import React from "react";
import contacts from '../jsons/contactJson.json'
import ContactCard from "./ContactCard";

function Contacts(){
   
    return (
        <div id='contact'>
            <div className="contactcontainer">
                <div className="contactcontents">
                    {contacts.map((contact) => <ContactCard ImgURL = {contact.ImgURL} h2 = {contact.h2} p = {contact.p} button = {contact.button} /> )}
                </div>
            </div>
        </div>
    )
}

export default Contacts;