import React from 'react';
import { Page, Text, View, Document, PDFDownloadLink } from '@react-pdf/renderer';

const PDFConsultant = ({ consultant }) => {
  if (!consultant) return null; // Jos konsulttia ei ole valittu, ei renderöidä mitään

  const ConsultantDocument = () => (
    <Document>
      <Page size="A4" style={{ padding: 20 }}>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>Konsultin tiedot</Text>
        <Text>Nimi: {consultant.name}</Text>
        <Text>Osaaminen: {consultant.expertise}</Text>
        <Text>Teknologia: {consultant.technology}</Text>
        <Text>Kokemus: {consultant.year}</Text>
        <Text>
          Koulutus: {consultant.education.degree}, {consultant.education.program} (
          {consultant.education.graduationYear})
        </Text>
        <Text>Sertifikaatit: {consultant.certifications.join(', ')}</Text>
        <Text>Projektit: {consultant.projects.join(', ')}</Text>
        <Text>Työkokemus: {consultant.workExperience}</Text>
      </Page>
    </Document>
  );

  return (
    <PDFDownloadLink
      document={<ConsultantDocument />}
      fileName={`${consultant.name}_tiedot.pdf`}
      className="download-button"
    >
      {({ loading }) => (loading ? 'Ladataan PDF...' : 'Lataa PDF')}
    </PDFDownloadLink>
  );
};


export default PDFConsultant;
