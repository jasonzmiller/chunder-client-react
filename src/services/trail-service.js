import axios from 'axios'

export const createTrailForMountain = (newTrail) => {
    axios({
        method: "post",
        data: {
            mountainId: newTrail.mountainId,
            section: newTrail.section,
            trailName: newTrail.trailName,
            trailRating: newTrail.trailRating,
            trailStatus: newTrail.trailStatus,
            warnings: newTrail.warnings
        },
        headers: {
            'content-type': 'application/json'
        },
        withCredentials: true,
        url: `http://localhost:4000/trails`
    }).then((res) => console.log(res));

}
export const findTrailbyId = (trailId) => {}

export const findTrailsForMountain = (mountainId) => {
    return fetch(`http://localhost:4000/mountains/${mountainId}/trails`)
        .then(response => response.json())
}

export const updateTrail = (trailId) => {}

export const deleteTrail = (trailId) => {}

const api = {
    createTrailForMountain,
    findTrailbyId,
    findTrailsForMountain,
    updateTrail,
    deleteTrail
}

export default api