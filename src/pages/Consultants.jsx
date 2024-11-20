import React, { useState } from 'react';
import './Consultants.css';

const Consultants = () => {
  const [search, setSearch] = useState('');
  const [technologyFilter, setTechnologyFilter] = useState('Kaikki');
  const [showAll, setShowAll] = useState(false); // Lisätty tila "Näytä kaikki" -toiminnolle
  const consultants = [
    { id: 1, name: 'John Doe', expertise: 'Web Development', technology: 'React', year: '5 vuotta' },
    { id: 2, name: 'Jane Smith', expertise: 'Data Analysis', technology: 'Python', year: '3 vuotta' },
    { id: 3, name: 'Alice Johnson', expertise: 'UI/UX Design', technology: 'Figma', year: '2 vuotta' },
    { id: 4, name: 'Mike Brown', expertise: 'DevOps', technology: 'AWS', year: '6 vuotta' },
  ];

  // Suodatus hakukentän ja teknologiafiltterin perusteella
  const filteredConsultants = consultants.filter((consultant) => {
    const fullName = consultant.name.toLowerCase(); // Nimi pienillä kirjaimilla
    const searchLetter = search.toLowerCase(); // Hakukentän arvo
    const matchesName = fullName.startsWith(searchLetter) || fullName.split(' ')[1]?.startsWith(searchLetter);
    const matchesTechnology = technologyFilter === 'Kaikki' || consultant.technology === technologyFilter;
    return matchesName && matchesTechnology;
  });

  // Näytetään konsultit vain, jos "Näytä kaikki" on valittu tai haku tehty
  const consultantsToDisplay = showAll ? consultants : filteredConsultants;

  return (
    <div className="consultants-page">
      <h2>Konsultit</h2>
      <div className="controls">
        {/* Lisätty alasvetovalikko "Konsultit" */}
        <select
          className="consultants-dropdown"
          onChange={(e) => setShowAll(e.target.value === 'Kaikki')}
        >
          <option value="">Konsultit</option>
          <option value="Kaikki">Kaikki konsultit</option>
        </select>

        {/* Hakukenttä ja teknologiasuodatus */}
        <input
          type="text"
          placeholder="Hae etu tai sukunimellä..."
          value={search}
          onChange={(e) => {
            setShowAll(false); // Piilota kaikki, jos käyttäjä suorittaa hakua
            setSearch(e.target.value);
          }}
        />
        <select
          value={technologyFilter}
          onChange={(e) => {
            setShowAll(false); // Piilota kaikki, jos käyttäjä vaihtaa suodatinta
            setTechnologyFilter(e.target.value);
          }}
        >
          <option value="Kaikki">Kaikki teknologiat</option>
          <option value="React">React</option>
          <option value="Python">Python</option>
          <option value="Figma">Figma</option>
          <option value="AWS">AWS</option>
        </select>

        {/* Siirretty Lisää konsultti -painike oikeaan reunaan */}
        <button className="add-button">+ Lisää konsultti</button>
      </div>

      {/* Konsulttien korttinäkymä */}
      {consultantsToDisplay.length > 0 ? (
        <div className="consultants-grid">
          {consultantsToDisplay.map((consultant) => (
            <div key={consultant.id} className="consultant-card">
              <h3>{consultant.name}</h3>
              <p><strong>Osaaminen:</strong> {consultant.expertise}</p>
              <p><strong>Teknologia:</strong> {consultant.technology}</p>
              <p><strong>Kokemus:</strong> {consultant.year}</p>
              <button className="view-button">Näytä lisää</button>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-consultants-message">Ei konsultteja näytettäväksi. Käytä hakua tai suodattimia.</p>
      )}
    </div>
  );
};

export default Consultants;
