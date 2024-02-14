let url = "https://script.google.com/macros/s/AKfycbxEICiTaq9CfPNo6JaWU8uuwvTjnu6emBb_mLXzEW0HfEkVl3XpXqCEonL0xyap68hbFg/exec";
let file = document.querySelector("input");
let img = document.querySelector("img");
file.addEventListener('change', ()=>{
    let fr = new FileReader();
    fr.addEventListener('loadend', ()=>{
        let res = fr.result;
        img.src = res;
        // console.log(img.src);
        let spt = res.split("base64,")[1];
        // console.log(spt);
        let obj = {
            base64 : spt,
            type: file.files[0].type,
            name : file.files[0].name
        }
        // console.log(obj);
        fetch(url, {
            method : "POST", 
            body : JSON.stringify(obj)
        })
        // .then(r => r.text())
        // .then(data=>console.log(data))
    });
    fr.readAsDataURL(file.files[0]);
});
// version-1 end-pointURL ="https://script.google.com/macros/s/AKfycbzrs88BjJCWpKwaFYptpifh414Dp1Yu0P2uBsKXANkLhy3g_-TU17c4WCoQSAbVbJoWmA/exec"
// version-2 end-pointURL ="https://script.google.com/macros/s/AKfycbzInljNr-FCH7war6rzfgXyJXFlI_XZagpaZWTUgPbqmWaAfjZcRFYxh4q3EIb1N9K2/exec"
// version-3 end-pointURL ="https://script.google.com/macros/s/AKfycbzeHGfJC4eqfd1uaKM7tcH3qSbddZeXFiozC6xh3o_ybordBxERJSusooKzpn88FCNdzQ/exec"
// version-4 end-pointURL ="https://script.google.com/macros/s/AKfycbwGTmbLNI--2YuYBvzyUMjdwmMvpaBOWassnUNYwr8NtcgGVdK_rlomjX3dr9lYg-c9AQ/exec"
// version-4.1 end-pointURL ="https://script.google.com/macros/s/AKfycbxugAJ-dKljPzumNz3FDNu3U6HnZkMXcHIvZQieKmcen4YE0AcXaDNAMitPl_VVq24iCw/exec"
// version-4.2 end-pointURL ="https://script.google.com/macros/s/AKfycbymOn7xj-59uZOiLCNe4z6NuG-GRv41KNZmV5V2sgMDMp4fhyLkguZtKEZZbGequhqz1w/exec"
// version-4.3 end-pointURL ="https://script.google.com/macros/s/AKfycbzlBMXZyY1czsGft7P97k73iggcTLJXkpW0zKuLmRP8nZyZjcXpXt6XrAjKGqXRV4tn-Q/exec"
// version-4.4 end-pointURL ="https://script.google.com/macros/s/AKfycbzo0jHf1shMnQdVORC_xTa_PrYb8hd_I2q1sj0W8yC4gUxM5w7mrvq3ND_tx_jrgFshUA/exec"
// version-4.5 end-pointURL ="https://script.google.com/macros/s/AKfycbwlCSiGS1EoUDMfjFWKeXFD6GUsfP3bhSpkLhKSI2CGaEdAYeEIyTmidoxM-tta0E4HVQ/exec"
// version-4.6 end-pointURL ="https://script.google.com/macros/s/AKfycbz6aVFqAwzJAFu7-4OzyT6WgkUtf3E9DewoSbHhyq06uz4npJa2ozA_gzVFr-hmHRtvjg/exec"
// VERSION-5 END-POINTurl ="https://script.google.com/macros/s/AKfycbwV4q3V-ph-QVvqnMBUBT6TGY6k4nnxjZKNXaf5IURH1Gccx-_AWFuRCL4Ewu4gAG6zhw/exec"
// version-5.1 end-pointURL ="https://script.google.com/macros/s/AKfycbzw8zCunJd0oYzccjYgEODAq1gpuP11wxjagi7_R6zWYSSdpPzJcn-nCBROJhtv7bn3Cg/exec"
// version-5.2 end-pointURL ="https://script.google.com/macros/s/AKfycbxEICiTaq9CfPNo6JaWU8uuwvTjnu6emBb_mLXzEW0HfEkVl3XpXqCEonL0xyap68hbFg/exec"