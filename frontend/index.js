document.addEventListener("DOMContentLoaded", () => {
    fetchUsers()
})  

const BASE_URL = 'http://localhost:3000'
    //read - fetch my users index 

        function fetchUsers(){
            fetch(`${BASE_URL}/users`)
            .then(resp => console.log(resp))
            .then()
        }
    //create - create a new user 

    // delete - delete a user 


