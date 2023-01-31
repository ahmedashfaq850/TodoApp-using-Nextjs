import React, { createContext, useState } from "react";


export const Context = createContext<any>('');

export const AppContext = (props: any) => {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`

    const [toggle, setToogle] = useState(false)
    const [arr, setArr] = useState<any>([])
    const [input, setInput] = useState<any>({
        title: '',
        description: '',
        date: currentDate
    });

    return (
        <Context.Provider
            value={{
                setToogle,
                toggle,
                arr,
                setArr,
                input,
                setInput
            }}
        >
            {props.children}
        </Context.Provider>
    );
};