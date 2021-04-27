import axios from "axios"

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
        url: "http://localhost:4000/mountains"
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
        url: `http://localhost:4000/${uid}/mountains`
    }).then(response => response.json())
}

export const findAllMountains = () => {
    console.log("Trying to find mountains");
    axios({
        method: "get",
        withCredentials: true,
        url: 'http://localhost:4000/mountains'
    }).then((res) => console.log(res));
}

export const findMountainsForUser = (userId) => {
    return fetch(`http://localhost:4000/${userId}/mountains`)
        .then(response => response.json())
}

export const findMountainById = (mountainId) => 
    fetch(`http://localhost:4000/mountains/${mountainId}`)
        .then(response => response.json())

export const findMountainByName = (mountainName) => {
    console.log(`Trying to find mountain ${mountainName}`);
    axios({
        method: "get",
        data: {
            name: mountainName
        },
        withCredentials: true,
        url:`http://localhost:4000/mountains/${mountainName}`
    }).then((res) => {
        console.log(res)
        return res.data
    })
}

export const updateMountain = (mountainId) => {}

export const deleteMountain = (mountainId) => {

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