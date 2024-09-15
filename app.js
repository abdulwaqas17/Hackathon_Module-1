// ------------ showOne ---------
function showOne(){

    let para = document.getElementById('FAQS-paraOne');
    para.innerHTML = `
    
    
    <p>

    During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.

    </p>

    `;

    document.getElementById('down-keyOne').innerHTML= `–`;

}




// ------------ showTwo ---------
function showTwo(){

    let para =  `
    
    <p>

    During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.

    </p>

    `;

    document.getElementById('FAQS-paraTwo').innerHTML = para;

    document.getElementById('down-keyTwo').innerHTML= `–`;

}


// ------------ showThree ---------
function showThree(){

    document.getElementById('FAQS-paraThree').innerHTML = `
    
    <p>

    During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.

    </p>

    `;

    document.getElementById('down-keyThree').innerHTML= `–`;


}



// ------------ showFour ---------
function showFour(){

    var para = document.getElementById('FAQS-paraFour');
    para.innerHTML = `
    
    
    <p>

    During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.

    </p>

    `;

    document.getElementById('down-keyFour').innerHTML= `–`;

}



// ------------ showFive ---------
function showFive(){

    var para = document.getElementById('FAQS-paraFive');
    para.innerHTML = `
    
    
    <p>

    During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.

    </p>

    `;

    document.getElementById('down-keyFive').innerHTML= `–`;

}

function removal(){

    document.getElementById('FAQS-paraFive').innerHTML= `a`;

}

// const para = document.getElementById("five");
// const five = document.getElementById("FAQS-paraFive");
// five.addEventListener("click" , () => {FAQS-paraFive.classList.toggle("active")})