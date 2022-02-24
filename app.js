const dotenv = require("dotenv");
const connectDB = require("./config/db");
dotenv.config();

const Author = require("./models/Author");
const Course = require("./models/Course");
const Comment = require("./models/Comment");

connectDB();

//autoriaus sukurimas

async function createAuthor(name, bio) {
  const author = new Author({
    name,
    bio,
  });

  const result = await author.save();
  // console.log(result);
}

//  createAuthor('Lukas', 'react > nodejs');
//  createAuthor('yaboi', 'real trap shit');

//---------------------------------------------------------------------------------

//course sukurimas

async function createCourse(name, author) {
  const course = new Course({
    name,
    author,
  });

  const result = await course.save();
  console.log(result);
}

  // createCourse('Node Course', '6207b9782df070e9a161c6fc')
  // createCourse('JS Course', '6207b9782df070e9a161c6fc')
  // createCourse('HTML Course', '6207b9782df070e9a161c6fc')
  // createCourse('CSS Course', '6207b9782df070e9a161c6fc')

//-----------------------------------------------------------------------------------

//Comment sukurimas

async function createComment(name, author, course) {
  const comment = new Comment({
    name,
    author,
    course,
  });

  const result = await comment.save();
  console.log(result);
}

  // createComment("kazkas paperde", "62166ac3e606889b56a0bb93", "6207b9782df070e9a161c6fc");
  // createComment ("carpe diem", "62166ac3e606889b56a0bb92", "6207b9782df070e9a161c6fc" )

//-----------------------------------------------------------------------------------

async function listCourses() {
  const courses = await Course
      .find()
      .populate('author', 'name -_id')
      .select('name');
  console.log(courses);
}

// listCourses();

async function listComments() {
  const comments = await Comment
      .find()
      .populate({
          path: 'course',
          select: 'name -_id'
      })
      .populate(`author`, `name -_id`)

      .select('');

  console.log(comments);
}

listComments();
