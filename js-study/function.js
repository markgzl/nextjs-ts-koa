// foo(10)
// function foo (num) {
//     var foo
//     console.log(foo)
//     foo = num;       
//     console.log(foo)
    
// } 
// console.log(foo)
// foo = 1
// console.log(foo)

// function numGenerator() {
//     let num = 1
//     num++
//     return () => {
//         console.log(num)
//     } 
// }

// var getNum = numGenerator()
// getNum()

var array = []
function createNodes() {
    let div
    let i = 100
    let frag = document.createDocumentFragment()
    for (; i > 0; i--) {
        div = document.createElement("div")
        div.appendChild(document.createTextNode(i))
        frag.appendChild(div)
    }
    document.body.appendChild(frag)
}
function badCode() { 
    // array.push([...Array(100000).keys()])
    // createNodes()
    // setTimeout(badCode, 1000)
}

badCode()