import axios from 'axios';

/**
 * Find the usage of Api KEY
 * https://developers.google.com/youtube/v3/sample_requests
 */
const API_KEY = 'AIzaSyDvHlNuUebwUeWHp8659NudTWfxW-TqIos';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        key: API_KEY
    }
});