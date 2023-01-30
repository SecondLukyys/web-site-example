// 4) DELETE
function functiondelete() {
    fetch('https://reqres.in/api/users/2', {
        method: "DELETE",
        headers: {
            'Content-type': 'application/json'
        },
    })
        .then(res => {
            if (res.ok) { console.log("DELETE request successful"); }
            else { console.log("DELETE request unsuccessful"); }
            return res;
        })
        .then(res => console.log(res));
}
