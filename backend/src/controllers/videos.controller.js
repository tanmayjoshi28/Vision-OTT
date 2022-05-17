const videoServices = require('../services/video.services');
const Video = require('../models/Video');
const url = require('url');
const utility = require('../utils/functions');

async function getAll(req, res, next) {
    try{
        const data = await videoServices.getAllVideos();
        allUsers = [];
        for(let ele of data){
            const newUser = new Video(ele[0], ele[1], ele[2], ele[3], ele[4], utility.getEmbedLink(ele[4]), utility.getImageLink(ele[4]));
            allUsers.push(newUser);
        }
        res.json(allUsers);
    }
    catch(err){
        res.status(500).send({'ERROR':err});
    }
}
async function getById(req, res, next) {
    try{
        const data = await videoServices.getVideoById(req.params.id);
        if(data.length===0){
            res.status(400).send({'ERROR':'NOT FOUND'})
            return;
        }
        res.json(new Video(data[0][0], data[0][1], data[0][2], data[0][3], data[0][4], utility.getEmbedLink(data[0][4]), utility.getImageLink(data[0][4])))
    }
    catch(err){
        res.status(500).send({'ERROR':err});
    }
}

async function insertNewVideo(req, res, next) {
    try{
        let body = req.body;
        await videoServices.insertVideo(body.ownerId ,body.category , body.title , body.description , body.videoId)
        res.status(200).send({'INSERTED':'OK'});
    }
    catch(err){
        res.status(500).send({'ERROR':err});
    }
}

async function updateById(req, res, next) {
    try{
        const body = req.body;
        await videoServices.updateVideoById(req.params.id, body.title, body.description, body.category);
        const data = await videoServices.getVideoById(req.params.id);
        if(data.length===0){
            res.status(400).send({'ERROR':'NOT FOUND'});
            return;
        }
        res.json(new Video(data[0][0], data[0][1], data[0][2], data[0][3], data[0][4], utility.getEmbedLink(data[0][4]), utility.getImageLink(data[0][4])));
    }
    catch(err){
        next(err);
    }
}

async function deleteById(req, res, next) {
    try{
        await videoServices.deleteVideoById(req.params.id);
        res.status(200).send({'DELETED':'OK'});
    }
    catch(err){
        res.status(500).send({'ERROR':err});
    }
}
module.exports = {
    getAll,
    getById,
    updateById,
    deleteById,
    insertNewVideo
};