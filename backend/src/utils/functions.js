const EMBED_BASE_URL = 'https://www.youtube.com/embed/';
const IMAGE_BASE_URL = 'https://img.youtube.com/vi/';

function getEmbedLink(videoId){
    return EMBED_BASE_URL + videoId;
}

function getImageLink(videoId){
    return IMAGE_BASE_URL + videoId + '/0.jpg';
}

module.exports = {
    getEmbedLink,
    getImageLink
}