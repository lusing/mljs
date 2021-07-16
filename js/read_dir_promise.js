const fs = require('fs/promises');
const _ = require('lodash');

function isType(filename, file_types){
    for (const filetype of file_types){
        if(_.endsWith(filename,filetype)){
            return true;
        }
    }
}

async function walk_dir(path) {
    try {
        const dir = await fs.opendir(path);
        for await (const dirent of dir) {
            if(dirent.isDirectory()){
                //console.log("dir:"+path+'/'+dirent.name);
                await walk_dir(path+'/'+dirent.name);
            }else if(dirent.isFile()){
                if(isType(dirent.name,['.js','.css','.jsx'])){
                    const str1 = 'cat '+path+'/'+dirent.name + ' >> bundle.js'+"\n";
                    await fs.appendFile('file.sh',str1);
                }
            }
        }
    } catch (err) {
        console.error(err);
    }
}

fs.appendFile('file.sh','rm -rf bundle.js\n');
walk_dir(".");
