document.addEventListener("DOMContentLoaded", () => {
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

    // delete - delete a user 


