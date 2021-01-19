// Your code here
function mapToNegativize(arr) {
    let workingArr = []
    arr.forEach(element => {
        workingArr.push(element * -1)
    });
    return workingArr
}

function mapToNoChange(arr) {
    let workingArr = []
    arr.forEach(element => {
        workingArr.push(element)
    });
    return workingArr
}

function mapToDouble(arr){
    let workingArr = []
    arr.forEach(element => {
    workingArr.push(element * 2)
    });
    return workingArr
}

function mapToSquare(arr){
    let workingArr = []
    arr.forEach(element => {
        workingArr.push(element ** 2)
    });
    return workingArr
}

function reduceToTotal(arr, start = 0){
    arr.forEach(element => {
        start = start + element
    });
    return start
}

function reduceToAllTrue(arr){
    let bool = true
    arr.forEach(element => {
        bool = bool && !!element
    })
    return bool
}

function reduceToAnyTrue(arr){
    let bool = false 
    arr.forEach(element => {
        if (!bool) {
            bool = element || bool
        }
    })
    return bool
}