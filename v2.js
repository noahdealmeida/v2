console.log('hi Noah')


lele.onclick=function(){
    if(lala.style.color=='green'){
        lala.style.color='red'
    }else{
        lala.style.color='green'
    }
}

// adding numbers

//answer.textContent=Number(n1.value)+Number(n2.value)

n1.onkeyup=n2.onkeyup=function(){
   answer.textContent=Number(n1.value)+Number(n2.value) 
}