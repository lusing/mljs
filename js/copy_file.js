const fs = require('fs/promises');
const _ = require('lodash');


async function copy_file(fileName, outputFile){
    try {
        const controller = new AbortController();
        const { signal } = controller;
        const promise = fs.readFile(fileName, { signal });
        await fs.appendFile(outputFile,(await promise).toString());
        console.log(promise);
    } catch (err) {
        // 当请求中止时 - err 是 AbortError
        console.error(err);
    }
}

copy_file("./2.html","output");