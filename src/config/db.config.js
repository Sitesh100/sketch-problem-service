const mongoose = require('mongoose');
const { ATLAS_DB_URL, NODE_ENV } = require('./server.config');



async function connectToDB(){

    try{
        if(NODE_ENV === 'development'){
            await mongoose.connect(ATLAS_DB_URL);  
        }
        
    }catch(e){
        console.log('unable to connect to database server');
        console.log(e);
    }
}

module.exports = connectToDB;