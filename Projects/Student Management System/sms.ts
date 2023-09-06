import inquirer from 'inquirer';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

// Interface to represent a Course
interface Course {
  courseId: string;
  courseName: string;
  courseCredits: number;
}

// Class to represent a Student
class Student {
  private readonly studentId: string;
  private name: string;
  private coursesEnrolled: Course[];
  private balance: number;

  constructor(name: string) {
    this.studentId = uuidv4().substr(0, 5); // Generate a unique 5-digit student ID
    this.name = name;
    this.coursesEnrolled = [];
    this.balance = 0.0;
  }

  enrollCourse(course: Course) {
    // Add the course to the list of enrolled courses
    this.coursesEnrolled.push(course);
  }

  payTuition(amount: number) {
    // Add the payment to the balance
    this.balance += amount;
  }

  viewBalance() {
    // View the current balance
    console.log('Student ID:', this.studentId);
    console.log('Name:', this.name);
    console.log('Balance:', this.balance);
  }

  toJSON() {
    // Convert student data to JSON format
    return {
      studentId: this.studentId,
      name: this.name,
      coursesEnrolled: this.coursesEnrolled,
      balance: this.balance,
    };
  }
}

// Create a list of available courses
const availableCourses: Course[] = [
  { courseId: uuidv4().substr(0, 5), courseName: 'Mathematics', courseCredits: 3 },
  { courseId: uuidv4().substr(0, 5), courseName: 'History', courseCredits: 4 },
  { courseId: uuidv4().substr(0, 5), courseName: 'Computer Science', courseCredits: 5 },
];

// Function to add a new student
async function addNewStudent() {
  const studentNamePrompt = await inquirer.prompt([
    {
      type: 'input',
      name: 'studentName',
      message: 'Enter student name:',
      validate: (value) => (value ? true : 'Student name is required.'),
    },
  ]);

  const coursesToAdd: Course[] = [];

  while (true) {
    const courseChoicePrompt = await inquirer.prompt([
      {
        type: 'checkbox',
        name: 'selectedCourseNames',
        message: 'Select courses to enroll (or press "Enter" to finish enrollment):',
        choices: [...availableCourses.map((course) => course.courseName)],
      },
    ]);

    const selectedCourses: string[] = courseChoicePrompt.selectedCourseNames;

    if (selectedCourses.length === 0) {
      console.log('No courses selected. Student enrollment finished.');
      break; // Finish enrollment when no courses are selected
    }

    selectedCourses.forEach((selectedCourseName: string) => {
      const selectedCourse = availableCourses.find(
        (course) => course.courseName === selectedCourseName
      );

      if (selectedCourse) {
        coursesToAdd.push(selectedCourse);
      } else {
        console.log(`Invalid course selection: ${selectedCourseName}`);
      }
    });
  }

  const newStudent = new Student(studentNamePrompt.studentName);
  coursesToAdd.forEach((course) => newStudent.enrollCourse(course));

  console.log('Student enrollment successful. Student Details:');
  //newStudent.showStatus();

  // Ask the user if they want to pay tuition fees
  const payTuitionPrompt = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'payTuition',
      message: 'Do you want to pay tuition fees for this student?',
    },
  ]);

  if (payTuitionPrompt.payTuition) {
    const tuitionAmountPrompt = await inquirer.prompt([
      {
        type: 'number',
        name: 'tuitionAmount',
        message: 'Enter the tuition fee amount:',
      },
    ]);

    const tuitionAmount = tuitionAmountPrompt.tuitionAmount;
    newStudent.payTuition(tuitionAmount);
    console.log('Tuition fee payment successful.');
    newStudent.viewBalance();
  }

  // Save student data to a JSON file (append mode)
  const studentData = newStudent.toJSON();
  const fileName = 'student_data.json';

  if (fs.existsSync(fileName)) {
    // If the file exists, read its content and append the new student data
    const existingData = JSON.parse(fs.readFileSync(fileName, 'utf-8'));
    existingData.push(studentData);
    fs.writeFileSync(fileName, JSON.stringify(existingData, null, 2));
  } else {
    // If the file does not exist, create a new file with the student data
    fs.writeFileSync(fileName, JSON.stringify([studentData], null, 2));
  }

  console.log(`Student data saved to ${fileName}.`);
}

// Function to display student data from the file
function displayStudentData() {
  const fileName = 'student_data.json';

  if (fs.existsSync(fileName)) {
    // If the file exists, read and display the student data
    const studentData = JSON.parse(fs.readFileSync(fileName, 'utf-8'));
    if (studentData.length === 0) {
      console.log('No student data found in the file.');
    } else {
      console.log('Student Data:');
      studentData.forEach((student: any, index: number) => {
        console.log(`Student ${index + 1}:`);
        console.log('Student ID:', student.studentId);
        console.log('Name:', student.name);
        console.log('Enrolled Courses:');
        student.coursesEnrolled.forEach((course: any) => {
          console.log(`- ${course.courseName} (Credits: ${course.courseCredits})`);
        });
        console.log('Balance:', student.balance);
        console.log('-----------------------');
      });
    }
  } else {
    console.log('Student data file does not exist.');
  }
}

// Function to display the dashboard
async function dashboard() {
  while (true) {
    const choice = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'Dashboard - Choose an action:',
        choices: ['Add New Student', 'Display Student Data', 'Exit'],
      },
    ]);

    switch (choice.action) {
      case 'Add New Student':
        await addNewStudent();
        break;
      case 'Display Student Data':
        displayStudentData();
        break;
      case 'Exit':
        console.log('Exiting the dashboard.');
        process.exit(0);
        break;
    }
  }
}

// Start the dashboard
dashboard();
