// BloodAvailability.js
import React, { useState } from 'react';
import './BloodAvailability.css';

const BloodAvailability = ({ donors }) => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filteredDonors = donors.filter(donor => donor.bloodGroup.toLowerCase() === search.toLowerCase());
    setResults(filteredDonors);
  };

  return (
    <div className="blood-availability">
      <h2>Check Blood Availability</h2>
      <input placeholder="Enter Blood Group" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={handleSearch}>Search</button>

      <h3>Available Donors</h3>
      <table>
        <tbody>
          {results.map((donor, index) => (
            <tr key={index}>
              <td>{donor.name}</td>
              <td>{donor.bloodGroup}</td>
              <td>{donor.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BloodAvailability;