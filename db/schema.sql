DROP TABLE IF EXISTS movies;
DROP TABLE IF EXISTS comments;

CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    moviename VARCHAR(255),
    date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    content TEXT,
    date_created TIMESTAMP NOT NULL DEFAULT NOW()
);
