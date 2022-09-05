import React, { useState } from "react"
import { measurementsToConvert } from "./changeThis";
import { Categories } from "./converterComponents/Categories";
import { ConverterContext } from "./converterComponents/ConverterContext";

export const UnitConverter = () => {
    const [inputValue, setInputValue] = useState();

    // this will serve as an object to add states to to use context throughout the app
    const gettersSetters = {

    }

    // the UnitConverter will be the main component, with other components inside the converterComponents folder
    return (
        <>
            <ConverterContext.Provider value={gettersSetters}>
                <fieldset>
                    {/* the Categories component will go through the array in the changeThis.jsx file and return the appropriate selection fields               */}

                    <Categories />
                </fieldset>
            </ConverterContext.Provider>

        </>
    )
}