const obj = {
    a: {
        b: {
            c: [1, 2, 3]
        }
    },
    d: {
        e: "hello"
    }
}
const get = (obj, stringPath) => {
    if (!stringPath || stringPath.length == 0) {
        return undefined;
    }
    const exclude = ['[', ']', '.']
    let path = [];
    for (let key of stringPath) {
        if (!exclude.includes(key)) {
            path.push(key)
        }
    }
    console.log("🚀 ~ file: GetObjectValueFromStringPath.js:20 ~ get ~ path:", path)
    const val = path.reduce((obj, key) => obj[key], obj)
    return val;
}

// console.log(get(obj, 'a.b.c')); 
// console.log(get(obj, 'a.b.c.0')); 
// console.log(get(obj, 'a.b.c[1]')); 
// console.log(get(obj, ['a', 'b', 'c', '2']));
// console.log(get(obj, 'a.b.c[3]'));
// console.log(get(obj, 'a.c'));
console.log(get(obj, 'd.e')); 
