const bookmarkServices = require('../services/bookmark.services');
const Video = require('../models/Video');
const utility = require('../utils/functions'); 

async function getByUser(req, res, next) {
    const data = await bookmarkServices.getBookmarkedVideos(req.params.user);
    let bookmarks = [];
    for(let ele of data){
        bookmarks.push(new Video(ele[0], ele[1], ele[2], ele[3], ele[4], utility.getEmbedLink(ele[4]),utility.getImageLink(ele[4])));
    }
    res.json(bookmarks);
}
async function set(req, res, next) {
    const data = await bookmarkServices.setBookmarkVideos(req.params.userId, req.params.videoId);
    res.json(data)
}
async function deleteMark(req, res, next) {
    console.log(req.params.userId, req.params.videoId)
    const data = await bookmarkServices.deleteBookmark(req.params.userId, req.params.videoId);
    res.json(data)
}

module.exports = {
    getByUser,
    set,
    deleteMark
}