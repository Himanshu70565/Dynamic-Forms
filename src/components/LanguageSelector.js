import React from "react";
import LanguageContext from "../context/LanguageContext";

class LanguageSelector extends React.Component {

    static contextType=LanguageContext;

    render() {
        return (
            <div>
                <h1 style={{ display: "inline", marginRight: '40px' }}>Select a Language   :  </h1>
                <i className="flag us" onClick={() => this.context.handleClick('english')} />
                <i className="flag spain" onClick={() => this.context.handleClick('spanish')} />
                <i className="flag india" onClick={() => this.context.handleClick('hindi')} />
                <i className="flag germany" onClick={() => this.context.handleClick('german')} />
            </div>
        );
    }
}

export default LanguageSelector;