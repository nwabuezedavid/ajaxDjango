const sec1 = document.querySelector('.sec1')
const sec12 = document.querySelector('.sec2')
const room = document.querySelector('.room')
const urname = document.querySelector('.urname')
const containdispay = document.querySelector('.main__displayMassage')
const message = document.querySelector('.send__input')
const enter = document.querySelector('.enter')
const sendMAx = document.querySelector('.sendMAx')
let innertextc = ""
function idu() {
    
    let inis = new Date().getTime().toString()
    let id = 'ids'+ inis 
    return id
}
let datesendCreated = new Date().toTimeString()
let isactive = 'true'
let online = true
let utl = '';
function djs() {
    sec1.classList.add('hide')
    sec12.classList.add('show')
}
let id ;
enter.addEventListener('click',(e)=>{
e.preventDefault()
let urnames = urname.value
let rooms = room.value
let messages = message.value

let datesendCreateds = datesendCreated
if (urnames != "" && urnames != 'Null', urnames != 'None', rooms !=""  ) {
    id = idu()
    createRoom(id, urnames, rooms,messages ? messages : "",  datesendCreateds)
    
    const  item = JSON.parse(localStorage.getItem(`Room`))
    id = item[0]['id'] 
    id2 = item[0]['id'] 
    getInfor(idsd = id2)
    if (id2 ) {
        djs()
        window.history.pushState(id, 'homeRoom', `chatting.html?${id}`)
    }
    else{
        window.history.pushState(id, 'homeRoom', `/`)
    }
}
})
utl= window.location.href.match(/id/)

console.log(utl);
let dk = localStorage.getItem('Room')
console.log("dive",dk);
// if (!dk) {
//     window.history.replaceState(id, 'homeRoom', `chatting.html`)
    
// }


function massegeBox(e) {
    if (online) {
        
    innertextc +=
    
    `<span class="  sender " id =${e.id} >

    <h2>${e.message}</h2>
    <small>${e.timesent}</small>
</span>`
}else {
        
    innertextc +=
    
    `<span class="  recever ">

    <h2>${e.message}    </h2>
    <small>${e.timesent}</small>
</span>`
}
containdispay.innerHTML = innertextc

}

if (utl) {
    djs()


sendMAx.addEventListener('click', ()=>{
    let messages = message.value
   let maij = localStorage.getItem('Room')
   
    console.log(maij);
    let datesendCreateds = datesendCreated
    createRoom(id, )
    // massegeBox(value = messages)

})

}
function getInfor() {
    let  ds = JSON.parse(localStorage.getItem("Room"))
    massegeBox(ds[0]) 
        console.log(ds[0]);
    // ds[0].forEach(e => {
    //     massegeBox('ekje', e) 
    //     console.log(e);
        
    // });
    
}

getInfor()

function uniGet() {
    
    const check = localStorage.getItem('roomsore')?
    JSON.parse(localStorage.getItem('roomsore')): []
    return check
}


function createRoom(id,urname,  rname , message,  timesent ) {
    const getarr = {id , urname, rname, message, timesent}
    let item = uniGet()
    item.push(getarr)

    localStorage.setItem(`Room`, JSON.stringify(item))
}