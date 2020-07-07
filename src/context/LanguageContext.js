import React from "react";
const Context = React.createContext('hindi');

export class LanguageStore extends React.Component{

    state={language:'english'};

    handleClick=(language)=>{
        this.setState({language:language});
    }

    render(){
        return (
            <Context.Provider value={{...this.state,handleClick:this.handleClick}}>
                {this.props.children}
            </Context.Provider>
        );
    }

}


export default Context;