class Courses {
    courseId;
    courseName;
    constructor(courseId, courseName) {
        this.courseId = courseId; // Generates a random 5-digit number
        this.courseName = courseName;
    }
    getCourseId() {
        return this.courseId;
    }
    getCourseName() {
        return this.courseName;
    }
}
export default Courses;
