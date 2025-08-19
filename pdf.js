import { produto } from "./produtos.js"
import { preco } from "./produtos.js"




var btn = document.querySelector(".btn")
var btn1 = document.querySelector(".btn1")
var v1 = document.querySelector(".v1")
var v2 = document.querySelector(".v2")
var v3 = document.querySelector(".v3")
var v4 = document.querySelector(".v4")
var v5 = document.querySelector(".v5")
var vtal = document.querySelector(".vtal")
document.querySelector(".num").textContent="Documento"+" Nº  "+ Math.random()*1000










var cont = 0

btn1.addEventListener("click",()=>{
    const select = document.getElementById("selec");
  const valor = select.options[select.selectedIndex].value;
  
 var unid = document.querySelector(".unidade").value
 cont++
 var soma = ""
 alert(preco[valor]*unid)
select.selectedIndex = "";
document.querySelector(".unidade").value=""
  //window.print()
  

})
  







btn.addEventListener("click",(evt)=>{
  
    document.querySelector(".client").textContent=document.querySelector(".nome").value
   document.querySelector(".pesq").style.display="none"
  
    document.querySelector(".btn").style.display="none"
    var display = setInterval(() => {
        document.querySelector(".btn").style.display="block"
        document.querySelector(".pesq").style.display="block"
        document.querySelector(".nome").value=""
        document.querySelector(".client").textContent=""
        clearInterval(display)
    }, 3000);

     
})