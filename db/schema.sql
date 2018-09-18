DROP TABLE IF EXISTS movies CASCADE;
DROP TABLE IF EXISTS comments CASCADE;

CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    moviename VARCHAR(255),
    platform TEXT,
    date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    content TEXT,
    movie_id INTEGER REFERENCES movies(id) ON DELETE CASCADE,
    date_created TIMESTAMP NOT NULL DEFAULT NOW()
);
