// 1- Fetch, Load and show Categories on html

// create loadCategories
// const loadCategories = () => {
//    // fetch the data
//    fetch("https://openapi.programming-hero.com/api/news/categories")
//       .then((res) => res.json())
//       .then((data) => displayCategories(data.data.news_category))
//       .catch((error) => console.log(error));
// };
const cardDemo = {
   
    "_id": "0282e0e58a5c404fbd15261f11c2ab6a",
    "others_info": {
        "is_todays_pick": false,
        "is_trending": true
    },
    "category_id": "01",
    "rating": {
        "number": 4.5,
        "badge": "Excellent"
    },
    "total_view": 488,
    "title": "Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet",
    "author": {
        "name": "Jimmy Dane",
        "published_date": "2022-08-24 17:27:34",
        "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
    },
    "thumbnail_url": "https://i.ibb.co/QnwC4sG/unsplash-Eh-Tc-C9s-YXsw-11.png",
    "image_url": "https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png",
    "details": "Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2."
};

// creating a function for showing specific category_id
const loadCategoryNews= (id) =>{
  // alert(id);
  // fetch
  fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    .then((res)=> res.json())
    .then((data) => displayNews(data))
    .catch((error) => console.log(error));
}

// async function
const loadCategories = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await response.json();
  displayCategories(data.data.news_category);
};
//
const loadNews = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/news/category/01"
  );
  const data = await response.json();
  displayNews(data.data);
};
// create DisplayNews
const displayNews = (news) => {
  const newsContainer = document.getElementById("News");
  newsContainer.innerHTML="";
  news.forEach((report) => {
    console.log(report);
    const card = document.createElement("div");
    card.classList = "card card-side bg-base-100 shadow-sm"
    card.innerHTML = `
  <figure class = "h-[200px]  ">
    <img class="p-3 h-full w-full object-cover"
      src=${report.thumbnail_url}
      alt="Movie" />
  </figure>
  <div class="card-body">
   <!-- The document  -->
      <div class= "">
         <h2 class="font-bold">${report.title}</h2>
         <p class="text-gray-400 w-200 overflow-hidden  line-clamp-3">${report.details}</p>
      </div>
   <!-- The picture -->
      <div class="flex    items-center justify-between  px-8">
         <div class="flex space-x-4 py-3">
         <div>
            <img  class="w-10 h-10 rounded-full object-cover" src=${report.author.img} />
         </div>
         <div>
            <h3 class="font-bold">${report.author.name}</h3>
            <p>${report.author.published_date}</p>
         </div> 
         </div> 
          <!--View -->
          <div>
          
          </div>
          <div class="flex   "> 
          <img class="w-10 h-10 rounded-full object-cover" src="https://image.shutterstock.com/image-vector/eye-icon-vector-view-sight-150nw-164818436.jpg" />
          <div class="flex items-center justify-center">${report.total_view}  </div>
          </div>
          <!--rating -->
          <div class="flex items-center justify-center">${report.rating.number}</div>
      </div>
  </div>

         `;

   newsContainer.append(card);
  });
};

// create DisplayCategories
const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("category");

  // To Have each elements of the array user forEach
  categories.forEach((item) => {
    // create an anchor tag
    // const anchor = document.createElement("a");
    // anchor.classList.add("text-dark", "font-bold", "px-4",);
    // anchor.innerText = item.category_name;
    const anchorContainer = document.createElement("div");
    anchorContainer.innerHTML = `
    <a  onclick="loadCategoryNews(${item.category_id})" class="a px-4" href="">
    ${item.category_name}
    </a>
    `
    
    //  add anchor to category container 
    categoryContainer.append(anchorContainer);
  });
};

loadCategories();
loadNews();
