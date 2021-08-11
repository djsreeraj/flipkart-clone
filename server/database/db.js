import mongoose from "mongoose";

const connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@flipkartweb.lmu0w.mongodb.net/MERN-STACKn?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error", error.message);
  }
};

export default connection;
