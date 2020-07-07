import React from "react";

import UserCreate from "./UserCreate";
import { LanguageStore } from "../context/LanguageContext";
import LanguageSelector from "./LanguageSelector";

class App extends React.Component{

    

    render(){
        return (
            <div className="ui container" style={{marginTop:"40px"}}>
                <LanguageStore>
                    <LanguageSelector />
                    <div style={{marginTop:"25px"}}>
                            <UserCreate />
                    </div>
                </LanguageStore>
            </div>
        );
    }
}

export default App;