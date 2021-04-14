const initialState = {
    weatherForCity: {}
}

const weatherReducer = ( state = initialState , action ) => {
    switch ( action.type ) {
        case "FIND_WEATHER_FOR_CITY":
            return {
                ...state,
                weatherForCity: action.weather
            }

        default:
            return state
    }
}

export default weatherReducer