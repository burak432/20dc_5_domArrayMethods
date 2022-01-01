const userEkleBtn = document.querySelector("#userEkleBtn");
const ikiKatBtn = document.querySelector("#ikiKatBtn");
const milyonerBtn = document.querySelector("#milyonerBtn");
const siralaBtn = document.querySelector("#siralaBtn");
const totalBtn = document.querySelector("#totalBtn");
const liste = document.querySelector("#liste");

let userArr = [];

//asnyc await ile user bilgileri aliyor
async function randomUserAl() {
  let res = await fetch("https://randomuser.me/api");
  const data = await res.json();

  const user = {
    name: `${data.results[0].name.first} ${data.results[0].name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };
  userEkle(user);
}

//fonksiyon array içine user ekliyor
function userEkle(user) {
  userArr.push(user);
  domGuncelle();
}

function domGuncelle(bilgiler = userArr) {
  liste.innerHTML = "";
  bilgiler.forEach((item) => {
    let listeDom = document.createElement("div");
    listeDom.innerHTML = `
<strong>${item.name}</strong><span>${paraFormat(item.money)}$</span>
`;
    liste.appendChild(listeDom);
  });
}

//para format regex
function paraFormat(num) {
  return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

//event Listeners
userEkleBtn.addEventListener("click", randomUserAl);





//////////fetch ile
// function userAlFetch() {
//   fetch("https://randomuser.me/api/?results=10")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     });
// }

// /////// async-await ile
// async function userAlPromise() {
//   const res = await fetch("https://randomuser.me/api/?results=10");
//   const data = await res.json();

//   data.results.forEach((item) => {
//     let user = {
//       username: `${item.name.first} ${item.name.last}`,
//       banka: `${paraFormat(Math.floor(Math.random() * 1000000)))}`,
//     };
//     bilgiler.push(user);
//   });
// }

//   for (let i = 0; i < data.results.length; i++) {
//     let user = {
//       username: `${data.results[i].name.first} ${data.results[i].name.last}`,
//       banka: `${Math.floor(Math.random() * 1000000)}$`
//     };
//     bilgiler.push(user);
//   }

// //buton için userekle fonksiyonu
// userEkle = () => {
//   let user = document.createElement("div");
//   user.innerHTML = `
// <strong>${bilgiler[sayac].username}</strong> ${bilgiler[sayac].banka}
// `;
//   liste.appendChild(user);
//   console.log(sayac);
//   if (sayac < 9) {
//     sayac++;
//   } else {
//     resetle();
//   }
// };

// //reset fonksiyon
// function resetle() {
//   sayac = 0;
//   bilgiler = [];
//   liste.innerHTML = "";
//   userAlPromise();
// }

// //para format regex
// function paraFormat(num) {
//   return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
// }

// //ikikat function
// function ikiKatFunc() {
//   bilgiler = bilgiler.map(item => {
//     return { ...item, banka: parseInt(item.banka * 2) };
//   });
// }

// //eventListeners
// userEkleBtn.addEventListener("click", userEkle);
// ikiKat.addEventListener("click", ikiKatFunc);
// userAlPromise();
