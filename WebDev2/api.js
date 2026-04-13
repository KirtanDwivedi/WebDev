// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(response => response.json())
//     .then(data => {
//         const imageElement = document.createElement("img")
//         imageElement.src = data.message;
//         imageElement.alt = "random dog picture";
//         document.getElementById("dogImg").appendChild(imageElement);
//     })
//     .catch(err => console.log(err))
//     .finally(() => console.log("Operation completed"))


// try {
//     // async function getActivity() {
//         const response = await fetch("https://apis.scrimba.com/bored/api/activity"); // body, headers, status
//         if (!response.ok) {
//             throw new Error("API is not working");
//         }
//         const data = await response.json();
//         console.log(data);
//     // }
//     // await getActivity();
// }
// catch (err) {
//     console.log(err);
//     // upadate the DOM to show the error
//     // document.getElementById("dogImg").innerHTML = "Something went wrong";
//     // use different APIs
// }
// finally {
//     console.log("Operation completed");
// }

// function uplaodFile(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("File uploaded successfully");
//             reject("File not uploaded");
//         }, 2000);
//     })
// }
// try{
//     await uplaodFile();
// }catch(err){console.log(err)}

// async function remove blocking or module error
// without await it only shows Promises()
// Promise() constructor use resolve() and reject() for async function while .then() and .catch() for sync function 
// setTimer by default use callback()