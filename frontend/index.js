document.addEventListener("DOMContentLoaded", () => {
    createForm();
    fetchUsers()
})  

const BASE_URL = 'http://localhost:3000'
    //read - fetch my users index 

        function fetchUsers(){
            fetch(`${BASE_URL}/users`)
            .then(resp => resp.json())
            .then(users => {
                //we do something with the data fetched
                for (const user of users) {
                    let u = new User(user.id, user.name, user.username, user.email)
                    u.renderUser();
                }
            })
        }
    //create - create a new user 

    // create a form, add an event listener 
    // once a form is submitted => fetch `post` request to backend and 
    // do something with returned objects 

    function createForm(){
        let usersForm = document.getElementById("users-form")

        usersForm.innerHTML +=
        ` 
        <form>
            Name: <input type="text" id="name"><br>
            Username: <input type="text" id="username"><br>
            Email: <input type="text" id="email"><br>
            <input type="submit" value="Create User">

        </form>
        `

        usersForm.addEventListener("submit", userFormSubmission)
    }

    function userFormSubmission(){
        event.preventDefault();
        let name = document.getElementById("name").value 
        let username = document.getElementById("username").value
        let email = document.getElementById("email").value


        console.log(name,username,email)
        let user = {
            name: name,
            username: username,
            email: email 
        }
    }

    // delete - delete a user 


