import React, { useState } from "react"
import { measurementsToConvert } from "./changeThis";
import { Categories } from "./converterComponents/Categories";

export const UnitConverter = () => {
    const [inputValue, setInputValue] = useState();
    console.log(measurementsToConvert)



    return (
        <>
            <fieldset>
                {/* <label for="measurements">Choose a Measurement to Convert!</label>
                 */}
                    {/* TODO: CREATE AN ARRAY OF MEASUREMENTS AND CONVERSIONS AND MAP THRU TO RETURN AN OPTION FOR EACH ONE */}
                    <Categories/>
                {/* </select> */}
            </fieldset>
            {/* <input type="text" onChange={e => e.target.value} onSubmit={e => setInputValue(e.target.value)}></input>
            <h1>{inputValue}</h1> */}
        </>
    )
}