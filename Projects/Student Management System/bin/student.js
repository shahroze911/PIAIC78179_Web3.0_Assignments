const generatedIDs = new Set();
class Student {
    name = "";
    studentID = 0;
    address = "";
    balance = 0;
    enrolled = "";
    password = 0;
    constructor(name, id, address, enrolled, password) {
        this.name = name;
        this.studentID = id;
        this.address = address;
        this.balance = 0;
        this.enrolled = enrolled;
        this.password = password;
    }
}
export default Student;
