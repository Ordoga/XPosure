import { dbService } from "./db.service"

export const albumService = {
    query,
    getAlbumById,
}

const COLLETION_NAME = "Albums"

async function query({ filterBy = {} }) {
    const albums = await dbService.query(COLLETION_NAME)
    return Promise.resolve(albums)
}

async function getAlbumById(albumId) {
    const album = await dbService.get(COLLETION_NAME, albumId)
    return Promise.resolve(album)
}
