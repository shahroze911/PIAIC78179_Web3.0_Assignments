import { v4 as uuidv4 } from "uuid";
import inquirer from "inquirer";
interface Course {
  course_id: string;
  course_name: string;
}

const course_list: Course[] = [
  { course_id: uuidv4().substr(0, 5), course_name: "English" },
  { course_id: uuidv4().substr(0, 5), course_name: "Urdu" },
  { course_id: uuidv4().substr(0, 5), course_name: "Mathematics" },
  { course_id: uuidv4().substr(0, 5), course_name: "Physics" },
  { course_id: uuidv4().substr(0, 5), course_name: "Chemistry" },
  { course_id: uuidv4().substr(0, 5), course_name: "Biology" },
  { course_id: uuidv4().substr(0, 5), course_name: "Computer Science" },
];

class Student {
  private student_id: string;
  private student_name: string;
  private courses: Course[];
  private balance: number;

  constructor(name: string) {
    this.student_id = uuidv4().substr(0, 5);
    this.student_name = name;
    this.courses = [];
    this.balance = 0;
  }

  enrollCourse(c_enroll: Course) {
    this.courses.push(c_enroll);
  }

  show_details() {
    console.log("Student ID", this.student_id);
    console.log(`Name ${this.student_name}`);
    console.log(`Enrolled Courses`);
    this.courses.forEach((courses) => {
      console.log(`- ${courses.course_name}`);
    });
  }
}

async function addNewStudent() {
  const studentNamePrompt = await inquirer.prompt([
    {
      type: "input",
      name: "studentName",
      message: "Enter student name:",
      validate: (value) => (value ? true : "Student name is required."),
    },
  ]);

  const coursesToAdd: Course[] = [];
  let addMoreCourses = true;

  while (addMoreCourses) {
    const courseChoicePrompt = await inquirer.prompt([
      {
        type: "list",
        name: "selectedCourseName",
        message:
          'Select a course to enroll (or "Finish" to finish enrollment):',
        choices: [...course_list.map((course) => course.course_name), "Finish"],
      },
    ]);

    if (courseChoicePrompt.selectedCourseName === "Finish") {
      addMoreCourses = false;
    } else {
      const selectedCourse = course_list.find(
        (course) => course.course_name === courseChoicePrompt.selectedCourseName
      );

      if (selectedCourse) {
        coursesToAdd.push(selectedCourse);
      } else {
        console.log("Invalid course selection.");
      }
    }
  }

  const newStudent = new Student(studentNamePrompt.studentName);
  coursesToAdd.forEach((course) => newStudent.enrollCourse(course));

  console.log("Student enrollment successful. Student Details:");
  newStudent.show_details();
   // Ask the user if they want to continue adding more students
   const continuePrompt = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'continue',
      message: 'Do you want to add another student?',
    },
  ]);

  if (continuePrompt.continue) {
    addNewStudent(); // Recursive call to add another student
  } else {
    console.log('Student enrollment finished.');
  }
}

// Usage example
addNewStudent();



