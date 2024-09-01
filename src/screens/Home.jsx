import React,{useEffect,useState} from "react";
import Navbar from "../components/Navbar";
// import './Home.css'
import "./Home.css";
import Card from "../components/Card";
import Footer from "../components/Footer";
// import Carousel from "../components/Carousel";

export default function Home() {

  const [search, setSearch] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  
  const items = [
    { src: "/images/first.jpg" },
    { src: "/images/second.jpg" },
    { src: "/images/third.jpg" },
    { src: "/images/fourth.jpg" },
    { src: "/images/fifth.jpg" }
  ];
  

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [items.length]);


// export default function Home() {
//   const [foodCat, setFoodCat] = useState([]);
//   const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
      let response;
      try {
          response = await fetch("http://localhost:5000/api/foodData", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              }
          });
      } catch (error) {
          console.error("Error fetching data:", error);
          return;
      }
      
      if (!response.ok) {
          console.error("Network response was not ok");
          return;
      }

      try {
          const data = await response.json();
          console.log(data[0], data[1]);
          setFoodItem(data[0]);
          setFoodCat(data[1]);
      } catch (error) {
          console.error("Error parsing JSON:", error);
      }
  };

  useEffect(() => {
      loadData();
  }, []);





  
  return (
    <div> 
        <div><Navbar/></div>
        <div id="default-carousel" className="relative w-full" data-carousel="slide"></div>
        <div><div className="carousel-inner " id="carousel">
                <div className="carousel-caption" >
                    <div className="d-flex justify-center">
                        <input className=" form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
                        {/* <button className="form-button" type="submit">Search</button> */}
                    </div>
                </div>
            </div>
            
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {items.map((item, index) => (
                    <div key={index} className={`absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${index === activeIndex ? "ease-in-out" : "hidden duration-700 ease-in-out"}`}>
                        <img src={item.src} className="block w-full" alt={`Slide ${index + 1}`} />
                    
                    </div>
                    
                ))}
                
            </div>
            {/* Search bar */}
            {/* <div className="absolute bottom-0 left-0 w-full p-4 bg-white">
                <input type="text" placeholder="Search..." className="w-full p-2 border border-gray-300 rounded" />
            </div> */}
            {/* Slider controls */}
            {/* <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={handlePrev}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={handleNext}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button> */}
            
            </div>
            {/* <div className=" flex">

      <img
  src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
  class="w-32 rounded-full shadow-lg"
  alt="Avatar" />
  <img
  src="https://d1yy4cwyokq5tq.cloudfront.net/d/1531/1_600x600.jpg"
  class="w-32 rounded-full shadow-lg"
  alt="Avatar" />
  <img
  src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
  class="w-32 rounded-full shadow-lg"
  alt="Avatar" />
            </div> */}
            
        <div className=" container ">
          {
            // foodCat !==[]
            foodCat.length !== 0  // Check if foodCat is not empty
            ? foodCat.map((data)=>{
              return(
              <div className="rdiv">
              {/* <div key={data._id} className="keydiv">
                {data.CategoryName}
                </div> */}
                <hr />
                
                {foodItem.length !== 0 ? foodItem.filter((item)=> (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())) )  
                .map(filterItems=>{
                  
                  return(
                    <div key={filterItems._id} className=" fildiv " >
                    <div key={data._id} className="keydiv">
                    {data.CategoryName}
                    </div>
                      <div  className="cdiv">
                        
                      <Card 
                              foodItem={filterItems} 
                              options={filterItems.options[0]} 
                      />
                      </div>
                      
                      {/* <Card foodItem = {filterItems}
                      options={filterItems.options[0]}
                    
                      ></Card> */}
                    </div>
                  )
                }):
                <div>No Such Data Found</div>}
                </div>
              )
            })
            :<div>"""""""""""""""""""""""</div>
          }

          {/* <Card/> */}
        </div>
        <div><Footer/></div>
        
      {/* <div><Footer></Footer></div> */}
    </div>
    );
}











// export default function Home() {
    
//   const [foodCat,setFoodCat] =useState([]);
//   const [foodItem,setFoodItem] =useEffect([]);
  
//   const loadData = async ()=>{
//     let response = await fetch("http://localhost:5000/api/foodData",{
//       method:"POST",
//       headers:{
//             "Content-Type" : "application/json"
//       }
//     });

//       response = await response.json();
//       setFoodItem(response[0])
//       setFoodCat(response[1])
//       console.log(response[0],response[1])
      
//   }
  
//   useEffect(()=>{
//     loadData()
//   },[])
  











// export default function Home() {
//   const [foodCat, setFoodCat] = useState([]);
//   const [foodItem, setFoodItem] = useState([]);

//   const loadData = () => {
//       fetch("http://localhost:5000/api/foodData", {
//           method: "POST",
//           headers: {
//               "Content-Type": "application/json"
//           }
//       })
//       .then(response => {
//           if (!response.ok) {
//               throw new Error('Network response was not ok');
//           }
//           return response.json();
//       })
//       .then(data => {
//           console.log(data[0], data[1]);

//           // Assuming data[0] contains food categories and data[1] contains food items
//           setFoodCat(data[0]);
//           setFoodItem(data[1]);
//       })
//       .catch(error => {
//           console.error("Error fetching data:", error);
//       });
//   }

//   useEffect(() => {
//       loadData();
//   }, []);





/* 

import React,{useEffect,useState} from "react";
import Navbar from "../components/Navbar";
// import './Home.css'
import "./Home.css";
import Card from "../components/Card";
import Footer from "../components/Footer";
// import Carousel from "../components/Carousel";

export default function Home() {

  const [activeIndex, setActiveIndex] = useState(0);
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  
  const items = [
    { src: "/images/first.jpg" },
    { src: "/images/second.jpg" },
    { src: "/images/third.jpg" },
    { src: "/images/fourth.jpg" },
    { src: "/images/fifth.jpg" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [items.length]);


// export default function Home() {
//   const [foodCat, setFoodCat] = useState([]);
//   const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
      let response;
      try {
          response = await fetch("http://localhost:5000/api/foodData", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              }
          });
      } catch (error) {
          console.error("Error fetching data:", error);
          return;
      }
      
      if (!response.ok) {
          console.error("Network response was not ok");
          return;
      }

      try {
          const data = await response.json();
          console.log(data[0], data[1]);
          setFoodItem(data[0]);
          setFoodCat(data[1]);
      } catch (error) {
          console.error("Error parsing JSON:", error);
      }
  };

  useEffect(() => {
      loadData();
  }, []);

*/


// not use
// import React,{useEffect,useState} from "react";
// import Navbar from "../components/Navbar";
// // import './Home.css'
// import "./Home.css";
// import Card from "../components/Card";
// import Footer from "../components/Footer";
// import Carousel from "../components/Carousel";

// export default function Home() {
//   const [foodCat, setFoodCat] = useState([]);
//   const [foodItem, setFoodItem] = useState([]);

//   const loadData = async () => {
//       let response;
//       try {
//           response = await fetch("http://localhost:5000/api/foodData", {
//               method: "POST",
//               headers: {
//                   "Content-Type": "application/json"
//               }
//           });
//       } catch (error) {
//           console.error("Error fetching data:", error);
//           return;
//       }
      
//       if (!response.ok) {
//           console.error("Network response was not ok");
//           return;
//       }

//       try {
//           const data = await response.json();
//           console.log(data[0], data[1]);
//           setFoodItem(data[0]);
//           setFoodCat(data[1]);
//       } catch (error) {
//           console.error("Error parsing JSON:", error);
//       }
//   };

//   useEffect(() => {
//       loadData();
//   }, []);
