import mongoose from 'mongoose';
import chalk from 'chalk';
import * as dotenv from 'dotenv';
dotenv.config();

let mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.set("returnOriginal", false);

const connectionString = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/nba-data"

  mongoose
    .connect(connectionString, mongooseConfig)
    .catch((error) => {
      console.log(`Error connecting to MongoDB: ${error.message}`);
    });

mongoose.connection.on("disconnected", () => {
  console.log(chalk.bold("Disconnected from MongoDB!"));
});
  
mongoose.connection.on("error", (error) => {
  console.log(chalk.red(`MongoDB connection error: ${error}`));
});

export default mongoose.connection