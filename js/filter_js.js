const fs = require('fs');
const _ = require('lodash');

function isType(filename, file_types){
    for (const filetype of file_types){
        if(_.endsWith(filename,filetype)){
            return true;
        }
    }
}

function walk_dir(path) {
    try {
        const dir = fs.readdirSync(path);
        for(const dirent of dir) {
            if(dirent.isDirectory()){
                //console.log("dir:"+path+'/'+dirent.name);
                walk_dir(path+'/'+dirent.name);
            }else if(dirent.isFile()){
                if(isType(dirent.name,['.js','.css','.jsx'])){
                    const str1 = 'cat '+path+'/'+dirent.name + ' >> bundle.js'+"\n";
                    fs.appendFileSync('file.sh',str1);
                }
            }
        }
    } catch (err) {
        console.error(err);
    }
}

fs.appendFileSync('file.sh','rm -rf bundle.js\n');
walk_dir(".");