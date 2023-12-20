const card = [
    {
        type: "debet",
        models: [
            { model: "Mastercard standard", price: "8, 14, 20", time: "12, 24, 36", picture: "standard.jpg" },
            { model: "Mastercard Gold", price: "20, 30, 40", time: "12, 24, 36", amount: "Nəzərdə tutulmayıb", aim: "Şəxsi vəsaitinizdən istifadə üçün", picture: "gold.jpg" },
            { model: "Visa Gold", price: "20, 30, 40", time: "12, 24, 36", picture: "visagold.jpg", aim: "Böyük imkanlar vədd edən kartı həyatının əvəzolunmaz bir hissəsinə çevir" },
            { model: "Visa infinite", price: "100, 300, 400", time: "12, 24, 36", aim: "Şəxsi vəsaitdən istifadə üçün nəzərdə tutulmuşdur.", picture: "infinite.jpg" }
        ]
    },
    {
        type: "kredit",
        models: [
            { model: "Bolkart Gənc kredit", price: "min. 200 AZN - maks. 10000", time: "35", aim: "Ümumi məqsədlər üçün", picture: "bolkart.jpg" },
            { model: "Umumi meqsedli kredit kart", price: "min.300 AZN - maks.3000 AZN", time: "24", picture: "umumi.png" },
            { model: "Bolkart Aile kredit", price: "min.200 AZN - maks.10000 AZN", time: "35", aim: "Ümumi məqsədlər üçün", amount: "40 gun", picture: "bolkart1.jpg" },
            { model: "Bolkart Diamond kredit", price: "min.3000 AZN - maks.30000 AZN", time: "35", aim: "Ümumi məqsədlər üçün", amount: "45gun", picture: "diamond.jpg" }
        ]
    },
    {
        type: "lokal",
        models: [],
    },
    {
        type: "virtual",
        models: []
    }
]

let s1 = document.getElementById("s1")
let s2 = document.getElementById("s2")
let left = document.querySelector(".left")
let right = document.querySelector(".right")

card.map(item => item.type == "debet" && item.models.map(item => s1.innerHTML += `<option>${item.model}</option>`))
card.map(item => item.type == "kredit" && item.models.map(item => s2.innerHTML += `<option>${item.model}</option>`))

function yarad(a) {
    card.map(item => item.type == a.textContent && item.models.map(item => {
        left.innerHTML = ` <img src="${item.picture}" alt="sekil">`
        right.innerHTML = `<h2> ${item.aim}</h2>
                           <p>Kartin Qiymeti: ${item.price}</p> 
                           <p>Muddet: ${item.time}</p>
                           <button>Sifaris Et</button>  `}))
}



function deyis(typ, val) {
    card.map(item => item.type == typ && item.models.map(item => {
        if (item.model == val.value) {
            left.innerHTML = `<img src="${item.picture}" alt="sekil" />`
            right.innerHTML = `<h2> ${item.aim}</h2>
                                           <p>Kartin Qiymeti: ${item.price}</p> 
                                           <p>Muddet: ${item.time}</p>
                                           <button>Sifaris Et</button> ` }
    }))
}






























// card.find(item => item.type == "debet").models.map(item => s1.innerHTML += `<option >${item.model}</option>`).join("")
// // card.map(item => item.type == "debet" && item.models.map(item => s1.innerHTML += `<option >${item.model}</option>`))

// card.map(item => item.type == "kredit" && item.models.map(item => s2.innerHTML += `<option>${item.model}</option>`))

// //  card.map(item => item.type == "debet" && item.models.map(item => console.log(item.model)))

// function yarad(b) {
//     let kod = ""
//     let kod2 = ""
//     card.map(item => item.type == b.textContent && item.models.map(item => {
//         kod = `
//              <img src=" ${item.picture}" alt="s">
//         `
//         kod2 += `
//         <h3>Kartin qiymeti</h3>
//         <p>${item.price}</p>
//         <h3>kartin muddeti</h3>
//         <p>${item.time}</p>
//     `
//     }))
//     left.innerHTML = kod
//     right.innerHTML = kod2
// }



// function deyis(a) {
//     let kod = ""
//     let kod2 = ""
//     card.map(item => item.type == "debet" && item.models.map(item =>{
//         if(item.model == a.value   ){
//             left.innerHTML = ""
//             right.innerHTML = ""
//              kod = `
//              <img src=" ${item.picture}" alt="s">
//              `
//              kod2 += `
//              <h3>Kartin qiymeti</h3>
//              <p>${item.price}</p>
//              <h3>kartin muddeti</h3>
//              <p>${item.time}</p>
//          `
//         }
//         left.innerHTML = kod
//         right.innerHTML = kod2
//     } ))
// }



// function deyis2(b) {
//     let kod = ""
//     let kod2 = ""
//     card.map(item => item.type == "kredit" && item.models.map(item =>{
//         if(item.model == b.value   ){
//             left.innerHTML = ""
//             right.innerHTML = ""
//              kod = `
//              <img src=" ${item.picture}" alt="s">
//              `
//              kod2 += `
//              <h3>Kartin qiymeti</h3>
//              <p>${item.price}</p>
//              <h3>kartin muddeti</h3>
//              <p>${item.time}</p>
//          `
//         }
//         left.innerHTML = kod
//         right.innerHTML = kod2
//     } ))
// }



































