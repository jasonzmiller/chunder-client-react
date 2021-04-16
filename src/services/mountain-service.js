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

export const findMountainById = (mountainId) => {
}

export const findMountainByName = (mountainName) => {
    console.log(`Trying to find mountain ${mountainName}`);
    axios({
        method: "get",
        data: {
            name: mountainName
        },
        withCredentials: true,
        url:`http://localhost:4000/mountain`
    }).then((res) => console.log(res));
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