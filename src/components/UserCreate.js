import React from "react";

import Name from "./Name";
import Address from "./Address";
import Button from "./Button";

const UserCreate=()=>{

    return (
        <form className="ui form">
            <Name />
            <Address />
            <Button />
        </form>
    );

}

export default UserCreate;