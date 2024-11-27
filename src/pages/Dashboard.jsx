import React, { useState } from 'react';
import './Dashboard.css';
import consultants from '../data/consultantsData';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ConsultantCV from '../components/ConsultantCV'; // Tuodaan yksittäisen konsultin CV
import ConsultantCVs from '../components/ConsultantCVs'; // Tuodaan kaikkien konsulttien CV

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

          {/* Latauspainike yksittäiselle konsultille */}
          <PDFDownloadLink
            document={<ConsultantCV consultant={selectedConsultant} />}
            fileName={`${selectedConsultant.name}-CV.pdf`}
            className="print-button"
          >
            {({ loading }) => (loading ? "Ladataan..." : "Lataa CV PDF:nä")}
          </PDFDownloadLink>
        </div>
      )}

      {/* Kaikkien konsulttien lataus */}
      <div className="dashboard-section">
        <h2>Raportointi</h2>
        <PDFDownloadLink
          document={<ConsultantCVs />}
          fileName="kaikkien-konsulttien-CV.pdf"
          className="print-button"
        >
          {({ loading }) => (loading ? "Ladataan..." : "Lataa kaikkien konsulttien CV:t PDF:nä")}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default Dashboard;
