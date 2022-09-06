import React, {useContext} from "react";
import { measurementsToConvert } from "../changeThis";
import { ConverterContext } from "./ConverterContext";


export const UnitChoices = () => {
    const {categoryToConvert, setCategoryToConvert} = useContext(ConverterContext);

    return (
        <select>
            {categoryToConvert.conversionUnits.map((unitPair) => {
                return (
                    <option value={`${unitPair.unitA}And${unitPair.unitB}`}>{`${unitPair.unitA} and ${unitPair.unitB}`}</option>
                )
            })}
        </select>
    )
}