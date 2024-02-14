// version-1 end-pointURL ="https://script.google.com/macros/s/AKfycbzrs88BjJCWpKwaFYptpifh414Dp1Yu0P2uBsKXANkLhy3g_-TU17c4WCoQSAbVbJoWmA/exec"
let url = "https://script.google.com/macros/s/AKfycbzrs88BjJCWpKwaFYptpifh414Dp1Yu0P2uBsKXANkLhy3g_-TU17c4WCoQSAbVbJoWmA/exec";
let file = document.querySelector("#image");
let img = document.querySelector("#ImageFile");
file.addEventListener('submit', ()=>{
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