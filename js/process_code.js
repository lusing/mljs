const fs = require("fs");
const path = require("path");
const _ = require('lodash');

function isType(filename, file_types){
    for (const filetype of file_types){
        if(_.endsWith(filename,filetype)){
            return true;
        }
    }
}

let root = path.join(".");

console.log(root);

fs.appendFileSync('file.sh','rm -rf bundle.js\n');
readDirSync(root);

function readDirSync(path2){
    let pa = fs.readdirSync(path2);
    pa.forEach(function(ele,index){
        let info = fs.statSync(path2+"/"+ele);
        if(info.isDirectory()){
            //console.log("dir: "+ele);
            //console.log("full dir:"+path+"/"+ele);
            readDirSync(path2+"/"+ele);
        }else if (info.isFile()){
            //console.log(info.name);
            let file_name = path.join(path2, ele);
            if(isType(file_name,['.js','.css','.jsx'])){
                console.log("file: "+file_name);
                //let file_name = path.join(path, info.name);
                //console.log("full dir:"+file_name);
                const str1 = 'cat ' + file_name + ' >> bundle.js'+"\n";
                fs.appendFileSync('file.sh',str1);
            }
        }
    })
}
