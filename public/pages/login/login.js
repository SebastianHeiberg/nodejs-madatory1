document.getElementById("login-btn").addEventListener("click", login)

function login (){

    const password = document.getElementById("password").value
    const username = document.getElementById("username").value
    const data = {password, username}
    fetch("login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data), 
    }).then(response => {
        
        if (response.redirected) {
            window.location.href = response.url
        } else {
            document.getElementById("status").innerHTML = "Forkert brugernavn eller password"
        }
    })   
}