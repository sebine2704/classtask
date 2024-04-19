
    //task1

    // fetch("https://northwind.vercel.app/api/products")
    // .then(res=>res.json())
    // .then(data=>{
    //     console.log(data)
    // })
    
    //task2

    // fetch("https://northwind.vercel.app/api/products")
    //     .then(res=>res.json())
    //     .then(data=>{
    //     data.forEach(elem=>{
    //         console.log(elem.id)
    //     })

    //     })

    //task3
    let tbody=document.querySelector("tbody")

    fetch("https://northwind.vercel.app/api/products")
        .then(res=>res.json())
        .then(data=>{
        data.forEach(elem=>{
            let tr =document.createElement("tr")
            let id=document.createElement("th")
            let name=document.createElement("td")
            let country=document.createElement("td")
            let deletetd=document.createElement("td")
            let edit=document.createElement("td")
            let detail=document.createElement("td")

            let=document.createElement("td")
            let price=document.createElement("td")

            let deletebutton=document.createElement("button")
            let editbutton=document.createElement("button")
            let detailbutton=document.createElement("button")

            deletebutton.style.width="60px"
            deletebutton.style.height="30px"
            deletebutton.style.backgroundColor="red"
            
            
            editbutton.style.width="60px"
            editbutton.style.height="30px"
            editbutton.style.backgroundColor="green"
        
            
           detailbutton.style.width="60px"
           detailbutton.style.height="30px"
           detailbutton.style.backgroundColor="yellow"
            
             
         deletetd.append(deletebutton)
         edit.append(editbutton)
         detail.append(detailbutton)
         


           id.innerText=elem.id
           name.innerText=elem.name
           country.innerText=elem.name
           price.innerText=elem.unitPrice
           deletebutton.innerText="Delete"
          editbutton.innerText="Edit"
           detailbutton.innerText="detail"

         
         deletebutton.addEventListener("click",function(e){
            e.target.parentElement.parentElement.remove()
            fetch("https://northwind.vercel.app/api/products"+"/"+ elem.id,{
                method: "delete"
            })
            .then(res=>res.json)
           
        })
         editbutton.addEventListener("click",function(e){

        })

          tr.append(id,name,country,price,deletetd,edit,detail)
          tbody.append(tr)
          
        })

        })

    



