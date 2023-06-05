// **********************FROM THE TOP OF THE PropertySearchPage.********************************************************
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

// ********************************************************************************************************************

// *********************************THE DISPLAY DIV PART FROM THE PropertySearchPage***********************************
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
// ************************************************************************************************************************
