// 5) PATCH
function functionpatch() {
    fetch('https://reqres.in/api/users/2', {
        method: "PATCH",
        headers: {
            "name": "morpheus",
            "job": "zion resident"
        },
    })
        .then(res => {
            if (res.ok) { console.log("PATCH request successful"); }
            else { console.log("PATCH request unsuccessful"); }
            return res;
        })
        .then(res => console.log(res));
}
