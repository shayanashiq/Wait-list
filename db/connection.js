import { connect } from 'mongoose';


const connectDB = async () => {
  try {
    const connection =  connect(process.env.MONGODB_URI);
    if(connection){
         console.log(' MongoDB connected');
    }
  } catch (err) {
    console.error(' MongoDB connection error:', err.message);
    //process.exit(1); // Exit app if connection fails
  }
};

export default connectDB;
