import { albumService } from "../services/album.service"

export const uploadService = {
    uploadImages,
}

const CLOUD_NAME = "dsep8u8y0"
const CLOUD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

async function uploadImages(albumId, files) {
    const urlList = []
    for (let i = 0; i < files.length; i++) {
        let imgUrl = await uploadImage(files[i])
        urlList.push(imgUrl)
    }
    // TODO - add to album via albumSerive
    return urlList
}

async function uploadImage(file) {
    const formData = new FormData()

    formData.append("file", file)
    formData.append("upload_preset", "default")

    const response = await fetch(CLOUD_URL, {
        method: "POST",
        body: formData,
    })

    const { url } = await response.json()
    return url
}
