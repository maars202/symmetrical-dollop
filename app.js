const express = require('express');
const bodyParser = require('body-parser');
var axios = require('axios');
const dotenv = require('dotenv');
const port = 3000;

// create a new Express application
// the object holds the entire API
// we're gonna design
const app = express();

// tranform the request object into json
// useful for handling application/json
// contentTypes in a simpler way
app.use(bodyParser.json());


// Can you guys test it out now using postman:
app.get("/yes", 
    (requestObject, responseObject) => {
    // magic happens here
    responseObject.send("yesss")
});

// Add a post request
app.post("/postRequest", 
    async (req, res) => {
        console.log(req.body);      // your JSON
        res.send("Post request Completed!");

});


// Add a post request
app.post("/postRequest2", 
    async (req, res) => {
        console.log(req.body);      // your JSON

        var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://sandbox.apihub.citi.com/gcb/api/v2/accounts/details',
  headers: { 
    'accept': 'application/json', 
    'client_id': '3906dd6d-534b-4d20-81d7-0e78848013a3', 
    'content-type': 'application/json', 
    'uuid': 'ab15b1f6-fba2-4423-3f40-5b28328c532d', 
    'Authorization': 'Bearer AAIkMzkwNmRkNmQtNTM0Yi00ZDIwLTgxZDctMGU3ODg0ODAxM2EzDCiR9JJ97ZnqIw6YKIsouZIvsHj-vxt05qHQdfnqLDDpA8J8LEj9IDdZ0YohwN6H_Q6ziTRb_bryHFAdX7utsC8Cr3nkova5P4AVXowmrmj97oPm1e8JsK9h-Yso87F0qhQjus_7yqzaVYksGxEeiiDThU1O8lFtY7bzFc2S9pdx3vAkR3dducROsmO87xFe3iNtTXvP7rSA_e_axj1RiZSkT9WX3-aljIJY0SxPjNqc3LUY4TDSQEIxj40aPGII86MQ5u9dXIHp-kVyIGM8NfH-Or-kDA0FCD-iMKWlNo96A9wHr30j3q5CM4f4hBizWlQM1vOBsxXHRMSCv_lEWe4RDE22ZGBcZ98V_ZfB1-WOaU3vhHtC04BuyrE4dQtH2S3ST0vVovD1cvXLWPy0Vxo0RJchdm9bnHpoUcsLkD_Avdi-oEsy_3g-SgQJr-lD01WTZAiw-jD3EpnLTihQAiZQjQ-jHTPZGZvgUcwMAwc4hAlUlSmHNjLLfOxDzceM966FVVzjzRN81yt0LHKFxw', 
    'Cookie': '_abck=8B9EA8BF446FABBF1D3580ADE6DE6BE7~-1~YAAQzd6bfE9f9h+CAQAA/s1fNQibvZAw6XqcW7TNaULgKYhhcSGA2CgIaH8mWJobfUiJBQrjs27TpA1VM3qNlLc6ujmqv49MSy/J9h3gwPvcOxykbkDChiem8raH/wDkHHDVfzpPl5MQa2CLqxYrIuVDggnAycPf/bMMZ1yBlf4Do1kH1KPX0dPMgqjZ9ULEqVAW8qAZaDGq/wUc+YHHj15q2xqzltMX52TZWaZNmNGwWSD3FNpHaLKrx7cpYJ/C0Gl/aOjywxjatePrTQxxlKlxdCTr+yEXVAthbR0XKWZ5bk3dZb3LhAauibbhOc5c6wQOUqiJD2wndGtLdmSdiY363qAsA/fNXc49LZp+6oBaTw2tfGAU7b7b1px1xIX4oZU4FUQ=~-1~-1~-1; bm_sz=54458ED471E55F9807398FD97FE4A450~YAAQzd6bfFBf9h+CAQAA/s1fNRAtvJOuroDnYRtyjM6jPcwY/OW9r12IdEn3laHRThgsepqri9buPDEXXJqSBE3oB40VYLGN11cKYn+bC8IZ8GZfZXe60vAUNz6uaQ4JEhK4+ROPEBTKLDG/9r6Xjj/uVcKhioBdyOOmUy7G1YZ7eEooYZq0jq8883A6vVIpZR2s7731FFEKBy4wdB3tgAmjrHMT4FAq/C6Rx4lFgt533C04EM+P67RHEGh07QIcKwAQ6mBS2/7PV9mZ9nwbbDn0Qu7HBITQFYLs/UfT3Osp~4536121~3289398; CITI_SITE=gtdc'
  }
};
let finalData = ""
await axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
//   res.send(response.data);
  finalData = JSON.stringify(response.data)
})
.catch(function (error) {
  console.log(error);
  res.send("Unsuccessful!");
});



        res.send(finalData);

});

// app.listen(port, () => {
//     console.log("server started to listen on " + port);
// });


dotenv.config();
console.log(process.env.PORT)
app.listen(process.env.PORT || 5000, () => {
    console.log("server started to listen on " + port);
});

