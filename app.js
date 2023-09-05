const container = document.querySelector('.container');
const codeImg = document.querySelector('#qr-code img');
const qrBtn = document.querySelector('#qr-form button');

const qrCodeInput = document.querySelector("#qr-form input");

function mudaImg() {
    const qrCodeInputValue = qrCodeInput.value;

    if(!qrCodeInputValue) return;

    qrBtn.innerText = "Gerando código...";
    

    codeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    codeImg.addEventListener("load", ()=> {
        container.classList.add('active');
        qrBtn.innerText = "Código criado!";
    })

}

qrBtn.addEventListener("click", ()=> {
    mudaImg();
})

qrCodeInput.addEventListener("keydown", ()=> {
    if(e.code === "Enter"){
        mudaImg();
    }
});

qrCodeInput.addEventListener("keyup", ()=> {
    if (!qrCodeInput.value) {
        container.classList.remove("active");
        qrBtn.innerText = "Gerar QR Code"
    }
})