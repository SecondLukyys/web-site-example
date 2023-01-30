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
