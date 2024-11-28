import React from 'react';
import { Document, Page, Text, Image, StyleSheet } from '@react-pdf/renderer';
import consultants from './consultantsData'; // Tuodaan konsulttien tiedot

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
    marginBottom: 10,
  },
  bodyText: {
    fontSize: 12,
    marginBottom: 5,
  },
  logo: {
    width: 100, 
    height: 'auto',
    marginBottom: 15,
  },
});

const ConsultantCVs = () => {
  return (
    <Document>
      {consultants.map((consultant) => (
        <Page key={consultant.id} style={styles.page}>
          
          <Image style={styles.logo} src="/image.png" />
          
          
          <Text style={styles.header}>{consultant.name}</Text>

          
          <Text style={styles.bodyText}>Osaaminen: {consultant.expertise}</Text>
          <Text style={styles.bodyText}>Teknologia: {consultant.technology}</Text>
          <Text style={styles.bodyText}>Kokemus: {consultant.year}</Text>
          <Text style={styles.bodyText}>
            Koulutus: {consultant.education.degree}, {consultant.education.program} ({consultant.education.graduationYear})
          </Text>
          <Text style={styles.bodyText}>Sertifikaatit: {consultant.certifications.join(', ')}</Text>
          <Text style={styles.bodyText}>Projektit: {consultant.projects.join(', ')}</Text>
          <Text style={styles.bodyText}>Työkokemus: {consultant.workExperience}</Text>
        </Page>
      ))}
    </Document>
  );
};

export default ConsultantCVs;
