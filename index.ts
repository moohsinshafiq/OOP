import inquirer from "inquirer"

class Student {
    name:string
    constructor(n:string){
        this.name=n
    }
}

class Person {
    students: Student[]=[]
    addStudent(obj:Student){
        this.students.push(obj)
    }
}


const persons = new Person()
const programStart = async (persons: Person)=>{
    console.log("Welcome")
    const ans = await inquirer.prompt({
        type:"list",
        message:"Who do you want to talk?",
        name:"selcet",
        choices:["Self", "Student"],
    });

    if(ans.selcet == "Self"){
        console.log("Hello, I am talking to myself")
        console.log("I am good")
    }
    if(ans.selcet == "Student"){
        const ans = await inquirer.prompt({
            type: "input",
            message: "Which student you wanna talk?",
            name:"student",
        });

        const student = persons.students.find(val => val.name == ans.student)
        if(!student){
            const name = new Student(ans.student)
            persons.addStudent(name)
            console.log(`Hello, I am ${name.name}, I am fine`);
            console.log(persons.students);
        }

        if(student){
            console.log(`Hello, I am ${student.name}, I am fine`);
            console.log(persons.students);
        }
    }
}

programStart(persons)


