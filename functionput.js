// 3) PUT
function functionput() {
    fetch('https://reqres.in/api/users/2', {
        method: "PUT",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(
            {
                "name": "jimmy",
                "job": "developer"
            }
        )
    })
        .then(res => {
            if (res.ok) { console.log("PUT request successful"); }
            else { console.log("PUT request unsuccessful"); }
            return res;
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));

}
