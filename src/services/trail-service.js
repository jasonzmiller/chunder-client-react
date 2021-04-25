import axios from 'axios'

export const createTrailForMountain = (mid, newTrail) => {
    axios({
        method: "post",
        data: {
            mountainId: mid,
            section: newTrail.section,
            trailName: newTrail.name,
            trailRating: newTrail.rating,
            trailStatus: newTrail.status,
            warnings: undefined
        },
        withCredentials: true,
        url: `http://localhost:4000/trails`
    }).then((res) => console.log(res));

}
export const findTrailbyId = (trailId) => {}

export const findTrailsForMountain = (mountainId) => {}

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