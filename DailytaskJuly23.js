let student = {
    name: "Naga Rohith Reddy",
    age:22,
    address:{
        street:"Jp colony",
        city: "Patancheru"
    }
};

//with spread operator
let student_shallow = {...student}
student_shallow.name = 'Ram'

//with assign operator
let obj_assign = Object.assign({},student)
obj_assign.name = 'Rohit'
obj_assign.address.city = 'Hyderabad'
console.log('orginal object',student);
console.log('shallow_object',student_shallow);
console.log('Assign operator',obj_assign);

//deep copy example
let captains = {
    name:'Rohit Sharma',
    age:'36',
    nationality:'Indian',
    World_cups_won:{
        ODI_Worldcup:true,
        T20_Worldcup:true,
        Test_Championship:false
    }
}

let deep_copy = JSON.parse(JSON.stringify(captains))
deep_copy.name = 'Pat Cummins'
deep_copy.age = '33'
deep_copy.nationality = 'Australia'
deep_copy.World_cups_won.Test_Championship=true
console.log('orginal object', captains);
console.log('deep copy',deep_copy);

//adding two arrays using spread operator

let array1 = [1,2,3];
let array2 = [4,5,6];

let combinedArray = [...array1,...array2];
console.log("Combined Array:", combinedArray);

//adding two objects using Spread operator

let object1 = {
    name: "Rohit sharma",
    age:36,
};

let object2 = {
    City:"Mumbai",
    Profession:"Cricketer",
};

let combinedObject = {
    ...object1,
    ...object2,
};

console.log("Combined Object:",combinedObject);

//Rest operator

function sum(...numbers){
    return numbers.reduce((total,num)=> total + num, 0);
}

console.log(sum(10,20,30,40));

let arr = ['Ram','sham','krishna','sai','rohit']
let [firstelement,secondelement,...remainingelements] = arr;
console.log(firstelement,secondelement,remainingelements);