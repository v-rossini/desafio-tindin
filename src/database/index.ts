import mongoose, { MongooseOptions } from "mongoose";


//export default mongoose.connect('mongodb+srv://blerg:TaICk8rgqANLlg8x@cluster0.u2ixg.mongodb.net/tindin?retryWrites=true&w=majority');
mongoose.connect('mongodb://localhost/tinbin');
mongoose.Promise = global.Promise;


export { mongoose };