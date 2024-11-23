import React, { useState } from 'react';
import './Dashboard.css';
import consultants from '../data/consultantsData'; // Importoidaan päivitetty data

const Dashboard = () => {
  const [selectedConsultant, setSelectedConsultant] = useState(null);

  const handleSelectConsultant = (id) => {
    const consultant = consultants.find((consultant) => consultant.id === parseInt(id));
    setSelectedConsultant(consultant);
  };

  const handlePrintSelected = () => {
    console.log(`Tulostetaan konsultin tiedot: ${selectedConsultant.name}`);
    // Lisää PDF-tulostuksen logiikka tähän
  };

  const handlePrintAll = () => {
    console.log('Tulostetaan kaikkien konsulttien tiedot PDF-tiedostoon.');
    // Lisää kaikkien konsulttien PDF-tulostuksen logiikka tähän
  };

  return (
    <div className="dashboard-container">
      <h1>Hallintapaneeli</h1>

      {/* Suodatus */}
      <div className="dashboard-section">
        <h2>Suodatus</h2>
        <select
          onChange={(e) => handleSelectConsultant(e.target.value)}
          defaultValue=""
          className="dropdown"
        >
          <option value="" disabled>
            Valitse konsultti
          </option>
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
          <p>
            <strong>Nimi:</strong> {selectedConsultant.name}
          </p>
          <p>
            <strong>Osaaminen:</strong> {selectedConsultant.expertise}
          </p>
          <p>
            <strong>Teknologia:</strong> {selectedConsultant.technology}
          </p>
          <p>
            <strong>Kokemus:</strong> {selectedConsultant.year}
          </p>
          <p>
            <strong>Koulutus:</strong> {selectedConsultant.education.degree},{' '}
            {selectedConsultant.education.program} ({selectedConsultant.education.graduationYear})
          </p>
          <p>
            <strong>Sertifikaatit:</strong> {selectedConsultant.certifications.join(', ')}
          </p>
          <p>
            <strong>Projektit:</strong> {selectedConsultant.projects.join(', ')}
          </p>
          <p>
            <strong>Työkokemus:</strong> {selectedConsultant.workExperience}
          </p>
          <button onClick={handlePrintSelected} className="print-button">
            Tulosta PDF
          </button>
        </div>
      )}

      {/* Kaikkien konsulttien tulostus */}
      <div className="dashboard-section">
        <h2>Raportointi</h2>
        <button onClick={handlePrintAll} className="print-button">
          Tulosta Tiimi PDF
        </button>
      </div>
    </div>
  );
};

export default Dashboard;