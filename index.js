const MyPromise = require('./MyPromise')
let promise1 = new MyPromise((resolve,reject)=>{
  resolve('promise1')
    // reject('error')
  // throw new Error('Exception Error')
})

let promise2  = promise1.then(value=>{
  return new MyPromise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(new MyPromise((resolve,reject)=>{
        resolve('3213123')
      }))
    },2000)
  })
},err=>err) 


promise2.then(value=>{
  throw new Error('32312')
  // console.log(value,'3123')
},(reason)=>{console.log(reason)}).catch(err=>{
  console.log(err)
})




