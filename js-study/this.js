function f1(){
    console.log(this)
}
function f2(){
    'use strict'
    console.log(this)
}
// f1() // window/global
// f2() // undefined
const foo = {
    bar: 10,
    fn: function (){
        console.log(this)
        console.log(this.bar)
    }
}
// foo.fn()
const fn1 = foo.fn
// fn1()


// const student]
function Foo(){
    this.bar = 'Lucas'
    return 1
    // return {} 构造函数显式的return对象时，返回的是该对象，否则依旧是原实例
} 

let peo = new Foo()
// console.log(peo)

// const foo1 = {
//     fn: function(){
//         setTimeout(function(){
//              //  window
//             console.log(this)
//         })
//     }
// }

// const foo1 = {
//     fn: function(){
//         setTimeout(()=>{
//               //  foo1
//             console.log(this)
//         })
//     }
// }
const foo1 = {
    fn: ()=>{
        setTimeout(()=>{
            // window
            console.log(this)
        })
    }
}
// foo1.fn()

function fa(a){
    this.a = a
}
const objs = {}
let bar = fa.bind(objs)
bar(123)
// console.log(objs)
const bar2 = new bar(234)
// console.log(bar2,objs)


function get(){
    console.log(9999)
    return a => {
        console.log(this.a)
    }
}
const obj1 = { a: 2 }
const obj2 = { a: 3 }
const ba = get.call(obj1)
// console.log(ba.call(obj2))


const lo = () => ()=> {
    console.log(this)
}
lo()()

