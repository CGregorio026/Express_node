var fs = require('fs');

const fetch = require('node-fetch');

var promise = new Promise(function(resolve, reject) {
    // do a thing, possibly async, then…
  
    if (resolve) {
      resolve("Stuff worked!");
    }
    else {
      reject(Error("It broke"));
    }
  });


  promise.then(function(result) {
    console.log(result); // "Stuff worked!"
  }, function(err) {
    console.log(err); // Error: "It broke"
  })


fetch('https://reqres.in/api/unknown')
    .then(function(response){
    return response.json();
    })
    .then(function(json){
     console.log(json);
     fs.writeFile('data2.json', JSON.stringify(json), function(err) {
        if (err) {
            console.log(err);
        }
     });
    });


