import React from "react";
import { measurementsToConvert } from "../changeThis";


export const Categories = () => {
    // for each category, returns a select element with the name of the category
    return (
        <select name="measurements" id="measurements">
            {measurementsToConvert.map((cat) => {
                return (
                    <>
                        <option value={`${cat.category}`}>{cat.category}</option>
                        {/* <select name={`${cat.category}`}>

                        </select> */}
                    </>
                )
            })}
        </select>
    )
}