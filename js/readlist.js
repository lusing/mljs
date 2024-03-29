/*
import os

f = open('js.list', 'r')

strs = f.readlines()

for str in strs:
if not str.strip():
continue
print(str.strip())
dir_name = os.path.basename(str.strip())
print(dir_name)
dir_name2 = os.path.join(os.getcwd(), dir_name)
print(dir_name2)
if os.path.exists(dir_name2):
os.chdir(dir_name2)
os.system('git pull')
os.chdir("..")
else:
os.system('git clone '+str.strip())*/

const fs = require('fs/promises');
const fs2 = require('fs');
const path = require('path');
const childProcess = require('child_process');
const process = require('process');

const list_file = 'js.list';

function git_pull(){

    for(let i=0;i<10;i++){
        try{
            childProcess.execSync('git pull');
            return;
        }catch(error2){
            console.error(error2);
            continue;
        }
    }
}

async function read_list(){
    const promise1 = fs.readFile(list_file);

    const strs = (await promise1).toString();

    for(let str1 of strs.split('\n')){
        if(str1.trim()!==''){
            const dir_name = path.basename(str1.trim());
            console.log(dir_name);
            const current_dir = process.cwd();
            console.log(current_dir);
            if(fs2.existsSync(dir_name)){
                console.log(dir_name+' existed');
                process.chdir(path.join(current_dir,dir_name));
                git_pull();
                process.chdir(current_dir);
            }
            const cmd = 'git clone '+str1;
            console.log(cmd);
            result2 = childProcess.execSync(cmd);
            console.log(result2.toString());
        }
    }
}

read_list();
