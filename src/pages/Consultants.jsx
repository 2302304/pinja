import React, { useState } from 'react';
import './Consultants.css';

const Consultants = () => {
  const [search, setSearch] = useState('');
  const [technologyFilter, setTechnologyFilter] = useState('Kaikki');
  const consultants = [
    { id: 1, name: 'John Doe', expertise: 'Web Development', technology: 'React', year: '5 vuotta' },
    { id: 2, name: 'Jane Smith', expertise: 'Data Analysis', technology: 'Python', year: '3 vuotta' },
    { id: 3, name: 'Alice Johnson', expertise: 'UI/UX Design', technology: 'Figma', year: '2 vuotta' },
    { id: 4, name: 'Mike Brown', expertise: 'DevOps', technology: 'AWS', year: '6 vuotta' },
  ];

  // Suodata hakukentän ja teknologiafiltterin perusteella
  const filteredConsultants = consultants.filter(
    (consultant) =>
      (consultant.name.toLowerCase().includes(search.toLowerCase()) ||
        consultant.expertise.toLowerCase().includes(search.toLowerCase())) &&
      (technologyFilter === 'Kaikki' || consultant.technology === technologyFilter)
  );

  return (
    <div className="consultants-page">
      <h2>Konsultit</h2>
      <div className="controls">
        <input
          type="text"
          placeholder="Hae nimellä tai osaamisella..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={technologyFilter} onChange={(e) => setTechnologyFilter(e.target.value)}>
          <option value="Kaikki">Kaikki</option>
          <option value="React">React</option>
          <option value="Python">Python</option>
          <option value="Figma">Figma</option>
          <option value="AWS">AWS</option>
        </select>
        <button className="add-button">+ Lisää konsultti</button>
      </div>
      <div className="consultants-grid">
        {filteredConsultants.map((consultant) => (
          <div key={consultant.id} className="consultant-card">
            <h3>{consultant.name}</h3>
            <p><strong>Osaaminen:</strong> {consultant.expertise}</p>
            <p><strong>Teknologia:</strong> {consultant.technology}</p>
            <p><strong>Kokemus:</strong> {consultant.year}</p>
            <button className="view-button">Näytä lisää</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Consultants;
