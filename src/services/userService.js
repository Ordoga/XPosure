import { dbService } from "./db.service"

export const userService = {
    query,
    getUserById,
    remove,
    save,
    getEmptyUser,
}

const COLLETION_NAME = "Users"

async function query() {
    const users = await dbService.query(COLLETION_NAME)
    return Promise.resolve(users)
}

async function getUserById(userId) {
    const user = await dbService.get(COLLETION_NAME, userId)
    console.log(user)
    return Promise.resolve(user)
}

async function remove(userId) {
    try {
        await dbService(COLLETION_NAME, userId)
    } catch (error) {
        console.log(error)
    }
}

async function save(user) {
    try {
        let updatedUser = undefined
        if (user.id) {
            updatedUser = await dbService.put(COLLETION_NAME, user)
        } else {
            updatedUser = await dbService.post(COLLETION_NAME, user)
        }
        return Promise.resolve(updatedUser)
    } catch (error) {
        console.log(error)
    }
}

function getEmptyUser() {
    return {
        fullname: "",
        username: "",
        password: "",
        type: "basic",
        options: {},
        albums: [],
    }
}
