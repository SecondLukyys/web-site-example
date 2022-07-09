// API: https://reqres.in/

// 1) GET basic get function application
function functionget()
{
    fetch('https://reqres.in/api/users')
    .then(res => {
        if(res.ok) { console.log("GET request successful")}
        else { console.log("GET request unsuccessful")}
        return res
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))


function handleData(data){
    console.log(data)
}

}
// 2) POST
function functionpost()
{
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
    if(res.ok) { console.log("POST request successful")}
    else { console.log("POST request unsuccessful")}
    return res
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

// 3) PUT
function functionput()
{
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
    if(res.ok) { console.log("PUT request successful")}
    else { console.log("PUT request unsuccessful")}
    return res
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

}
// 4) DELETE
function functiondelete()
{
fetch('https://reqres.in/api/users/2', {
    method: "DELETE",
    headers: {
        'Content-type': 'application/json'
    },
})
    .then(res => {
    if(res.ok) { console.log("DELETE request successful")}
    else { console.log("DELETE request unsuccessful")}
    return res
    })
    .then(res => console.log(res))
}

// 5) PATCH
function functionpatch()
{
    fetch('https://reqres.in/api/users/2', {
        method: "PATCH",
        headers: {
            "name": "morpheus",
            "job": "zion resident"
        },
    })
        .then(res => {
        if(res.ok) { console.log("PATCH request successful")}
        else { console.log("PATCH request unsuccessful")}
        return res
        })
        .then(res => console.log(res))
}

function functiongettable()
{
    fetch('https://reqres.in/api/users').then(
        res=>{
            res.json().then(
                data=>{
                    console.log(data);
                    if(data.lenght > 0){
                        var temp = "";

                        data.forEach((u)=>{
                            temp += "<tr>";
                            temp += "<td>"+u.id+"/td";
                            temp += "<td>"+u.email+"</td></tr>";
                        })

                        document.getElementById("data").innerHTML = temp;

                        return temp;
                    }
                }
            )
        }
    )
}

//https://reqres.in/
//https://www.youtube.com/channel/UC26_rFZReLXNu8bULVARUXg/videos
//https://www.youtube.com/watch?v=hOXWY9Ng_KU
//https://www.youtube.com/watch?v=bBYM3KMuXC4