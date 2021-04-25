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

export const findAllMountains = () => {
    console.log("Trying to find mountains");
    axios({
        method: "get",
        withCredentials: true,
        url: 'http://localhost:4000/mountains'
    }).then((res) => console.log(res));
}

export const findMountainById = (mountainId) => 
    fetch(`http://localhost:4000/mountains/${mountainId}`)
        .then((res) => {
            console.log(res.data)
            return res.data
        })

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
    deleteMountain
}

export default api