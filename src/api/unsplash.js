import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID -E_7uwfy8AI3wX3VPlQmupg8Ie2nRVkiAM2EvThL3tI'
    }
});