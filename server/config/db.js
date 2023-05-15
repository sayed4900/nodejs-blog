const mongoose = require('mongoose');


const connectDB = async ()=>{
    try{

        
        const conn = await mongoose.connect(process.env.DB);
        console.log(`Database Connected ${conn.connection.host}`)
    }catch(err){
        console.log(err)
    }
}

module.exports=connectDB;