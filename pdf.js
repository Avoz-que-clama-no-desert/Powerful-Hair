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


var nomepro1 = document.querySelector(".nomepro1")
var pre1 = document.querySelector(".precopro1")
var quant1 = document.querySelector(".unidpro1")

var nomepro2 = document.querySelector(".nomepro2")
var pre2 = document.querySelector(".precopro2")
var quant2 = document.querySelector(".unidpro2")








var cont = 0

btn1.addEventListener("click",()=>{
    const select = document.getElementById("selec");
  const valor = select.options[select.selectedIndex].value;
  
 var unid = document.querySelector(".unidade").value
 cont++
 var soma = ""
// adicionar produtos
if (cont==1) {
  nomepro1.textContent=produto[valor]
  quant1.textContent=unid
   pre1.textContent=preco[valor]+",00"
  v1.textContent=preco[valor]*unid+",00"
   vtal.textContent=v1.textContent
  
}
if (cont==2) {
  nomepro2.textContent=produto[valor]
  quant2.textContent=unid
   pre2.textContent=preco[valor]+",00"
  v2.textContent=preco[valor]*unid+",00"
  
  vtal.textContent=parseInt(v2.textContent)+parseInt(v1.textContent)+",00"
  cont=0
}
 

//*********************** */
select.selectedIndex = "";
document.querySelector(".unidade").value=""
 
  

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
 
    
     window.print()
})
