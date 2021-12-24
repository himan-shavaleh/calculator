const allBtns= document.querySelectorAll('button');
let result = document.querySelector('input');
const calc = document.querySelector('.calc-body');
calc.addEventListener('click',function(e){
    if(e.target.classList.contains('oper')){
        result.value+= (e.target.innerHTML.replace(/\s+/g,''));
}
});
document.querySelector('.equal').addEventListener('click',function(){
    try{
        
    result.value = eval(result.value);
    
    }catch(err){
        alert('insert valid input')
    }
});
document.querySelector('.clear').addEventListener('click',function(){
    result.value ='';
});
document.querySelector('.del').addEventListener('click',function(){
    result.value = result.value.slice(0,-1);
})
// const calculate = (x)=>{
//     result.value+=x;
// }



