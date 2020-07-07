import React from "react";
import LanguageContext from "../context/LanguageContext";

class Name extends React.Component{

    static contextType=LanguageContext;

    renderHelper=(value)=>{
        let firstName='';
        let lastName='';

        switch(value){
            case 'english':{
                firstName='First Name';
                lastName='Last Name';
                break;
            }
            case 'spanish':{
                firstName='Nombre de pila';
                lastName='Apellido';
                break;
            }
            case 'german':{
                firstName='Vorname';
                lastName='Nachname';
                break;
            }
            case 'hindi':{
                firstName='पहला नाम';
                lastName='अंतिम नाम';
                break;
            }
            default:{
                firstName='First Name';
                lastName='Last Name';
                break;
            }
        }

        return {firstName,lastName};
    }

    render(){
        
        let person=this.renderHelper(this.context.language);
        
        return (
            <div>
                <div className="field">
                    <label>{person.firstName} : </label>
                    <input type="text" name="first-name" placeholder="First Name" />
                </div>
                <div className="field">
                    <label>{person.lastName} : </label>
                    <input type="text" name="first-name" placeholder="Last Name" />
                </div>
            </div>
        );
    }
    
}

export default Name;