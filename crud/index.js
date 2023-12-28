const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, "operations");
const filepath = `${dirPath}/newfile.txt`;

//create a new file.
fs.writeFileSync(filepath,"This is my new TXT file");

//read the content of the file
//fs.readFile(filepath,'utf8', (err,content) => {
//console.log(content);
//});

//Update the file
//fs.appendFile(filePath,"The name of the file is new file and "'(err,content) => {
 //   if(!err) {
  //      console.log("File updated Successfully");
  //  }
//}
//)