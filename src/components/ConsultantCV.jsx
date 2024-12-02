import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Tyylit PDF:lle
const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 12,
  },
  header: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
  },
  section: {
    marginBottom: 10,
  },
});

const ConsultantCV = ({ consultant }) => (
  <Document>
    <Page style={styles.page}>
      <View>
        <Text style={styles.header}>{consultant.name}</Text>
        <Text style={styles.section}>Osaaminen: {consultant.expertise}</Text>
        <Text style={styles.section}>Teknologia: {consultant.technology}</Text>
        <Text style={styles.section}>Kokemus: {consultant.year}</Text>
        <Text style={styles.section}>
          Koulutus: {consultant.education.degree}, {consultant.education.program} ({consultant.education.graduationYear})
        </Text>
        <Text style={styles.section}>
          Sertifikaatit: {consultant.certifications.join(", ")}
        </Text>
        <Text style={styles.section}>
          Projektit: {consultant.projects.join(", ")}
        </Text>
        <Text style={styles.section}>Työkokemus: {consultant.workExperience}</Text>
      </View>
    </Page>
  </Document>
);

export default ConsultantCV;
