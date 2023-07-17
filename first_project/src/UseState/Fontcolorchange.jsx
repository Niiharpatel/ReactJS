import React, { useState } from 'react'

function Fontcolorchange() {
    const [textcolor, settextcolor] = useState("red");

    function chanegColor() {

        settextcolor("green");

    }
    return (
        <div><h1 style={{ color: textcolor }}>My name is Niihar</h1>
            <button onClick={() => chanegColor()}>Click Here</button></div>
    )
}

export default Fontcolorchange