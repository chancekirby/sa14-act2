const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password") 

const usernameResponse = document.createElement("p")
username.insertAdjacentElement("afterend", usernameResponse)

const emailResponse = document.createElement("p") 
email.insertAdjacentElement("afterend", emailResponse)

const passwordResponse = document.createElement("p")
password.insertAdjacentElement("afterend", passwordResponse)

form.addEventListener("submit", () => {

    if (username.value.length >= 6) {
        usernameResponse.innerText = ""
        usernameResponse.innerText = "Valid Username"      
    } else if (username.value.length < 6) {
        usernameResponse.innerText = ""
        usernameResponse.innerText = "Username must be atleast 6 characters"    }


    const pattern = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[a-z]+$/
    if (pattern.test(email.value)) {
        emailResponse.innerText = ""
        emailResponse.innerText = "Valid Email"
    } else {
        emailResponse.innerText = ""
        emailResponse.innerText = "Please enter a valid email address"    }

    if (/[A-Z]/.test(password.value) && /[0-9]/.test(password.value)) {
        passwordResponse.innerText = ""
        passwordResponse.innerText = "Valid Password"
    } else {
        passwordResponse.innerText = ""
        passwordResponse.innerText = "Password must have atleast one capital letter and atleast one digit"
    }

    

})

