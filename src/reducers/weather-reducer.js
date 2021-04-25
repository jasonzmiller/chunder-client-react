const initialState = {
    weatherReport: {}
}

const weatherReducer = ( state = initialState , action ) => {
    switch ( action.type ) {
        case "FIND_WEATHER_FOR_CITY":
            return {
                ...state,
                weatherReport: action.weatherReport
            }

        default:
            return state
    }
}

export default weatherReducer