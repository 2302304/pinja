import React, { useState } from 'react';
import './Consultants.css';
import consultantsData from '../components/consultantsData'; // Konsulttien alkuperäinen data
import AddConsultant from '../components/Addconsultant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons'; // Ikoni

const Consultants = () => {
  const [consultants, setConsultants] = useState(consultantsData); // Alkuperäinen konsulttilista
  const [search, setSearch] = useState('');
  const [technologyFilter, setTechnologyFilter] = useState('Kaikki');
  const [showAll, setShowAll] = useState(false);
  const [expandedConsultant, setExpandedConsultant] = useState(null);
  const [isAddConsultantOpen, setIsAddConsultantOpen] = useState(false); // Lisää konsultti -modalin tila

  // Lisätään uusi konsultti
  const addConsultant = (newConsultant) => {
    setConsultants([...consultants, newConsultant]); // Lisää uusi konsultti listalle
  };

  // Suodatus hakukentän ja teknologiafiltterin perusteella
  const filteredConsultants = consultants.filter((consultant) => {
    const fullName = consultant.name.toLowerCase();
    const searchLetter = search.toLowerCase();
    const matchesName =
      fullName.startsWith(searchLetter) ||
      fullName.split(' ')[1]?.startsWith(searchLetter);
    const matchesTechnology =
      technologyFilter === 'Kaikki' || consultant.technology === technologyFilter;
    return matchesName && matchesTechnology;
  });

  const consultantsToDisplay = showAll ? consultants : filteredConsultants;

  const handleViewMore = (id) => {
    setExpandedConsultant(expandedConsultant === id ? null : id);
  };

  return (
    <div className="consultants-page">
      <h2>Konsultit</h2>
      <div className="controls">
        <select
          className="consultants-dropdown"
          onChange={(e) => setShowAll(e.target.value === 'Kaikki')}
        >
          <option value="">Konsultit</option>
          <option value="Kaikki">Kaikki konsultit</option>
        </select>
        <input
          type="text"
          placeholder="Hae etu tai sukunimellä..."
          value={search}
          onChange={(e) => {
            setShowAll(false);
            setSearch(e.target.value);
          }}
        />
        <select
          value={technologyFilter}
          onChange={(e) => {
            setShowAll(false);
            setTechnologyFilter(e.target.value);
          }}
        >
          <option value="Kaikki">Kaikki teknologiat</option>
          <option value="React">React</option>
          <option value="Python">Python</option>
          <option value="Figma">Figma</option>
          <option value="AWS">AWS</option>
        </select>
        <button
          className="add-button"
          onClick={() => setIsAddConsultantOpen(true)} // Avaa Lisää konsultti -modal
        >
          Lisää konsultti
        </button>
      </div>

      {/* Lisää konsultti -popup-ikkuna */}
      {isAddConsultantOpen && (
        <AddConsultant
          addConsultant={addConsultant} // Välitetään addConsultant-funktio
          closeModal={() => setIsAddConsultantOpen(false)} // Sulkee popupin
        />
      )}

      {consultantsToDisplay.length > 0 ? (
        <div className="consultants-grid">
          {consultantsToDisplay.map((consultant) => (
            <div
              key={consultant.id}
              className={`consultant-card ${
                expandedConsultant === consultant.id ? 'expanded' : ''
              }`}
            >
              <h3>
                <FontAwesomeIcon icon={faUserTie} className="consultant-icon" />{' '}
                {consultant.name}
              </h3>
              <p>
                <strong>Osaaminen:</strong> {consultant.expertise}
              </p>
              <p>
                <strong>Teknologia:</strong> {consultant.technology}
              </p>
              <p>
                <strong>Kokemus:</strong> {consultant.year}
              </p>

              {/* Näyttää lisätiedot, jos konsulttia klikataan */}
              {expandedConsultant === consultant.id && (
                <div className="expanded-details">
                  <p>
                    <strong>Koulutusaste:</strong> {consultant.education.degree}
                  </p>
                  <p>
                    <strong>Koulutusohjelma:</strong>{' '}
                    {consultant.education.program}
                  </p>
                  <p>
                    <strong>Valmistumisvuosi:</strong>{' '}
                    {consultant.education.graduationYear}
                  </p>
                  <p>
                    <strong>Projektit:</strong>{' '}
                    {consultant.projects.join(', ')}
                  </p>
                  <p>
                    <strong>Sertifikaatit:</strong>{' '}
                    {consultant.certifications.join(', ')}
                  </p>
                  <p>
                    <strong>Työkokemus:</strong>{' '}
                    {consultant.workExperience}
                  </p>
                  <button
                    className="view-button"
                    onClick={() => handleViewMore(consultant.id)}
                  >
                    Näytä vähemmän
                  </button>
                </div>
              )}
              {expandedConsultant !== consultant.id && (
                <button
                  className="view-button"
                  onClick={() => handleViewMore(consultant.id)}
                >
                  Näytä lisää
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="no-consultants-message">
          Ei konsultteja näytettäväksi. Käytä hakua tai suodattimia.
        </p>
      )}
    </div>
  );
};

export default Consultants;
