let url = "https://script.google.com/macros/s/AKfycbwuNJ9dKSl7wZgDSVby0R1PpTHAY8lgnxrKJb3UpnJ8LJtWd_idQQNHH9PeQzh-O3FOnA/exec";
let form = document.querySelector("#form1");
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    document.querySelector("#sub").value = "SUBMITTING..";
    let data = new FormData(form);
    fetch(url, {
        method: "POST",
        body: data,
    })
    .then(res=>res.text())
    .then(data =>{
        document.querySelector("#msg").innerHTML = data;
        document.querySelector("#sub").value = "SUBMIT";
    })
});