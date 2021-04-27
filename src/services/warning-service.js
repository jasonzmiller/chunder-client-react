import axios from "axios"
const TRAIL_URL = "http://localhost:4000/trails/"

export const createWarningForTrail = (newWarning) => {
    axios({
        method: "post",
        data: {
            name: newWarning.name,
            votes: 0,
            trailId: newWarning.trailId
        },
        headers: {
            'content-type': 'application/json'
        },
        withCredentials: true,
        url: `http://localhost:4000/warnings`
    }).then((res) => console.log(res));
}

export const findWarningById = (warningId) => {}

export const findWarningsForTrail = (mountainId, trailId) => {
    return fetch(`http://localhost:4000/mountains/${mountainId}/trails/${trailId}/warnings`)
        .then(response => response.json())
}

export const updateWarning = (warningId, updateToWarning) => {
    fetch(`http://localhost:4000/warnings/${warningId}`, {
        method: "PUT",
        body: JSON.stringify(updateToWarning),
        headers: {
            'content-type' : 'application/json'
        },
        withCredentials: true
    })
}

export const deleteWarning = (warningId) => {
    fetch(`http://localhost:4000/warnings/${warningId}`, {
        method: "DELETE",
        withCredentials: true
    })
        .then(response => response.json())
}

const api = {
    createWarningForTrail,
    findWarningById,
    findWarningsForTrail,
    updateWarning,
    deleteWarning
}

export default api