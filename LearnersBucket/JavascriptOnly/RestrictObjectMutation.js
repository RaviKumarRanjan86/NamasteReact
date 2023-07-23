const obj = {
    a:10,
    b: {
        c:20,
        d:30,
    }
}

function changeObj(obj){
    obj.a=20
}

changeObj(obj)
console.log('In this case obj value will get updated as you are calling function changeObj', obj);

// if I do not want to change the obj value
// and still want to use it in changeObj
function changeAnotherObj(obj){
    obj.a=30
    obj.b.c= 100
}

changeAnotherObj({...obj})
console.log('Here a value wont get updated but c will', obj)


//  Using object.seal(obj), you can update 
//  the value of the already
//  present obj, but you can't 
//  delete or update it till single level

Object.seal(obj);
obj.a = 30;
delete obj.a;
delete obj.b.c;
console.log('after sealing,deleting and updating value',obj);

// In case if we don't want
// to allow any CRUD operations 
// on the values than
// we can use Object.freeze(obj)

Object.freeze(obj);
obj.a =40;
obj.b.d = 70;
console.log('after freezing object ', obj);

// Seal and Freeze both gets 
// applied only till one level
// in case we want it recursively
deepFreeze(obj)
obj.b.d = 90;
console.log('After deepSealing obj wont be updated', obj);

function deepFreeze(obj){
    for(let key in obj){
        const val = obj[key];
        if(typeof(val) == 'object'){
            deepFreeze(val);
        }
    }
    return Object.freeze(obj);
}






