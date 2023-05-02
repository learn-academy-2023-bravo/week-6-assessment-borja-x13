const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]


//   const sentenceBuilder = (array) => {
//     // no way this works as a single line 
//     return array.map((value) => value.name.split(' ').map((name) => name = (name[0].toUpperCase().concat(name.slice(1))).join(' ')) + `is ${value.occupation}.`)
//   }

// const sentenceBuilder = (array) => {
//     // no way this works as a single line 
//     return array.map((value) => value.name.split(' ').map((name) => name = (name[0].toUpperCase().concat(name.slice(1)).join(' '))) + `is ${value.occupation}.`)
//   }

// const sentenceBuilder = (array) => {
//     // no way this works as a single line 
//     return array.map((value) => value.name.split(' ').map((name) => name = (name.charAt(0).toUpperCase().concat(name.slice(1)).join(' '))) + `is ${value.occupation}.`)
//   }

// const sentenceBuilder = (array) => {
//     // no way this works as a single line 
//     return array.map((value) => value.name.split(' ').map((name) => name = (name.charAt(0).toUpperCase().concat(name.substring(1)).join(' '))) + `is ${value.occupation}.`)
//   }

const sentenceBuilder = (array) => {
    // no way this works as a single line 
    return array.map((value) => value.name.split(' ').map((name) => name = (name.charAt(0).toUpperCase()).concat(name.substring(1))).join(' ') + ` is ${value.occupation}.`)
  }

  console.log(sentenceBuilder(people))