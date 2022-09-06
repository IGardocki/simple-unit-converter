
// ideally, this will be the only file users will have to change to customize the unit converter to their own needs

// this will contain a list of measurement categories (Volume, Mass, etc)
export const measurementsToConvert = [
    {
        // each obj inside the array will have the properties 'category', and conversion units
        category: 'Volume',

        // right now, I'm thinking conversionUnits should be an array with the props:

        // unitA: first unit
        // unitB: second unit
        // unitAToUnitBConversion: function to convert from a to b
        // unitBToUnitAConversion: function to convert from b to a

        // but this may also change as we go along
        conversionUnits: [
            {
                unitA: 'tbs',
                unitB: 'cups',

                // left these as empty string for now for testing
                unitAToUnitBConversion: '',
                unitBToUnitAConversion: '',
            },
            {
                unitA: 'ml',
                unitB: 'L',

                // left these as empty string for now for testing
                unitAToUnitBConversion: '',
                unitBToUnitAConversion: '',
            },

        ]
    },
    {
        category: 'Mass',
        conversionUnits: 
        {
            unitA: 'lbs',
            unitB: 'kgs',

            // left these as empty string for now for testing
            unitAToUnitBConversion: '',
            unitBToUnitAConversion: '',
        },
    }
]