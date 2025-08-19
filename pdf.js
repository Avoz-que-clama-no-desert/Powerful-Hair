import { produto } from "./produtos.js"
import { preco } from "./produtos.js"

var data = new Date()
var dia = data.getDate()
var m = data.getMonth()
var ano = data.getFullYear()

var mes=m+1
var nemes=[
  "",
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",

]


var btn = document.querySelector(".btn")
var btn1 = document.querySelector(".btn1")
var v1 = document.querySelector(".v1")
var v2 = document.querySelector(".v2")
var v3 = document.querySelector(".v3")
var v4 = document.querySelector(".v4")
var v5 = document.querySelector(".v5")
var vtal = document.querySelector(".vtal")
document.querySelector(".num").textContent="Documento"+" Nº  "+ Math.random()*1000
document.querySelector(".dat").textContent="Criado pela primeira vez:"+dia+"/"+nemes[mes]+"/"+ano
document.querySelector(".venci").textContent="Data de vencmento:"+dia+"/"+nemes[mes]+"/"+ano


var nomepro1 = document.querySelector(".nomepro1")
var pre1 = document.querySelector(".precopro1")
var quant1 = document.querySelector(".unidpro1")

var nomepro2 = document.querySelector(".nomepro2")
var pre2 = document.querySelector(".precopro2")
var quant2 = document.querySelector(".unidpro2")

var nomepro3 = document.querySelector(".nomepro3")
var pre3 = document.querySelector(".precopro3")
var quant3 = document.querySelector(".unidpro3")

var nomepro4 = document.querySelector(".nomepro4")
var pre4 = document.querySelector(".precopro4")
var quant4 = document.querySelector(".unidpro4")

var nomepro5 = document.querySelector(".nomepro5")
var pre5 = document.querySelector(".precopro5")
var quant5 = document.querySelector(".unidpro5")








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
  
}
if (cont==3) {
  nomepro3.textContent=produto[valor]
  quant3.textContent=unid
   pre3.textContent=preco[valor]+",00"
  v3.textContent=preco[valor]*unid+",00"
  
  vtal.textContent=parseInt(v2.textContent)+parseInt(v1.textContent)+parseInt(v3.textContent)+ ",00"
  
}
 
if (cont==4) {
  nomepro4.textContent=produto[valor]
  quant4.textContent=unid
   pre4.textContent=preco[valor]+",00"
  v4.textContent=preco[valor]*unid+",00"
  
  vtal.textContent=parseInt(v2.textContent)+parseInt(v1.textContent)+parseInt(v3.textContent)+parseInt(v4.textContent) +",00"
  
}
if (cont==5) {
  nomepro5.textContent=produto[valor]
  quant5.textContent=unid
   pre5.textContent=preco[valor]+",00"
  v5.textContent=preco[valor]*unid+",00"
  
  vtal.textContent=parseInt(v2.textContent)+parseInt(v1.textContent)+parseInt(v3.textContent)+parseInt(v4.textContent)+parseInt(v5.textContent)+",00"
  cont=0
}

//*********************** */
select.selectedIndex = "";
document.querySelector(".unidade").value=""
 
  

})
  







btn.addEventListener("click",(evt)=>{
    document.title="Cliente;"+document.querySelector(".nome").value
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
