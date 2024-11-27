import React, { useState } from 'react';
import './Dashboard.css';
import consultants from '../data/consultantsData';

const Dashboard = () => {
  const [selectedConsultant, setSelectedConsultant] = useState(null);

  const handleSelectConsultant = (id) => {
    if (id === "") {
      setSelectedConsultant(null);
    } else {
      const consultant = consultants.find((consultant) => consultant.id === parseInt(id));
      setSelectedConsultant(consultant);
    }
  };

  const handlePrintSelected = () => {
    console.log(`Tulostetaan konsultin tiedot: ${selectedConsultant.name}`);
  };

  const handlePrintAll = () => {
    console.log('Tulostetaan kaikkien konsulttien tiedot PDF-tiedostoon.');
  };

  return (
    <div className="dashboard-container">
      <h1>Hallintapaneeli</h1>

      {/* Suodatus */}
      <div className="dashboard-section">
        <h2>Suodatus</h2>
        <select
          onChange={(e) => handleSelectConsultant(e.target.value)}
          value={selectedConsultant ? selectedConsultant.id : ""}
          className="dropdown"
        >
          <option value="">Valitse konsultti</option>
          {consultants.map((consultant) => (
            <option key={consultant.id} value={consultant.id}>
              {consultant.name}
            </option>
          ))}
        </select>
      </div>

      {/* Valitun konsultin tiedot */}
      {selectedConsultant && (
        <div className="dashboard-section">
          <h2>Konsultin tiedot</h2>
          <p><strong>Nimi:</strong> {selectedConsultant.name}</p>
          <p><strong>Osaaminen:</strong> {selectedConsultant.expertise}</p>
          <p><strong>Teknologia:</strong> {selectedConsultant.technology}</p>
          <p><strong>Kokemus:</strong> {selectedConsultant.year}</p>
          <p><strong>Koulutus:</strong> {selectedConsultant.education.degree}, {selectedConsultant.education.program} ({selectedConsultant.education.graduationYear})</p>
          <p><strong>Sertifikaatit:</strong> {selectedConsultant.certifications.join(', ')}</p>
          <p><strong>Projektit:</strong> {selectedConsultant.projects.join(', ')}</p>
          <p><strong>Työkokemus:</strong> {selectedConsultant.workExperience}</p>
          <button onClick={handlePrintSelected} className="print-button">Lataa CV PDF:nä</button>
        </div>
      )}

      {/* Kaikkien konsulttien tulostus */}
      <div className="dashboard-section">
        <h2>Raportointi</h2>
        <button onClick={handlePrintAll} className="print-button">
          Lataa konsulttien CV:t PDF:nä
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
