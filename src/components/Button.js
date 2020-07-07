import React from "react";
import LanguageContext from "../context/LanguageContext";

const Button =()=>{

    function renderButton(value){
        let text='';

        switch(value){
            case 'english':{
                text='Submit';
                break;
            }
            case 'spanish':{
                text='Enviar';
                break;
            }
            case 'german':{
                text='Einreichen'
                break;
            }
            case 'hindi':{
                text='प्रस्तुत';
                break;
            }
            default:{
                text='Submit';
                break;
            }
        }

        return text 
    }

    return (<button type="submit" className="ui primary button ">
            <LanguageContext.Consumer>
            {({language})=>{
                return renderButton(language);
            }}
            </LanguageContext.Consumer>
            </button>
    );
}

export default Button;