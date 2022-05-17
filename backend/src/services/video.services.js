const db = require('./db.service');

async function getVideoCount(){
    const result = await db.query(
        'select count(*) from videos',
        []
    )
    return result.rows[0][0];
}

async function getAllVideos(){
    const result = await db.query(
        'select * from videos',
        []
    )
    return result.rows;
}

async function getVideoById(id){
    const result = await db.query(
        'select * from videos where(videoId = :id)',
        [id]
    )
    return result.rows;
}

async function insertVideo(ownerId , category , title , description , videoId ){
    await db.query(
        'insert into videos values (:ownerId, :category, :title, :description, :videoId)',
        [ownerId, category, title, description, videoId]
    )
    return;
}

async function updateVideoById(id, title, description, category){
    await db.query(
        'update videos set title=:title, description=:description, category=:category where(videoId = :id)',
        [title,description,category,id]
    )
    return;
}

async function deleteVideoById(id){
    await db.query(
        'delete from bookmark where(videoId = :id)',
        [id]
    )
    await db.query(
        'delete from videos where(videoId = :id)',
        [id]
    )
    
    return;
}
module.exports = {
    getVideoCount,
    getAllVideos,
    getVideoById,
    updateVideoById,
    deleteVideoById,
    insertVideo
}