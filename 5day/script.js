// let arr = [1,2,3,9,10];
// let ans = [];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>5){
//         ans.push(arr[i]);
//     }
// }
// console.log(ans);



//// closure

function count(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
}

const c = count();
c();
c();
