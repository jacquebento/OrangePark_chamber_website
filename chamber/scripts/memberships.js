
const memb = document.querySelector("#membership");
const nop = document.querySelector(".npDescription");
const bronze = document.querySelector(".bronzeDescription");
const silver = document.querySelector(".silverDescription");
const golden = document.querySelector(".goldenDescription");
const test = document.querySelector(".test");
const message = document.querySelector("#formmessage");
var temp;

function displaynp(){
    if (memb.value === "np"){
        nop.style.display = "block";
        bronze.style.display = "none";
        silver.style.display = "none";
        golden.style.display = "none";
    }else if (memb.value === "bronze"){
        nop.style.display = "none";
        bronze.style.display = "block";
        silver.style.display = "none";
        golden.style.display = "none";
    }else if (memb.value === "silver"){
        nop.style.display = "none";
        bronze.style.display = "none";
        silver.style.display = "block";
        golden.style.display = "none";
    }else if (memb.value === "golden"){
        nop.style.display = "none";
        bronze.style.display = "none";
        silver.style.display = "none";
        golden.style.display = "block";
    }else{
        nop.style.display = "none";
        bronze.style.display = "none";
        silver.style.display = "none";
        golden.style.display = "none";
    }
}    
memb.addEventListener("change", displaynp);

