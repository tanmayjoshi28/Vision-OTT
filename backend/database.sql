create table users(
    id number PRIMARY KEY,
    username varchar2(500),
    email varchar2(500) UNIQUE,
    dob Date,
    password varchar2(500)
);

create table videos(
    ownerId number,
    category varchar2(500),
    title varchar2(500),
    description varchar2(500),
    videoId varchar2(500) PRIMARY KEY,
    FOREIGN KEY (ownerId) REFERENCES users(id)
);

create table bookmark(
    userId number,
    videoId varchar2(500),
    FOREIGN KEY (userId) REFERENCES users(id),
    FOREIGN KEY (videoId) REFERENCES videos(videoId)
);