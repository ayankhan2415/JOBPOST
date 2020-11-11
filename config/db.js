
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const dbConnect = async ()=>{

  try {
    await mongoose.connect(db,
      {useNewUrlParser: true,
       useUnifiedTopology: true,
       useCreateIndex: true
      }, ()=>console.log('Database is connected to Atlas 😀')

      );

    

  } catch (error) {
    console.error(err.message);
    process.exit(1);
  }
}
module.exports = dbConnect;
