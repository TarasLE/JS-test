// import url from './variables-categories-nav'
export const url = `https://callboard-backend.herokuapp.com/call/categories`;
export default async function postData(url, data = {}, method = 'GET') {
  const response = await fetch(url, {
    method: GET, // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzYxZjgwZGFiZDAwMTc5ZDdmZjYiLCJzaWQiOiI1ZmQzMzY0MjgwZGFiZDAwMTc5ZDdmZjkiLCJpYXQiOjE2MDc2Nzc1MDYsImV4cCI6MTYwNzY4MTEwNn0.RnvvG68q1yWWaIVr777cLMJg-eNwugnc7x5ldqFuoNM',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    //body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return await response.json(data); // parses JSON response into native JavaScript objects
}



//  function fetchCategoriesNav() {
//         const option = {
//         headers: {}
//     }

//     const url = `https://callboard-backend.herokuapp.com/`
  
//         return fetch(url, option).then(response => response.json()).then(data => {
//                 this.incrementPage();
//                 return data;
//         });
// }
    

