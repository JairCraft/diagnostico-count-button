'use client'

import React, { useState } from "react";

export default function Button() {

    const [count, setCount] = useState(0)

    function handleClick (){
        setCount(count + 1)
    }

    return (
        <button className="count-button" onClick={handleClick}>
            Veces clickeado {count}
        </button>
    )
}