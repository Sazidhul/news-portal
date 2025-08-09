const loadCategory = async() => {
   const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
   const data = await response.json();
   data.data.news_category.forEach((item) => {
      console.log(item);
   })
}

loadCategory();



const  obj = {
   status: true,
   data: [
      {name: "hero", age: "25", status: true},
      {name: "Alom", age: "22", status: true},
      {name: "JKR", age: "00",},
   ]
}

console.log(obj.data[2].status?obj.data[2].status: "eta amar kam ")



if(obj.data[0].status){
   console.log("ache")
}
else{
   console.log("Ita ami nai ")
}

console.log(obj.data[2].status?obj.data[2].status: "eta amar kam ")
