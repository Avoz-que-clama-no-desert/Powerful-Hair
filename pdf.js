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
document.querySelector(".num").textContent= Math.random()*1000
document.querySelector(".dat").textContent=dia+"/"+nemes[mes]+"/"+ano
document.querySelector(".venci").textContent=dia+"/"+nemes[mes]+"/"+ano
mes=mes+1
document.querySelector(".utvz").textContent=1+"/"+nemes[mes]+"/"+ano


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

var valqfalta = document.querySelector(".valqfalta")


const vap = document.querySelector(".vafinal")








var cont = 0
var soma = ""
btn1.addEventListener("click",()=>{
var unid = document.querySelector(".unidade").value
const select = document.getElementById("selec");
  const valor = select.options[select.selectedIndex].value;
  var confericliente = document.querySelector(".nome").value

 if (confericliente=="") {
  alert(" Primeiro coloque o nome do cliente")
 } else {
  if (valor=="") {
  alert("É obrigado selecionar  produto")
}else{
if (unid=="") {
  alert("caixa de unidade estar vazia")
}else{
/*******inicio de comando de conteudo*********** */
if (cont==5) {
  cont=0
  alert("Só pode fazer 5 pedidos querendo cadastra para mais produtos fale com o programador")
  
} else {
/*****aqui confere as 5 pedido*******/  

document.querySelector(".client").textContent="-"+document.querySelector(".nome").value
 cont++
 
// adicionar produtos
if (cont==1) {
 document.querySelector(".compra1").style.display="block" 

  nomepro1.textContent=produto[valor]

  quant1.textContent=unid

   pre1.textContent="R$"+"   "+preco[valor]+",00"

  v1.textContent= "R$"+"   "+preco[valor]*unid+",00"
 
soma=+parseInt(preco[valor]*unid)

vap.textContent="Soma dos serviços/itens    R$"+"     "+soma+",00"
valqfalta.textContent=soma+".00"
  
select.selectedIndex=""
 document.querySelector(".unidade").value=""
  
  
}

if (cont==2) {
    document.querySelector(".compra2").style.display="block"
    document.querySelector(".compra2").style.display="block"
  nomepro2.textContent=produto[valor]
  quant2.textContent=unid
   pre2.textContent="R$"+"   "+preco[valor]+",00"
  v2.textContent="R$"+"   "+preco[valor]*unid+",00"
  soma=soma+preco[valor]*unid
  vap.textContent="Soma dos serviços/itens    R$"+"     "+soma+",00"
  valqfalta.textContent=soma+".00"
  select.selectedIndex=""
  document.querySelector(".unidade").value=""
  
}

if (cont==3) {
    document.querySelector(".compra3").style.display="block"
  nomepro3.textContent=produto[valor]
  quant3.textContent=unid
   pre3.textContent="R$"+"   "+preco[valor]+",00"
  v3.textContent="R$"+"   "+preco[valor]*unid+",00"
  soma=soma+preco[valor]*unid
  vap.textContent="Soma dos serviços/itens    R$"+"     "+soma+ ",00"
  valqfalta.textContent=soma+".00"
  select.selectedIndex=""
  document.querySelector(".unidade").value=""

}

if (cont==4) {
    document.querySelector(".compra4").style.display="block"
  nomepro4.textContent=produto[valor]
  quant4.textContent=unid
   pre4.textContent="R$"+"   "+preco[valor]+",00"
  v4.textContent="R$"+"   "+preco[valor]*unid+",00"
  soma=soma+preco[valor]*unid
  vap.textContent="Soma dos serviços/itens    R$"+"     "+soma+",00"
  valqfalta.textContent=soma+".00"
  select.selectedIndex=""
  document.querySelector(".unidade").value=""

}

if (cont==5) {
    document.querySelector(".compra5").style.display="block"
  nomepro5.textContent=produto[valor]
  quant5.textContent=unid
   pre5.textContent="R$"+"   "+preco[valor]+",00"
  v5.textContent="R$"+"   "+preco[valor]*unid+",00"
  soma=soma+preco[valor]*unid
  vap.textContent="Soma dos serviços/itens    R$"+"     "+soma+",00"
  valqfalta.textContent=soma+".00"
  select.selectedIndex=""
  document.querySelector(".unidade").value=""
  
}

 document.querySelector(".selec").selectedIndex=""
 document.querySelector(".unidade").value=""         


  
}


}
}
 
} 



 

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
        document.querySelector(".compra5").style.display="none"
        document.querySelector(".compra4").style.display="none"
        document.querySelector(".compra3").style.display="none"
        document.querySelector(".compra2").style.display="none"
        document.querySelector(".compra1").style.display="none"


        clearInterval(display)
    }, 3000);
 
    
     window.print()
})
