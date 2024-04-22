

// console.log(data)
let newemail = document.querySelector("#text1")
let newpass = document.querySelector("#text2")



let regbtn=document.querySelector("#regbtn")

let loginbtn = document.querySelector("#login1")

loginbtn.addEventListener("click", function () {
    fetch("https://northwind.vercel.app/api/suppliers")
        .then(res => res.json())
        .then(data => {
            let contactname=data.find(
                (element)=>element.contactName==newemail.value
            )
            if(contactname){
                console.log("Welcome")
                window.location.href="./home.html"
            }
            else{
                console.log("Yalnis")
            }

            })


        })
        regbtn.addEventListener("click", function(){
            window.location.href="./register.html"

        })



