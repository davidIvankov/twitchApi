let link = "https://twitch-proxy.freecodecamp.rocks/twitch-api"
let users= ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
let main = document.getElementById('main')
let online = document.getElementById('online');
let ofline = document.getElementById('ofline');
let all = document.getElementById('all')
let on = document.getElementsByClassName('on');
let of = document.getElementsByClassName('of');
function invisible(nameOfClass){
  let regex = /^\d+$/;
  for (const key in nameOfClass) {
if (regex.test(key)){
  nameOfClass[key].style.display = "none"
}
}
};

function visible(nameOfClass){
   let regex = /^\d+$/;
  for (const key in nameOfClass) {
if (regex.test(key)){
  nameOfClass[key].style.display = "flex"
}
}
}
function initial(){
  users.forEach(user=>{
 var req = new XMLHttpRequest()
 req.open("GET",`${link}/streams/${user}`)
  req.onload =()=>{
    
const res = JSON.parse(req.responseText)
let stream = res.stream
 req.open("GET",`${link}/users/${user}`)
  req.onload =()=>{
    
const res = JSON.parse(req.responseText)
let name = res.name
let logo = res.logo
    const para = document.createElement("div");
    let user =`<img src=${logo}><a href="https://www.twitch.tv/${name}" target="_blank">${res.display_name}</a>`
    if (stream === null){
    para.classList.add("of");
para.innerHTML= `<div class="prof">${user}</div> <div class="desc">offline</div>`
main.appendChild(para)
    } else {
      let game = stream.channel.game;
      let status = stream.channel.status;
      para.classList.add("on");
      
para.innerHTML=`<div class="prof">${user}</div> <div class="desc">${game}: ${status}</div>`
main.appendChild(para)
    }
  }
  req.send()
}
  req.send()
})
};

initial();




online.addEventListener('click', ()=>{
  online.style.transform = "translate(-100px)"
  all.style.transform = "translate(0)"
  ofline.style.transform = "translate(0)"
visible(on);
 invisible(of);

})
ofline.addEventListener('click', ()=>{
  online.style.transform = "translate(0)"
  all.style.transform = "translate(0)"
  ofline.style.transform = "translate(-100px)"
visible(of);
 invisible(on);
});
all.addEventListener('click', ()=>{
  online.style.transform = "translate(0)"
  all.style.transform = "translate(-100px)"
  ofline.style.transform = "translate(0)"
  visible(of);
 visible(on);
})