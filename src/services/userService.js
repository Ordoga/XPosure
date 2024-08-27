import { dbService } from "./db.service"

export const userService = {
    query,
    getUserById,
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
