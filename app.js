const h_pod = 0.1
document.querySelector("#vol").addEventListener("change", e => {
  document.querySelector("#textt").textContent =e.target.value 
})

let form  =document.querySelector(".form")
let L_sh   = document.querySelector("#lsh")
form.addEventListener("submit", (e)=> {
  e.preventDefault()
  let fl = document.querySelector("#fl").value-0
  let nl = document.querySelector("#nl").value-0
  let hc = document.querySelector("#hc").value-0

  let fi = document.querySelector("#vol").value - 0
  let KL = fl - h_pod

  h_gr = nl - KL

  let a;

  switch(fi) {
    case  40:
      a = 0.30
      break;
    case  39:
      a= 0.32
      break;
    case  38:
      a= 0.34
      break;    
    case  37:
      a= 0.36
      break;
    case  36:
      a= 0.38
      break;
    case  35:
      a= 0.40
      break;
    case  34:
      a= 0.43
      break;
    case  33:
      a= 0.46
      break;
    case  32:
      a= 0.49
      break;
    case  31:
      a= 0.52
      break;
    case  30:
      a= 0.55
      break;
    case  29:
      a= 0.59
      break;
    case  28:
      a= 0.63
      break;
    case  27:
      a= 0.67
      break;
    case  26:
      a= 0.71
      break;
    case  25:
      a= 0.75
      break;
    case  24:
      a= 0.81
      break;
    case  23:
      a= 0.87
      break;
    case  22:
      a= 0.93
      break;
    case  21:
      a= 0.99
      break;
    case  20:
      a= 1.05
      break;
    case  19:
      a= 1.12
      break;
    case  18:
      a= 1.19
      break;
    case  17:
      a= 1.26
      break;
    case  16:
      a= 1.33
      break;
    case  15:
      a= 1.40
      break;
    
    default:
      a = 0
  }
  console.log(a, h_gr, hc);
  if (hc) {
    L_sh.textContent = 0.7 + h_gr + hc + (a*h_gr)
  } else {
    L_sh.textContent = 0.3 + h_gr  + (a*h_gr)
    
  }
 

})


