import React from 'react';
import { Page, Text, View, Document, PDFDownloadLink } from '@react-pdf/renderer';

const PDFTeam = ({ consultants }) => {
  const TeamDocument = () => (
    <Document>
      <Page size="A4" style={{ padding: 20 }}>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>Konsulttitiimin tiedot</Text>
        {consultants.map((consultant) => (
          <View key={consultant.id} style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 16 }}>{consultant.name}</Text>
            <Text>Osaaminen: {consultant.expertise}</Text>
            <Text>Teknologia: {consultant.technology}</Text>
            <Text>Kokemus: {consultant.year}</Text>
            <Text>
              Koulutus: {consultant.education.degree}, {consultant.education.program} (
              {consultant.education.graduationYear})
            </Text>
          </View>
        ))}
      </Page>
    </Document>
  );

  return (
    <PDFDownloadLink
      document={<TeamDocument />}
      fileName="Tiimi_Tiedot.pdf"
      className="print-button"
    >
      {({ loading }) => (loading ? 'Ladataan PDF...' : 'Lataa Tiimin PDF')}
    </PDFDownloadLink>
  );
};

export default PDFTeam;
