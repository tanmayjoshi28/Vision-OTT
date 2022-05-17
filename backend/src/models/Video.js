class video{
    ownerId = 0
    category =''
    title = ''
    description = ''
    videoId = ''
    embedLink = ''
    imageLink = ''
    constructor(ownerId,category,title, description,videoId,embedLink, imageLink){
        this.ownerId = ownerId,
        this.title = title,
        this.description = description,
        this.videoId = videoId,
        this.embedLink = embedLink,
        this.imageLink = imageLink,
        this.category = category
    }
}

module.exports = video;