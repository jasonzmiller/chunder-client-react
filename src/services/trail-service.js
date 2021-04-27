import axios from 'axios';
const HOST_URL = 'http://localhost:4000';

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
        url: `${HOST_URL}/trails`
    }).then((res) => console.log(res));

}
export const findTrailbyId = (trailId) => {
    return fetch(`${HOST_URL}/trails/${trailId}`)
        .then(response => response.json())
}

export const findTrailsForMountain = (mountainId) => {
    return fetch(`${HOST_URL}/mountains/${mountainId}/trails`)
        .then(response => response.json())
}

export const updateTrail = (trailId, updateToTrail) => {
    fetch(`${HOST_URL}/trails/${trailId}`, {
        method: 'POST',
        body: JSON.stringify(updateToTrail),
        headers: {
            'content-type' : 'application/json'
        },
        withCredentials: true
    })
}

export const deleteTrail = (trailId) => {
    fetch(`${HOST_URL}/trails/${trailId}`, {
        method: "DELETE",
        withCredentials: true
    })
        .then(response => response.json())
}

const api = {
    createTrailForMountain,
    findTrailbyId,
    findTrailsForMountain,
    updateTrail,
    deleteTrail
}

export default api