import axios from 'axios';
const HOST_URL = 'http://localhost:4000';

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
        url: `${HOST_URL}/warnings`
    }).then((res) => console.log(res));
}

export const findWarningById = (warningId) => {}

export const findWarningsForTrail = (mountainId, trailId) => {
    return fetch(`${HOST_URL}/mountains/${mountainId}/trails/${trailId}/warnings`)
        .then(response => response.json())
}

export const updateWarning = (warningId, updateToWarning) => {
    fetch(`${HOST_URL}/warnings/${warningId}`, {
        method: "PUT",
        body: JSON.stringify(updateToWarning),
        headers: {
            'content-type' : 'application/json'
        },
        withCredentials: true
    })
}

export const deleteWarning = (warningId) => {
    fetch(`${HOST_URL}/warnings/${warningId}`, {
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