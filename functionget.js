// 1) GET basic get function application
function functionget() {
    fetch('https://reqres.in/api/users')
        .then(res => {
            if (res.ok) { console.log("GET request successful"); }
            else { console.log("GET request unsuccessful"); }
            return res;
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));

}
