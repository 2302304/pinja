import React from 'react';
import { Document, Page, Text, StyleSheet } from '@react-pdf/renderer';
import consultants from '../data/consultantsData'; // Tuodaan konsulttien tiedot

// Tyylit ilman erillistä css 
const styles = StyleSheet.create({
  page: {
    padding: 10,
    fontFamily: 'Helvetica',
  },
  section: {
    marginBottom: 15,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bodyText: {
    fontSize: 12,
  },
});

const ConsultantCVs = () => {
  return (
    <Document>
      {consultants.map((consultant) => (
        <Page key={consultant.id} style={styles.page}>
          <Text style={styles.header}>{consultant.name}</Text>
          <Text style={styles.bodyText}><strong>Osaaminen:</strong> {consultant.expertise}</Text>
          <Text style={styles.bodyText}><strong>Teknologia:</strong> {consultant.technology}</Text>
          <Text style={styles.bodyText}><strong>Kokemus:</strong> {consultant.year}</Text>
          <Text style={styles.bodyText}><strong>Koulutus:</strong> {consultant.education.degree}, {consultant.education.program} ({consultant.education.graduationYear})</Text>
          <Text style={styles.bodyText}><strong>Sertifikaatit:</strong> {consultant.certifications.join(', ')}</Text>
          <Text style={styles.bodyText}><strong>Projektit:</strong> {consultant.projects.join(', ')}</Text>
          <Text style={styles.bodyText}><strong>Työkokemus:</strong> {consultant.workExperience}</Text>
        </Page>
      ))}
    </Document>
  );
};

export default ConsultantCVs;
