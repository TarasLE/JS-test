// const url = `https://callboard-backend.herokuapp.com/call/categories/`;
// async function postData(url, data = {}, method = 'GET') {
//   const response = await fetch(url, {
//     method: method, // *GET, POST, PUT, DELETE, etc.
//     headers: {
//       'Content-Type': 'application/json',
//     //   'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzYxZjgwZGFiZDAwMTc5ZDdmZjYiLCJzaWQiOiI1ZmQzMzY0MjgwZGFiZDAwMTc5ZDdmZjkiLCJpYXQiOjE2MDc2Nzc1MDYsImV4cCI6MTYwNzY4MTEwNn0.RnvvG68q1yWWaIVr777cLMJg-eNwugnc7x5ldqFuoNM',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *client
//     //body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//     console.log(response);
//   return await console.log(response.json()); // parses JSON response into native JavaScript objects
// }



// console.log("test");
// const textT = 'bussiness and work';

// console.log(textT);
// console.log(textT.split(' ').join(''));

function fetchChosenCategory(category) {
    
    const option = {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
               Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzYxZjgwZGFiZDAwMTc5ZDdmZjYiLCJzaWQiOiI1ZmQzMzY0MjgwZGFiZDAwMTc5ZDdmZjkiLCJpYXQiOjE2MDc2Nzc1MDYsImV4cCI6MTYwNzY4MTEwNn0.RnvvG68q1yWWaIVr777cLMJg-eNwugnc7x5ldqFuoNM',
       
          },
    }
    // const url = `https://callboard-backend.herokuapp.com/call?page=${currentPageButton}`;
    const url = `https://callboard-backend.herokuapp.com/call/specific/${category}`;
    
    const response = fetch(url, option).then(response => response.json()).then(data =>
    {
      console.log(data);
       return data;
    });
    return response;
};
const elem = 'property';
fetchChosenCategory(elem);
// console.log(fetchChosenCategory(property));
