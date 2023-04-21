const main__content = document.querySelector(".main__content")
const formsd = document.querySelector(".formApernt")
const token = document.querySelector(".token")
let title = document.querySelector(".id_title")
let body = document.querySelector(".id_body")
let btnGEts = document.querySelector('.update')
btnGEts.style.display = "none"

let forms = document.querySelector("form")
let btn = document.querySelector(".btn")
urls = "http://127.0.0.1:8000"
Itemdiaplay = ""
function renderPost(data) {
    data.forEach((post) => {
        Itemdiaplay+= `
        <div id =" ${post.id}">
            <h2 class="title">${post.title}</h2>
            <p class="body">
            ${post.body}</p>
            <small>
                <a href="" id="edit">Edit</a>
                <a href="" id="delete">Delete</a>
            </small>
        </div>
        `
        main__content.innerHTML = Itemdiaplay
        console.log(post.body);
        // console.log(Itemdiaplay);
    });
}

fetch(urls + "/JsonHome/")
.then(res => res.json())
.then(resdate => renderPost(resdate) )



btn.addEventListener("click",(e)=>{
  
    e.preventDefault()
    // alert("sjs")
fetch(urls + '/JsonHomePst/',{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        "X-CSRFToken": token.value, 
    },
    body:JSON.stringify({
        title:title.value,
        body:body.value,
    })

    
})
.then(res => res.json())
.then(resdate =>{
    console.log(resdate);
    const dtarr = []
    dtarr.push(resdate)
    renderPost(dtarr)
} )
body.value =""
title.value =""
})




main__content.addEventListener("click",(e)=>{
    e.preventDefault()
    let editpress = e.target.id == "edit"
    let idISplay = Number(e.target.parentElement.parentElement.id)
    // body.value = 
    console.log(idISplay);
    // title.value = 
    let deletepress = e.target.id == "delete"
    if (deletepress){
        fetch('http://127.0.0.1:8000/'+ `${idISplay}`,{
            method:"DELETE",
            headers:{
        "X-CSRFToken": token.value, 

            }
        })
        .then(res => res.json())
        .then(() => location.reload())
        location.reload()
    }
    if (editpress) {
        let parent  = e.target.parentElement.parentElement
        let bodyGEt = parent.querySelector('.body').innerHTML
        let btnGEt = document.querySelector('.btn')
        let titelGEt = parent.querySelector('.title').innerHTML
    title.value = bodyGEt
    body.value = titelGEt
    btnGEt.style.display = "none"
btnGEts.style.display = "unset"
    
    }
  let  updatebtn = document.querySelector('.update')
  updatebtn.addEventListener("click",(e)=>{
      e.preventDefault()
 
      let btnGEt = document.querySelector('.btn')
      btnGEt.style.display = "none"
        fetch('http://127.0.0.1:8000/'+ `${idISplay}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "X-CSRFToken": token.value, 
            },
            body:JSON.stringify({
                title:title.value,
                body:body.value,
            })
          
        })

        .then(res => res.json())
        .then(() =>  location.reload())
    
        
    })

})

