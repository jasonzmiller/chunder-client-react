const initialState = {
    trails: [
        {
            mountain: "Vail",
            section: "Blue Sky Basin",
            trailName: "Champagne Glades",
            trailRating: "Black Diamond",
            trailStatus: "Open"
        },
        {
            mountain: "Breckenridge",
            section: "Peak 8 Alpine",
            trailName: "Lake Chutes",
            trailRating: "Double Black Diamond",
            trailStatus: "Closed"
        }
    ]
}

const trailReducer = ( state = initialState , action ) => {
    switch ( action.type ) {
        case "FIND_TRAIL":
            return {
                ...state,
                trails: action.trails
            }

        case "FIND_TRAILS_FOR_MOUNTAIN":
            return {
                trailsForMountain: state.trails.map((trail) => {
                    return trail.mountain === action.mountain ? trail : null
                })
            }

        default:
            return state
    }
}

export default trailReducer