console.log('=====SOAL 1=====')

//function biasa
// const golden = function goldenFunction(){
//     console.log("this is golden!!")
//   }
   
//   golden()
//arrow function
const golden = () => {
    console.log('this is golden!!');
}

golden();


console.log('\n=====SOAL 2=====')
//ubah menjadi es6
const newFunction = (firstName, lastName) =>{
    return {
      firstName,
      lastName,
      fullName(){
        console.log(`${firstName} ${lastName}`)
        return 
      }
    }
  }
   
  //Driver Code 
  newFunction("William", "Imoh").fullName();


  // no 3
  console.log('\n=====SOAL 3=====')
  const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }
  const {firstName, lastName, destination, occupation} = newObject;

  console.log(firstName, lastName, destination, occupation)

  // no 4
  console.log('\n=====SOAL 4=====')
  // Kombinasikan menggunakan array spreading ES6
  const west = ["Will", "Chris", "Sam", "Holly"]
  const east = ["Gill", "Brian", "Noel", "Maggie"]
  const combined = [...west, ...east]
  //Driver Code
  console.log(combined)

// no 5
console.log('\n=====SOAL 5=====')
// sederhanakan string berikut agar menjadi lebih sederhana menggunakan template literals ES6:
const planet = "earth"
const view = "glass"
var before = `Lorem  ${view} dolor sit amet, consectetur adipiscing elit, ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`
 
// Driver Code
console.log(before) 
