import React, { useState } from "react";



function UsrState() {

    const [count1, setCount] = useState(0);


    // let x = 0;
    // function count() {
    //     x++;
    //     let abc = console.log("x:", x);
    // }

    function countState() {

        setCount(count1 + 1);
        // console.log("x:");
    }


    return (
        <div>
            {/* <div onClick={() => count()}>Please click me</div>
            <h1>{x}</h1> */}


            <button onClick={() => countState()}>Click Here</button>
            <h1>{count1}</h1>

        </div>
    )
}

export default UsrState