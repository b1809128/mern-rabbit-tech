const url='http://localhost:5000/v2';
fetch(url)
    .then(res=> res.json())
    .then(data=> {
        getData(data);
    })


    const getData = (data) => {
        // for(let i = 0; i < data.length; i++) {
        //     console.log(data[i])
        // }
        data.map(data => {
            console.log(data)
            document.getElementById("demo").innerHTML= data.price[0] +"\n"+ data.name[0]+"\n" + data.image[0]
        })
    }