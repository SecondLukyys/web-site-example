// 2) POST
function functionpost() {
    fetch('https://reqres.in/api/users', {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(
            {
                "name": "aaaa",
                "job": "developer"
            }
        )
    })
        .then(res => {
            if (res.ok) { console.log("POST request successful"); }
            else { console.log("POST request unsuccessful"); }
            return res;
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}
