const p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('first promise')
        resolve();
    },10000)
})

p1.then();

// const p2 = new Promise((resolve,reject) => {

// })

// const handlePromise = () => {

// }