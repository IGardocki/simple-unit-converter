import React, { useState , useEffect} from "react"
import { measurementsToConvert } from "./changeThis";
import { Categories } from "./converterComponents/Categories";
import { ConverterContext } from "./converterComponents/ConverterContext";
import { UnitChoices } from "./converterComponents/UnitChoices";

export const UnitConverter = () => {
    const [categoryToConvert, setCategoryToConvert] = useState(measurementsToConvert[0]);

    // setting a useEffect to change the units displayed in <UnitChoices/> based on which category we want to look at 
    useEffect(() => {
        console.log(categoryToConvert)
    },[categoryToConvert])

    // this will serve as an object to add states to to use context throughout the app
    const gettersSetters = { categoryToConvert, setCategoryToConvert

    }

    // the UnitConverter will be the main component, with other components inside the converterComponents folder
    return (
        <>
            <ConverterContext.Provider value={gettersSetters}>
                <fieldset>
                    {/* the Categories component will go through the array in the changeThis.jsx file and return the appropriate selection fields               */}

                    <Categories />
                    <UnitChoices/>
                </fieldset>
            </ConverterContext.Provider>

        </>
    )
}