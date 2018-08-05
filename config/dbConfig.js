module.exports = {
    host:     process.env.DB_HOST || 'localhost',
    port:     process.env.DB_PORT || 5432,
    database: process.env.DB_NAME ||  'quotes_dev',
};

//this is just an object with three values; two stings and one number;
//no functionality to it