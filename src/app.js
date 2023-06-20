
let numOfEmployees=3;
const employees=[];
const companyName="Idigicloud.com"
const fnames=['Amit','Aditya','Preeti','Pramod','Name5','Name6','Name7']
const lnames=['Kumbhar','Gangdhar','Wani','Lname4','LName5','LName6','LName7']

function Employee(i){
    this.employeeId= i+1;
    this.firstName=fnames[i];
    this.lastName=lnames[i];
    this.email=this.firstName + "." +this.lastName+ "@" + companyName;
}


function printHello()
{
    for (let i = 0; i < numOfEmployees; i++) {
       console.log(employees[i]);
        
    }
}
for (let i = 0; i < numOfEmployees; i++) {
    const emp=new Employee(i);
    employees.push(emp);
    
}
const newBtn=document.getElementById('but1');
newBtn.addEventListener("click",printHello);