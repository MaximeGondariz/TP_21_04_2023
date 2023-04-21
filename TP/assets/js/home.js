const students = [
    { name : "Sonia", birth : "2019-14-05"},
    { name : "Antoine", birth : "2000-12-05"},
    { name : "Alice", birth : "1990-14-09"},
    { name : "Sophie", birth : "2001-10-02"},
    { name : "Bernard", birth : "1980-21-08"}
];
let id = 0
students.forEach(student => {
    document.getElementById("listeStudents").innerHTML += '<div id="student'+id+'" class="divStudents">'+student.name+' / '+recreateDate(student.birth)+'<button onclick="deleteStudent('+id+')">X</button></div>'
    id++
})

function deleteStudent(index){
    const div = document.getElementById("listeStudents");
    for(let i = 0; i<div.children.length;i++){
        if(div.children[i].id === "student"+index){
            div.removeChild(div.children[i])
        }
    }
}

function addStudent(){
    const name = document.getElementById("nameInput").value;
    const date = document.getElementById("dateInput").value;

    document.getElementById("nameInput").classList.remove("redOutline")
    document.getElementById("dateInput").classList.remove("redOutline")

    if(name && date){
        document.getElementById("listeStudents").innerHTML += '<div id="student'+id+'" class="divStudents">'+name+' / '+recreateDate(date)+'<button onclick="deleteStudent('+id+')">X</button></div>'
        id++
    }else{
        if(!name){
            document.getElementById("nameInput").classList.add("redOutline")
        }
        if(!date){
            document.getElementById("dateInput").classList.add("redOutline")
        }
    }
}

function recreateDate(date){
    const splitedDate = date.split("-")
    const frDate = []

    frDate.push(splitedDate[1]);
    frDate.push(splitedDate[2]);
    frDate.push(splitedDate[0]);

    const newDate = frDate.join('/')
    return newDate
}