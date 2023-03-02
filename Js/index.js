
const isName="Xaliq"
const isPassword="777"
let isBalance=100
let isCheck=true


do{
    let name=prompt("Adinizi yazin ")
    let password=prompt("Parolu daxil edin")
    if(isName===name&&password===isPassword){
        isCheck=false
alert("Name:"+name+"\n"+"Balans:"+isBalance)
let event =prompt("Medaxil ucun-1"+"\n"+"Mexaric ucun -2")
let amount=Number(prompt("Miqdari yazin"))
let isStatus=true
while(isStatus){

    if(isNaN(amount)){
        alert("Reqem daxil edin")
        let amount=Number(prompt("Miqdari yazin"))
    }else{
        isStatus=false
        switch(event){
       
            case "1":
                increase(amount)
                break;
             case "2":
                reduce(amount)
                break;
                default:
                    alert("Zehmet olmasa duzgun yazin")
                    
            }
    }
}
    }

    else{
        alert("Melumatlar sehvdir")
    }
    
}while(isCheck)


function increase(a){

isBalance+=a
alert(isBalance)

}
function reduce(b){
if(isBalance<b){
  alert("Balansda kifayet qeder vesait yoxdur")
}else{
    isBalance-=b
    alert(isBalance)
}

}
