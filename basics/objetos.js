// Objetos en javascript 
/*
objeto ={
    key:value,
    key:value
}
objeto.key
objeto['Key']
*/

const subject ={
    name:'Aplicaciones Web',
    cuatri:3,
    professor: 'Francisco',
    'classroom': 'Lab Redes I',
    'total hours ':70,
    weekHours:5
}

console.log(subject);
console.log(subject.name);
console.log(subject.professor);
console.log(subject['classroom']);
console.log(subject['total hours ']);

subject.professor=' Francisco Lopez';
subject.career='TIADSM';
console.log(subject);

const student ={
    name:'Laura Alicia',
    age:21,
    califications:[10,10,8],
    city:'Apizaco'
}

const group ={
    name:'4B',
    students:[student,student,student],
    subjects: [subject,subject,subject]
}

console.log(group);
console.log(group.subjects[0].professor);
console.log(group.students[1].califications);
console.log(group.students[1].califications[0]);