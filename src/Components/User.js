import React, { createContext } from "react";

export const UserContext = createContext();

function User({children}) {
    const userinformation = {
        "qestrnSeq" : "20",
        "name": "initname",
        "gender" : "",
        "school": "",
        "grade": "",
        "email": "",
        "startDtm": new Date().getDate(),
        "answers": "",
    };

    return (<UserContext.Provider value={userinformation}>{children}</UserContext.Provider>
    );
};


export default User;