import React from "react";
import { Page, Text, View, Document } from "@react-pdf/renderer";

const ConsultantCV = ({ consultant }) => (
  <Document>
    <Page style={{ padding: 20 }}>
      <View style={{ marginBottom: 10 }}>
        <Text><strong>{consultant.name}</strong></Text>
        <Text>Koulutustaso: {consultant.educationLevel || "Ei koulutustasoa"}</Text>
        <Text>Koulutusohjelma: {consultant.educationProgram || "Ei koulutusohjelmaa"}</Text>
        <Text>Valmistumisvuosi: {consultant.graduationYear || "Ei valmistumisvuotta"}</Text>
        <Text>Sertifikaatit: {consultant.certificates || "Ei sertifikaatteja"}</Text>
        <Text>Käydyt kurssit: {consultant.courses || "Ei käytyjä kursseja"}</Text>
        <Text>Projektikokemus: {consultant.projectExperience || "Ei projektikokemusta"}</Text>
        <Text>Teknologiakokemus: {consultant.techExperience || "Ei teknologiakokemusta"}</Text>
        <Text>Työkokemus (vuosina): {consultant.workExperienceYears || "Ei työkokemusta"}</Text>
      </View>
    </Page>
  </Document>
);

export default ConsultantCV;
