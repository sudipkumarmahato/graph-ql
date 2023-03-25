
const nanoid = require("nanoid")

/* The Course class is a blueprint for creating Course objects */
class Course {
    constructor(id, {
        courseName,
        category,
        price,
        language,
        email,
        stack,
        teachingAssists
    }) {
        this.id = id
        this.courseName = courseName
        this.category = category
        this.price = price
        this.language = language
        this.email = email
        this.stack = stack
        this.teachingAssists = teachingAssists

    }

}

/* Creating a new course and storing it in the courseHolder object. */
const courseHolder = {}

const resolvers = {
    /* A resolver function. */
    getCourse: ({ id }) => {
        return new Course(id, courseHolder[id])
    },
    createCourse: ({ input }) => {
        let id = nanoid()
        courseHolder[id] = input
        return new Course(id, input)
    }
}