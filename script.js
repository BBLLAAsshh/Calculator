document.querySelector(".knopki").onclick=(e)=>{
    let input= document.querySelector("#result")
    let target=e.target
    let value=''
    let operators=["+","-","*","/","."]
   if(target.classList.contains("number")){
   value=target.innerHTML
   if(input.value==="0"){
    input.value=value
   }
   else{
    input.value+=value
   }

   }
   else if(target.classList.contains("operator")){
      let ex=input.value
      let last=ex[ex.length-1]
    value=target.innerHTML
    if(operators.indexOf(last) != -1){
      console.log(last)
      ex=ex.replace(/.$/,value)
      input.value=ex
    } else{
      input.value+=value

    }
   }
   else if(target.classList.contains("calculate")){
let result=input.value
input.value=eval(result)
   }
   else if(target.classList.contains("clear1")){
    let result=input.value
    result=result.substring(0,result.length-1)
    input.value=result
       }
       else if(target.classList.contains("clear")){
        let result=input.value
        input.value=""
           }
}
