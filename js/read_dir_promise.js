const fs = require('fs/promises');
const _ = require('lodash');
const path = require('path');

function isType(filename, file_types){
    for (const filetype of file_types){
        if(_.endsWith(filename,filetype)){
            return true;
        }
    }
}

async function copy_file(fileName, outputFile){
    try {
        const controller = new AbortController();
        const { signal } = controller;
        const promise = fs.readFile(fileName, { signal });
        await fs.appendFile(outputFile,(await promise).toString());
        //console.log(promise);
    } catch (err) {
        // 当请求中止时 - err 是 AbortError
        console.error(err);
    }
}

async function walk_dir(path2) {
    try {
        const dir = await fs.opendir(path2);
        for await (const dirent of dir) {
            if(dirent.isDirectory()){
                //console.log("dir:"+path+'/'+dirent.name);
                await walk_dir(path.join(path2,dirent.name));
            }else if(dirent.isFile()){
                if(isType(dirent.name,['.js','.css','.jsx'])){
                    let file_name = path.join(path2,dirent.name);
                    await copy_file(file_name,"bundle.xjs");
                    //const str1 = 'cat '+path2+'/'+dirent.name + ' >> bundle.js'+"\n";
                    console.log(file_name+' had written to bundle.xjs');
                    //await fs.appendFile('file.sh',str1);
                }
            }
        }
    } catch (err) {
        console.error(err);
    }
}

//fs.appendFile('file.sh','rm -rf bundle.js\n');
walk_dir(".");
