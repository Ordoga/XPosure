"use strict"

import { storageService } from "./storage.service.js"
import { utilService } from "./util.service.js"

export const dbService = {
    query,
    get,
    remove,
    post,
    put,
    insert,
}

const ID_FIELD = "id"

const demoData = {
    Albums: [
        {
            id: "1",
            createdBy: "123",
            coverImgUrl: "/concerts.jpg",
            name: "Live Shows",
            photos: [],
        },
        {
            id: "2",
            createdBy: "123",
            coverImgUrl: "/weddings.jpg",
            name: "Weddings",
            photos: [],
        },
        {
            id: "3",
            createdBy: "123",
            coverImgUrl: "/festivals.jpg",
            name: "Festivals",
            photos: [],
        },
        {
            id: "4",
            createdBy: "1234",
            coverImgUrl: "None",
            name: "Live Shows",
            photos: [],
        },
        {
            id: "5",
            createdBy: "123",
            coverImgUrl: "None",
            name: "Corperate",
            photos: [],
        },
    ],
    Users: [
        {
            id: "123",
            fullName: "ordoga",
            username: "ordoga",
            password: "ordoga",
            type: "pro",
            coverImgUrl: "someUrl",
            options: {},
            albums: [
                {
                    id: "1",
                    createdBy: "123",
                    coverImgUrl: "/concerts.jpg",
                    name: "Live Shows",
                    photos: [],
                },
                {
                    id: "2",
                    createdBy: "123",
                    coverImgUrl: "/wedding.jpg",
                    name: "Weddings",
                    photos: [],
                },
                {
                    id: "3",
                    createdBy: "123",
                    coverImgUrl: "/corporate.jpg",
                    name: "Corporate",
                    photos: [],
                },
            ],
        },
    ],
}

async function query(collectionName) {
    var collection = storageService.load(collectionName)
    console.log(collection)
    // TODO For Development Only
    if (!collection) {
        storageService.save(collectionName, demoData[collectionName])
        return Promise.resolve(demoData[collectionName])
    }
    return Promise.resolve(collection)
}

async function get(collectionName, id) {
    var collection = await query(collectionName)
    console.log(collection)
    return collection.find(curr => curr[ID_FIELD] === id)
}

async function remove(collectionName, id) {
    var collection = await query(collectionName)
    var idx = collection.findIndex(curr => curr[ID_FIELD] === id)
    if (idx === -1) throw new Error("something went wrong")
    collection.splice(idx, 1)

    storageService.save(collectionName, collection)
    return Promise.resolve()
}

async function post(collectionName, item) {
    var collection = await query(collectionName)

    item[ID_FIELD] = utilService.makeId()
    collection.push(item)

    storageService.save(collectionName, collection)
    return Promise.resolve(item)
}

async function put(collectionName, item) {
    var collection = await query(collectionName)

    let idx = collection.findIndex(curr => curr[ID_FIELD] === item[ID_FIELD])
    if (idx === -1) throw new Error("something went wrong")
    collection[idx] = item

    storageService.save(collectionName, collection)
    return Promise.resolve(item)
}

async function insert(collectionName, items) {
    var collection = await query(collectionName)
    items.forEach(curr => (curr[ID_FIELD] = utilService.makeId()))
    collection.push(...items)

    storageService.save(collectionName, collection)
    return Promise.resolve()
}
