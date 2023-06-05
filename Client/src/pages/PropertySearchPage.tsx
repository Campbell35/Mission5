import React, { useState } from "react";
import style from "./PropertySearchPage.module.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Slider from "../components/slider/Slider";

// interface Property {
//   id: number;
//   title: string;
//   price: number;
//   location: string;
// }

// const properties: Property[] = [];

// fetch('http://localhost:3000/api/properties')
//   .then(response => response.json())
//   .then(data => {
//     // Process the retrieved data
//     properties.push(...data);
//     console.log('Retrieved properties:', properties);
//   })
//   .catch(error => {
//     // Handle any errors
//     console.error('Error retrieving data:', error);
//   });

// const PropertySearchPage: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState<Property[]>([]);

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSearchSubmit = (event: React.FormEvent) => {
//     event.preventDefault();

//     const results = properties.filter(property =>
//       property.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setSearchResults(results);
//   };

function PropertySearchPage() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className={style.main_container}>
        <div className={style.main_container_inner}>
          <div className={style.main_container_left}>
            <img
              src="./images/hero-img.png"
              alt="house"
              width="600"
              height="400"
            />
          </div>
          <div className={style.main_container_right}>
            <h4>Some...breadcrumbs...here</h4>
            <span className={style.right_div_Auckland}>Auckland</span>
            <button className={style.contactOffice_button}>
              Contact Office
            </button>
          </div>
        </div>
      </div>
    
    <div className={style.mainDiv}>
      <div className={style.card_main_container}>
        <div className={style.container_left}>
          <div className={style.card_inputDiv}>
            <div className={style.card_input_select_region}>
              <span>Select region...</span>
              <br />
              <input
                type="text"
                placeholder="EG: Auckland"
                // value={inputValue}
                // onChange={handleInput}
              />
            </div>

            <div className={style.card_input_select_suburb}>
              <span>Select suburb...</span>
              <br />
              <input
                type="text"
                placeholder="EG: Browns Bay"
                // value={inputValue}
                // onChange={handleInput}
              />
            </div>
          </div>

          <div className={style.button_container}>
            <button className={style.search_buttons}>Price</button>
            <button className={style.search_buttons}>Bed</button>
            <button className={style.search_buttons}>Bath</button>
            <button className={style.search_buttons}>Pets Allowed</button>
          </div>
        </div>
        <div className={style.container_right}>
          <div className={style.button_right_cluster}>
            <button className={style.search_buttons}>Search Map</button>
            <button className={style.search_buttons}>Popular</button>
            <button className={style.search_buttons}>Save Search</button>
            <button className={style.search_buttons}>Random</button>
          </div>
        </div>
      </div>

      <div className={style.popUpmainDiv}>
      <div className={style.popUpcontainer}>
        <div className={style.popUpcontainer_left}>
          <div className={style.popUpsliderDiv}>
            <Slider />
          </div>
          <div className={style.popUpsliderDiv_buttons}>
            <button className={style.popUpsliderDiv_button_ONE}>CLEAR</button>
            <button className={style.popUpsliderDiv_button_TWO}>APPLY</button>
          </div>
        </div>
        <div className={style.popUpcontainer_right}>
          <img
            className={style.popUpfeaturedImage}
            src="./images/featured-apartment.jpg"
            alt="featured apartment"
            width="220"
            height="188"
          />
          <span className={style.popUpfeaturedLocation}>
            <span>Featured property in:</span>
            <br></br>
            <br></br>
            <span className={style.popUpfeaturedLocation_city}>Auckland</span>
          </span>
        </div>
      </div>
    </div>
    </div>
    {/* PROPERTY CARDS SECTION BELOW*/}
    <div className={style.CARDmainDiv}>
      <div className={style.CARDcontainer}>
        <div className={style.CARDcardDiv}>
          <div>
            <img
              className={style.CARDpropertyImage}
              src="./images/Property1.jpg"
              alt="property"
              width="300"
              height="200"
            />
          </div>
          <div className={style.CARDpropertyDetails}>
            <span className={style.CARDpropertyAddress}>
              21/105 Kingston Street
            </span>
            <br />
            <span className={style.CARDpropertyCity}>Auckland City</span>
            <br />
            <span className={style.CARDpropertyPrice}>$1050.00 pw</span>
          </div>
        </div>
        <div className={style.CARDcardDiv}>
          <div>
            <img
              className={style.CARDpropertyImage}
              src="./images/Property2.jpg"
              alt="property"
              width="300"
              height="200"
            />
          </div>
          <div className={style.CARDpropertyDetails}>
            <span className={style.CARDpropertyAddress}>5/12 Queens Rise</span>
            <br />
            <span className={style.CARDpropertyCity}>Auckland City</span>
            <br />
            <span className={style.CARDpropertyPrice}>$850.00 pw</span>
          </div>
        </div>
        <div className={style.CARDcardDiv}>
          <div>
            <img
              className={style.CARDpropertyImage}
              src="./images/Property3.jpg"
              alt="property"
              width="300"
              height="200"
            />
          </div>
          <div className={style.CARDpropertyDetails}>
            <span className={style.CARDpropertyAddress}>17/18 Apt B - Koff St</span>
            <br />
            <span className={style.CARDpropertyCity}>Mission Bay</span>
            <br />
            <span className={style.CARDpropertyPrice}>$1350.00 pw</span>
          </div>
        </div>
        <div className={style.CARDcardDiv}>
          <div>
            <img
              className={style.CARDpropertyImage}
              src="./images/Property4.jpg"
              alt="property"
              width="300"
              height="200"
            />
          </div>
          <div className={style.CARDpropertyDetails}>
            <span className={style.CARDpropertyAddress}>
              4/17 The Spencer on Byron
            </span>
            <br />
            <span className={style.CARDpropertyCity}>Takapuna</span>
            <br />
            <span className={style.CARDpropertyPrice}>$985.00 pw</span>
          </div>
        </div>
      </div>
    </div>

    {/* PROPERTY CARDS SECTION ABOVE*/}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default PropertySearchPage;

//     <div>
//       <h1>Property Search</h1>

//       <form onSubmit={handleSearchSubmit}>
//         <input
//           type="text"
//           placeholder="Search by property title"
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
//         <button type="submit">Search</button>
//       </form>

//       <h2>Search Results</h2>

//       {searchResults.length > 0 ? (
//         <ul>
//           {searchResults.map(property => (
//             <li key={property.id}>
//               <h3>{property.title}</h3>
//               <p>Price: ${property.price}</p>
//               <p>Location: {property.location}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No results found.</p>
//       )}
//     </div>
//   );
// };
