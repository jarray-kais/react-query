import customAxios from "./axios.js";

 const API = {
    get: async (id) => {
        const data = await customAxios.get(`/${id}`)
        return data.data
    },
    // / [GET]
    getAll: async () => {
        return await customAxios.get('/')
        
    },
    // / [POST]
    create: async (todo) => {
        return await customAxios.post('/', todo)
    },
    // / [PUT] {}
    update: async (todo) => {
        return await customAxios.put(`/${todo.id}`, todo)
    },
    // /:id [DELETE]
    delete: async (id) => {
        return await customAxios.delete(`/${id}`)
    },
}

export default API