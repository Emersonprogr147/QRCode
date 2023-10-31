const contaneir = document.querySelector(".contaneir");
const qrCodeBtn = document.querySelector("#qr-form button"); 

const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img"); 
/* EVENTO */

function generetiQrCode(){
  const qrCodeInputValue = qrCodeInput.value ; 
  console.log(qrCodeInputValue);

  if(!qrCodeInputValue ) return ; 
  qrCodeBtn.innerText = "Gerando código ...." ; 
  qrCodeImg.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

  qrCodeImg.addEventListener("load",() =>{

    contaneir.classList.add("active");
    qrCodeBtn.innerText = "Código criado!" ; 
  });
}

qrCodeBtn.addEventListener("click",() =>{
generetiQrCode();
});

qrCodeInput.addEventListener("keydown",(e) =>{
   
    if(e.code === "Enter") {
      generetiQrCode();

    }
    });
