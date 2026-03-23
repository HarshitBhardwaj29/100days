let count = 0;

const countElement = document.getElementById('count');
const incrementButton = document.getElementById('increase');
const decrementButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset');

const updateCount= (val)=>{
    count+=val;
    if(count<0){
        count=0;
    }
    countElement.innerText = count;
}
incrementButton.addEventListener('click',()=>{
    updateCount(1);
})
decrementButton.addEventListener('click',()=>{
    updateCount(-1);

})
resetButton.addEventListener('click',()=>{
    count=0;
    countElement.innerText = count;
})