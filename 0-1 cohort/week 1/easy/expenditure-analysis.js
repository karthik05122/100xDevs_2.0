/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
let listofobjs = [transactions.length]

  for(let i = 0;i<transactions.length;i++){

    let {category , price} = transactions[i];
    listofobjs[i] = {category, price};
    
  }

let objs = {};

transactions.forEach((T) => {
  if(objs.hasOwnProperty(T.category)){
    objs[T.category] = objs[T.category] +T.price;
  }

  else{
    objs[T.category] = T.price;
  }
});


let result = Object.keys(objs).map(category => {
  return { category: category, totalSpent: objs[category] };
});
return result;
};

module.exports = calculateTotalSpentByCategory;
