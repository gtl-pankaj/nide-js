let a=20;
let b=30;
const result = new Promise((resolve,reject) => {
resolve(880);
});
result.then((data) => {
    console.log(a+data);
});
