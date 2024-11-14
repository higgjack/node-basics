console.log("hi")
console.log(process.env)
console.log(process.env.MY_ENV_VARIABLE)

var figlet = require("figlet");


figlet("Hello CS290", function (err, data) {
  if (!err) {
    console.log(data);
  }
  
});

var fs = require("fs")
fs.readFile("hello.js",function(err,data){
    if (!err){
        console.log("==file contents:",data.toString())
    }
})
console.log("after")
