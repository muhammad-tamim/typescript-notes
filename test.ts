function process(x: string | string[]) {
    if (Array.isArray(x)) {
        console.log("Array");
    } else {
        console.log("String");
    }
}

process(['a', 'b']) // Array
process('hello') // String