import React, { useState } from 'react';

interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
}

const properties: Property[] = [
  { id: 1, title: 'Spacious Apartment', price: 1500, location: 'City Center' },
  { id: 2, title: 'Cozy Cottage', price: 800, location: 'Suburb' },
  { id: 3, title: 'Luxury Villa', price: 3000, location: 'Beachfront' },
  // Add more properties...
];

const PropertySearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Property[]>([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const results = properties.filter(property =>
      property.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <h1>Property Search</h1>

      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search by property title"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>

      <h2>Search Results</h2>

      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map(property => (
            <li key={property.id}>
              <h3>{property.title}</h3>
              <p>Price: ${property.price}</p>
              <p>Location: {property.location}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default PropertySearchPage;
