import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 12,
    lineHeight: 1.5,
  },
  section: {
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  text: {
    marginBottom: 5,
  },
});

const PDFConsultant = ({ consultant }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Konsultin Tiedot</Text>
        <Text style={styles.text}>Nimi: {consultant.name}</Text>
        <Text style={styles.text}>Osaaminen: {consultant.expertise}</Text>
        <Text style={styles.text}>Teknologia: {consultant.technology}</Text>
        <Text style={styles.text}>Kokemus: {consultant.year}</Text>
        <Text style={styles.text}>
          Koulutus: {consultant.education.degree}, {consultant.education.program} ({consultant.education.graduationYear})
        </Text>
        <Text style={styles.text}>
          Sertifikaatit: {consultant.certifications.join(', ')}
        </Text>
        <Text style={styles.text}>
          Projektit: {consultant.projects.join(', ')}
        </Text>
        <Text style={styles.text}>Työkokemus: {consultant.workExperience}</Text>
      </View>
    </Page>
  </Document>
);

export default PDFConsultant;
