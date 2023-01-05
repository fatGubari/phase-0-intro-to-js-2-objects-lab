// Write your solution in this file!
let employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
}

updateEmployeeWithKeyAndValue(employee ,"streetAddress" ,"12 Broadway")
function updateEmployeeWithKeyAndValue(obj,key,value){
    let newEmployee = {...obj}
    newEmployee[key]= value
    // obj[key] = value
    return newEmployee;
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway")
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value
    return obj
}

deleteFromEmployeeByKey(employee,"name")
function deleteFromEmployeeByKey(employee, key){
   let newEmployee = {...employee}
   delete newEmployee[key]
   return newEmployee
}

destructivelyDeleteFromEmployeeByKey(employee, "name")
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee
}