import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.hmm2t.mongodb.net/<dbname>?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
})