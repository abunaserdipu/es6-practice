class student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.college = "Dhaka College";
    }
}

const student1 = new student(11, "Abu Naser");
const student2 = new student(43, "Ikramul Islam");
const student3 = new student(79, "Shoaib");
console.log(student1, student2, student3);