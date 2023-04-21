


const id_title  = document.querySelector('.id_title')
const token  = document.querySelector('.token')
const id_body  = document.querySelector('.id_body')
const updateBtn  = document.querySelector('.update')
const btnPost  = document.querySelector('.btn')
const main__content  = document.querySelector('.main__content')
const names  = document.querySelector('.names').innerHTML
let itemDisplay = ""
console.log(names);
function renderPost(post) {
    post.forEach((post) => {
      itemDisplay +=  ` <div id="${post.id}">
        <h2 class="title">${post.title}</h2>
        <p class="body">${post.body}</p>
        <small>
            <a href="" class= "edit">edit</a>
            <a href="" class= "delete">delete</a>
        </small>
    </div>`
    main__content.innerHTML = itemDisplay

    });
}

urlApi = `http://${names}`

fetch(urlApi + '/JsonHome/')
.then(resp => resp.json())
.then(data => renderPost(data))



btnPost.addEventListener('click',e =>{
e.preventDefault()

fetch(urlApi +  '/JsonHomePst/',{
    method:"POST",
    headers:{
        'Content-Type' :'application/json',
        'X-CSRFToken':token.value,
    },
    body: JSON.stringify({
        title: id_title.value,
        body : id_title.value

    })
})
.then(resp => resp.json())
.then(data => {
postArr = []
postArr.push(data)
    renderPost(postArr)
    alert('created successfully')
}

    )
    id_title.value = ''
    id_body.value = ''
})


main__content.addEventListener('click',(e)=>{
    e.preventDefault()
    let parentCon = e.target.parentElement.parentElement
    let idFetch = Number(e.target.parentElement.parentElement.id)
    let editBtn = e.target.className == "edit"
    let deleteBtn = e.target.className == "delete"
    let titleFetch = parentCon.querySelector('.title')
    let bodyFetch = parentCon.querySelector('.body')
    console.log("tirle",titleFetch);
    if (editBtn) {
     id_title.value = titleFetch.innerHTML
     id_body.value  = bodyFetch.innerHTML 
    // alert('edit')
    }
     if(deleteBtn){
fetch("http://127.0.0.1:8000/"+`${idFetch}`,{
    method:"DELETE",
    headers:{
        'Content-Type' :'application/json',
        'X-CSRFToken':token.value,
    }
})
.then(res => res.json())
.then(() => {
    alert('deleted successfully ')
})
location.reload()
    }

    updateBtn.addEventListener('click',(e)=>{
    e.preventDefault()
        fetch('http://127.0.0.1:8000/'+ `${idFetch}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "X-CSRFToken": token.value, 
        
            },
            body:JSON.stringify({
                title:id_title.value,
                body:id_body.value
            })
        })
        .then(res => res.json())
        .then(data => {
            location.reload()
            alert('successfully Updated')
        })
        })
})