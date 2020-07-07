import React from "react";
import LanguageContext from "../context/LanguageContext";

const Address=()=>{

    function renderAddress(value){
        let text='';

        switch(value){
            case 'english':{
                text='Address';
                break;
            }
            case 'spanish':{
                text='Habla a';
                break;
            }
            case 'german':{
                text='Adresse';
                break;
            }
            case 'hindi':{
                text='पता';
                break;
            }
            default:{
                text='Address';
                break;
            }
        }

        return text
    }

    return (
        <div className="field">
            <label> <LanguageContext.Consumer>
                        {({language})=>{return renderAddress(language)}}
                    </LanguageContext.Consumer>: 
            </label>
            <input type="text" name="address-name" placeholder="Address" />
        </div>
    );
}

export default Address;