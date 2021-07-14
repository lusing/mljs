const fs = require("fs")
const path = require("path")

let root = path.join("./");

console.log(root);

readDirSync(root);

function readDirSync(path){
    let pa = fs.readdirSync(path);
    pa.forEach(function(ele,index){
        let info = fs.statSync(path+"/"+ele)
        if(info.isDirectory()){
            console.log("dir: "+ele)
            readDirSync(path+"/"+ele);
        }else{
            console.log("file: "+ele)
        }
    })
}
