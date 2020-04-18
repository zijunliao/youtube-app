import React from 'react';
import axios from 'axios';

/**
 * Find the usage of Api KEY
 * https://developers.google.com/youtube/v3/sample_requests
 */
const API_KEY_VIDEO = 'AIzaSyDvHlNuUebwUeWHp8659NudTWfxW-TqIos';

export const youtubeVideo = () => {
    return axios.create({
        baseURL: "https://www.googleapis.com/youtube/v3",
        params: {
            part: "snippet",
            maxResults: 5,
            key: API_KEY_VIDEO,
        }
    })
}