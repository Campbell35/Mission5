import React, { useState, useEffect } from 'react';
import style from "./PropertySearchPage.module.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";


interface Property {
  id: number;
  Address: string;
  Suburb: string;
  Price: number;
  Bedrooms: number;
}
const MIN = 100;
const MAX = 5000;

const PropertySearchPage: React.FC = () => {
  const [values, setValues] = useState<[number, number]>([MIN, MAX]);
  const [address, setAddress] = useState('');
  const [suburb, setSuburb] = useState('');
  const [searchResults, setSearchResults] = useState<Property[]>([]);
  const properties: Property[] = [];

  useEffect(() => {
    fetch('http://localhost:3000/api/properties')
      .then(response => response.json())
      .then(data => {
        properties.push(...data);
        console.log('Retrieved properties:', properties);
      })
      .catch(error => {
        console.error('Error retrieving data:', error);
      });
  }, []);

   const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAddress = event.target.value;
    setAddress(newAddress);
  };

  const handleSuburbChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSuburb = event.target.value;
    setSuburb(newSuburb);
  };
  

   const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Call the filter function to update searchResults on form submission
    const filteredResults = filterProperties(properties, address, suburb);
    setSearchResults(filteredResults);
  };

   const filterProperties = (properties: Property[], address: string, suburb: string): Property[] => {
    return properties.filter((property) =>
      property.Address.toLowerCase().includes(address.toLowerCase()) &&
      property.Suburb.toLowerCase().includes(suburb.toLowerCase())
    );
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setValues([MIN, newValue]);
    // Handle slider change
  };

  return (
    <div className={style.TheMain_page}>
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
                  value={address}
                  onChange={handleAddressChange}
                />
              </div>
    
              <div className={style.card_input_select_suburb}>
                <span>Select suburb...</span>
                <br />
                <input
                  type="text"
                  placeholder="EG: Browns Bay"
                  value={suburb}
                  onChange={handleSuburbChange}
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
                <div className={style.slider_div_main}>
                  <div className={style.SLIDERmainDiv}>
                    <div className={style.SLIDERsliderMain}>
                      <h3>
                        Price <span>Range</span>
                      </h3>
                      <div className={style.SLIDERslider_value}>$100.00 - $5000.00</div>
                      <small>Current Range: ${values[1]}.00</small>
    
                      <input
                        type="range"
                        className={style.SLIDERtheslider}
                        onChange={handleSliderChange}
                        value={values[1]}
                        min={MIN}
                        max={MAX}
                      />
                    </div>
                  </div>
                </div>
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
              <span className={style.CARDpropertyCity}>Auckland City</span>
              <br />
              <span className={style.CARDpropertyPrice}>$620.00 pw</span>
            </div>
          </div>
        </div>
      </div>
    
      <div className={style.CARDmainDiv}>
        <div className={style.CARDcontainer}>
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
              <span className={style.CARDpropertyAddress}>4/25 Princes Street</span>
              <br />
              <span className={style.CARDpropertyCity}>Auckland City</span>
              <br />
              <span className={style.CARDpropertyPrice}>$700.00 pw</span>
            </div>
          </div>
          <div className={style.CARDcardDiv}>
            <div>
              <img
                className={style.CARDpropertyImage}
                src="./images/Property5.jpg"
                alt="property"
                width="300"
                height="200"
              />
            </div>
            <div className={style.CARDpropertyDetails}>
              <span className={style.CARDpropertyAddress}>5A Faraday Street</span>
              <br />
              <span className={style.CARDpropertyCity}>Auckland City</span>
              <br />
              <span className={style.CARDpropertyPrice}>$725.00 pw</span>
            </div>
          </div>
          <div className={style.CARDcardDiv}>
            <div>
              <img
                className={style.CARDpropertyImage}
                src="./images/Property6.jpg"
                alt="property"
                width="300"
                height="200"
              />
            </div>
            <div className={style.CARDpropertyDetails}>
              <span className={style.CARDpropertyAddress}>10 Queen Street</span>
              <br />
              <span className={style.CARDpropertyCity}>Auckland City</span>
              <br />
              <span className={style.CARDpropertyPrice}>$520.00 pw</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default PropertySearchPage;


