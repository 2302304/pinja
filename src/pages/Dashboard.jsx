import React, { useState } from 'react';
import './Dashboard.css';
import consultants from '../components/consultantsData'; // Konsulttidata tuodaan vain kerran tänne
import { PDFDownloadLink } from '@react-pdf/renderer';
import ConsultantCV from '../components/ConsultantCV'; // Yksittäisen konsultin CV
import ConsultantCVs from '../components/ConsultantCVs'; // Tiimi-CV

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
            {({ loading }) => (loading ? "Ladataan..." : "Lataa CV")}
          </PDFDownloadLink>
        </div>
      )}

      {/* Kaikkien konsulttien lataus */}
      <div className="dashboard-section">
        <h2>Raportointi</h2>
        <PDFDownloadLink
        document={<ConsultantCVs consultants={consultants} />} 
        fileName="Tiimi-CV.pdf"
        className="print-button"
        >
        {({ loading }) => (loading ? "Ladataan..." : "Lataa tiimi CV")}
        </PDFDownloadLink>

      </div>
    </div>
  );
};

export default Dashboard;
