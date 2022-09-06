import React, { useContext } from "react";
import { ConverterContext } from "./ConverterContext";
import { measurementsToConvert } from "../changeThis";


export const Categories = () => {
    const { categoryToConvert, setCategoryToConvert } = useContext(ConverterContext);

    // for each category, returns a select element with the name of the category
    return (
        // trying to figure out how to properly fire onChange...this works with console logs:
        <select name="measurements" id="measurements" onChange={() => console.log('changed')}>
            <option value="example">Example</option>
            {measurementsToConvert.map((cat) => {
                return (
                    <option value={`${cat.category}`}>{cat.category}</option>
                )
            })}
        </select>
    )
}