import React from "react";
import { measurementsToConvert } from "../changeThis";

// console.log()
export const Categories = () => {
    return (
        <select name="measurements" id="measurements">

            {measurementsToConvert.map((cat) => {
                return(
                    // <li>{cat.category}</li>
                    <option value={`${cat.category}`}>{cat.category}</option>
                )
            })}
        </select>
    )
}