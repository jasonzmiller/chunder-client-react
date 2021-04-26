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

export const findWarningsForTrail = (trailId) => {
    return fetch(`${TRAIL_URL}/${trailId}/warnings`)
        .then(response => response.json())
}

export const updateWarning = (warningId) => {
    
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