const myPromiseFunction = (param) => {
    return new Promise((resolve, reject) => {
        if (param === 'success') {
            resolve('success');
        } else {
            reject('error');
        }
    });
}


myPromiseFunction("success")
.then((re)=>{
    console.log(re);
})
.catch((re)=>{
    console.log(re);
})