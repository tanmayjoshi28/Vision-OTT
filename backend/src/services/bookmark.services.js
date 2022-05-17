const db = require('./db.service');

async function getBookmarkedVideos(userId){
    const data = await db.query(
        'select * from videos INNER JOIN bookmark on videos.videoId = bookmark.videoId where(bookmark.userId = :userId)',
        [userId]
    );
    console.log(data.rows)
    return data.rows
}

async function setBookmarkVideos(userId, videoId){
    await db.query(
        'insert into bookmark values(:userId, :videoId)',
        [userId, videoId]
    );
    return
}

async function deleteBookmark(userId, videoId){
    await db.query(
        'delete from bookmark where(userId= :userId and videoId= :id)',
        [userId, videoId]
    );
    return;
}

module.exports ={
    getBookmarkedVideos,
    setBookmarkVideos,
    deleteBookmark
}