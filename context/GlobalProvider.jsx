import React, { createContext, useEffect, useState } from "react";

const globalContext = createContext();
export { globalContext };

const GlobalContextProvider = ({children}) => {
    const [isSignedUp, setIsSignedUp] = useState(false);

    useEffect(() => {
        setIsSignedUp(true);
    }, [])

    return(
        <globalContext.Provider value={{isSignedUp, setIsSignedUp}}>
            {children}
        </globalContext.Provider>
    )
}

export { GlobalContextProvider };