import React from "react";
import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer";

// Tyylit PDF:lle
const styles = StyleSheet.create({
  page: {
    padding: 10,
    fontFamily: "Helvetica",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "flex-start", 
    alignItems: "flex-start",    
    marginBottom: 15,
  },
  
  logo: {
    width: 100,
    height: "auto",
    marginBottom: 15,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  bodyText: {
    fontSize: 12,
    marginBottom: 5,
  },
});

const ConsultantCV = ({ consultant }) => (
  <Document>
    <Page style={styles.page}>
      {/* Logo yläreunaan */}
      <View style={styles.logoContainer}>
        <Image style={styles.logo} src="/image.png" />
      </View>
      <View>
        <Text style={styles.header}>{consultant.name}</Text>
        <Text style={styles.bodyText}>Osaaminen: {consultant.expertise}</Text>
        <Text style={styles.bodyText}>Teknologia: {consultant.technology}</Text>
        <Text style={styles.bodyText}>Kokemus: {consultant.year}</Text>
        <Text style={styles.bodyText}>
          Koulutus: {consultant.education.degree}, {consultant.education.program} ({consultant.education.graduationYear})
        </Text>
        <Text style={styles.bodyText}>
          Sertifikaatit: {consultant.certifications.join(", ")}
        </Text>
        <Text style={styles.bodyText}>
          Projektit: {consultant.projects.join(", ")}
        </Text>
        <Text style={styles.bodyText}>Työkokemus: {consultant.workExperience}</Text>
      </View>
    </Page>
  </Document>
);

export default ConsultantCV;
