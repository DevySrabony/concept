// const price =getConvertedValue("budget");
// const cartCount = getConvertedValue("cart");
// const leftCiunt = getConvertedValue("left")

const allBtn = document.getElementsByClassName("all-btn");

for(const btn of allBtn){
    btn.addEventListener("click" , function (event){
        const name = event.target.parentNode.childNodes [1].innerText;
        const price = event.target.parentNode.childNodes [3].childNodes[1].innerText;
        const category = event.target.parentNode.childNodes [5].childNodes[1].innerText;
        console.log(name , price , category);

        const selectedContainer = document.getElementById("selected-players-container");
        
         
        const div = document.createElement("div");
        div.classList.add("flex");
        
        div.classList.add("gap-20")

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");

        p1.innerText = name;
        p2.innerText = price;
        p3.innerText = category;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        selectedContainer.appendChild(div);

        updateTotalCost(price);
    })
}


// function updateTotalCost(price){
//     const totalCost = document.getElementById("total-cost").innerText;
//     const totalCost = getConvertedValue("totalCost");
//     const convertPrice = parseInt(price);
//     const sum = totalCost + convertedPrice;
//     document.getElementById("total-cost").innerText = sum;
// }





// function getConvertedValue(id){
//     const price = document.getElementById(id).innerText;
//     const convertPrice = parseInt(price);
//     return convertPrice;
// }

function updateTotalCost(price) {
    const totalCost = parseFloat(document.getElementById("total-cost").innerText);
    const convertedPrice = getConvertedValue("total-cost"); // Corrected to match the ID
    const sum = totalCost + parseInt(price);
    document.getElementById("total-cost").innerText = sum;
}

function getConvertedValue(id) {
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}
