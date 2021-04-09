const initialState = {
    trail: {
        resort: "Vail",
        section: "Blue Sky Basin",
        trailName: "Champagne Glades",
        trailRating: "Black Diamond"
    }
}

const trailReducer = ( state = initialState , action ) => {
    switch ( action.type ) {
        case "FIND_TRAIL":
            return {
                ...state,
                trail: action.trail
            }

        default:
            return state
    }
}

export default trailReducer