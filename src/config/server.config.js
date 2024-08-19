const dotenv = require('dotenv');

dotenv.config({path:'./src/.env'});

module.exports = {
    PORT: process.env.PORT || 8080,
    ATLAS_DB_URL: process.env.ATLAS_DB_URL ,
    NODE_ENV: process.env.NODE_ENV || 'development'
    
}