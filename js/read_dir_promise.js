const fs = require('fs/promises');
const _ = require('lodash');

async function walk_dir(path) {
    try {
        const dir = await fs.opendir(path);
        for await (const dirent of dir) {
            if(dirent.isDirectory()){
                //console.log("dir:"+path+'/'+dirent.name);
                await walk_dir(path+'/'+dirent.name);
            }else if(dirent.isFile()){
                if(_.endsWith(dirent.name,'.js')){
                    const str1 = 'cat '+path+'/'+dirent.name + ' >> bundle.js'+"\n";
                    await fs.appendFile('file.sh',str1);
                }
            }
        }
    } catch (err) {
        console.error(err);
    }
}

walk_dir(".");
