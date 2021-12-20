const constant = "Mevs" //variables declared as const cannot be changed

let variable = 5 //basic variable declaration

console.log(variable)

variable += 10

console.log(constant, variable)

variable = "Big Moon Guy" //type of data stored there can change throughout script

const list = [-1, 0, 1] //even though this is a const, contents of list can change
//list is an object so const holds the location of it

//list.push(3.1415)

/**
DO NOT USE PUSH IN REACT CODE

- React follows functional programming techniques
- This tends toward using immutable data structures

USE concat() instead
concat() returns a new list with the data to be added to the list instead of modifying the original one
*/
list.concat(3.1415)


console.log(list.length)
console.log(list[0])
list[0] = -2

list.forEach(value => {
  console.log(value)
})

const list2 = [1,2,3]

/**
map takes a function as a parameter and produces a new resulting list
with the function applied to every element of the list on which it was invoked
*/
const dub_res = list2.map(value => value * 2)
console.log(dub_res)

//map can reformat original lists

const li_list2 = list2.map(value => '<li>' + value + '</li>')
console.log(li_list2)

//DESTRUCTIVE PLACEMENT STATEMENT

const t = [1,2,3,4,5]
const [first, second, ...rest] = t
console.log(first, second)
console.log(rest)

const object1 = {
  name: 'Arto Hellas',
  age: 35,
  education: 'Filosofian tohtori',
}

const object12 = {
  name: 'Full Stack -websovelluskehitys',
  level: 'aineopinto',
  size: 5,
}

const object3 = {
  name: {
    first: 'Juha',
    last: 'Tauriainen',
  },
  grades: [2, 3, 5, 3],
  department: 'TKTL',
}

console.log(object1.name)
const fieldName = 'age' //assign variable to access field within object
console.log(object1[fieldName])
//looks like you can't do the ".<fieldName>" notation with field names not explicitly defined in the object

//this also goes with adding field names on the fly. the secret number could not be added using do notation because there is no secret number defined in the object
object1['secretNumber'] = 42069

//ARROW FUNCTIONS
const sum = (n1, n2) => {
  console.log(n1)
  console.log(n2)
  return n1 + n2
}

const sum_result = sum(420, 69)
console.log(sum_result)

//single parameter functions do not require parentheses
const square = p => {
  console.log(p)
  return p * p
}
console.log(square(420))

//if a function only has one expression, no brackets are needed
const cube = p => p * p * p
console.log(cube(3))

//Single line function definition comes in handy when mapping across lists

const square_list = [1,2,3,4,5]
const square_list_result = square_list.map(val => val * val)
