import axios from 'axios';
const HOST_URL = 'http://localhost:4000';

export const createMountain = (newMountain) => {
    axios({
        method: "post",
        data: {
            name: newMountain.name,
            trails: undefined,
            city: newMountain.city,
            state: newMountain.state
        },
        headers: {
            'content-type': 'application/json'
        },
        withCredentials: true,
        url: `${HOST_URL}/mountains`
    }).then((res) => console.log(res));
}

export const addMountainToUser = (mid, uid) => {
    axios({
        method: "post",
        data: {
            mid: mid,
            uid: uid
        },
        headers: {
            'content-type': 'application/json'
        },
        withCredentials: true,
        url: `${HOST_URL}/${uid}/mountains`
    }).then(response => response.json())
}

export const findAllMountains = () => {
    console.log("Trying to find mountains");
    return fetch(`${HOST_URL}/mountains`)
        .then(response => response.json())
    /* console.log("Trying to find mountains");
    axios({
        method: "get",
        withCredentials: true,
        url: `${HOST_URL}/mountains`
    }).then((res) => console.log(res)); */
}

export const findMountainsForUser = (userId) => {
    return fetch(`${HOST_URL}/${userId}/mountains`)
        .then(response => response.json())
}

export const findMountainById = (mountainId) => 
    fetch(`${HOST_URL}/mountains/${mountainId}`)
        .then(response => response.json())

export const findMountainByName = (mountainName) => {
    console.log(`Trying to find mountain ${mountainName}`);
    axios({
        method: "get",
        data: {
            name: mountainName
        },
        withCredentials: true,
        url:`${HOST_URL}/mountains/${mountainName}`
    }).then((res) => {
        console.log(res)
        return res.data
    })
}

export const updateMountain = (mountainId, updateToMountain) => {
    fetch(`${HOST_URL}/mountains/${mountainId}`, {
        method: "PUT",
        body: JSON.stringify(updateToMountain),
        headers: {
            'content-type' : 'application/json'
        },
        withCredentials: true
    })
}

export const deleteMountain = (mountainId) => {
    fetch(`${HOST_URL}/mountains/${mountainId}`, {
        method: "DELETE"
    })
        .then(response => response.json())
}

const api = {
    createMountain,
    findAllMountains,
    findMountainByName,
    findMountainById,
    updateMountain,
    deleteMountain,
    findMountainsForUser
}

export default api