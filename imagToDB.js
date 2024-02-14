let url = "";
let file = document.querySelector("#image");
let img = document.querySelector("#ImageFile");
file.addEventListener('chmage', ()=>{
    let fr = new FileReader();
    fr.addEventListener('loadend', ()=>{
        let res = fr.result;
        img.src = res;
        let spt = res.split("base64,")[1];
        let obj = {
            base64 : spt,
            type: file.files[0].type,
            name : file.files[0].name
        }
        fetch(url, {
            mathod : "POST", 
            body : JSON.stringify(obj)
        })
        .then(r => r.text())
        .then(data=>console.log(data))
    });
    fr.readAsDataURL(file.files[0]);
});