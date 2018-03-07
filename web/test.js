let obj = {
    a: 1
}

let obj2 = {
    c: 10
}

let dealObj = (obj) => {
    obj.b = 10
    // return obj
}

let dealObj2 = (obj) => {
    obj = {
        d: 15
    }
}

dealObj(obj)
dealObj2(obj2)
console.log(obj2)
console.log(obj)