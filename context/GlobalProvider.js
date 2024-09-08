import React, { createContext, useContext, useEffect, useState } from "react";

const globalContext = createContext();
export const useGlobalContext = () => useContext(globalContext);

const GlobalProvider = ({children}) => {
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

export default GlobalProvider;