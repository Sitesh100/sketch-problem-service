import mongoose from "mongoose";
const { Schema } = mongoose;

const problemSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title cannot be empty"],
  },
  discription: {
    type: String,
    required: [true, "Description cannot be empty"],
  },
  difficultyLevel: {
    type: String,
    enum: ["easy", "medium", "hard"],
    required: [true, "Difficulty level cannot be empty"],
    default: "easy",
  },
  //this is subschema we took array of Object for testCases.
  testCase: [
    {
      input: {
        type: String,
        required: true,
      },
      output: {
        type: String,
        required: true,
      },
    },
  ],
  editorial: {
    type: String,
  },
});

// now with the help of the "Problem" model Object from which we can execute the orm or odm.
const Problem = mongoose.model("Problem", problemSchema);

module.exports = Problem;
