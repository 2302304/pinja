import React, { useState } from "react";
import "./Addconsultant.css"; // Lisää tyylit

const AddConsultant = ({ addConsultant, closeModal }) => {
  const [newConsultant, setNewConsultant] = useState({
    name: "",
    expertise: "", // Osaaminen
    technology: "", // Teknologia
    year: "", // Kokemus
    education: {
      degree: "", // Koulutustaso
      program: "", // Koulutusohjelma
      graduationYear: "", // Valmistumisvuosi
    },
    certifications: "", // Sertifikaatit
    projects: "", // Projektit
    workExperience: "", // Työkokemus
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Päivitä lomakkeen tietorakenne
    if (name.includes("education.")) {
      const [_, key] = name.split(".");
      setNewConsultant((prev) => ({
        ...prev,
        education: {
          ...prev.education,
          [key]: value,
        },
      }));
    } else {
      setNewConsultant((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleAddConsultant = (e) => {
    e.preventDefault();

    // Muokataan kenttien sisältöjä, kuten sertifikaatteja ja projekteja
    const formattedConsultant = {
      ...newConsultant,
      certifications: newConsultant.certifications.split(",").map((cert) => cert.trim()),
      projects: newConsultant.projects.split(",").map((proj) => proj.trim()),
      id: Date.now(), // Unik ID
    };

    // Lähetetään lisätty konsultti pääkomponenttiin
    addConsultant(formattedConsultant);

    // Päivitetään localStorage
    const currentConsultants = JSON.parse(localStorage.getItem("consultants")) || [];
    currentConsultants.push(formattedConsultant);
    localStorage.setItem("consultants", JSON.stringify(currentConsultants));

    // Tyhjennetään lomake ja suljetaan modal
    closeModal();
    setNewConsultant({
      name: "",
      expertise: "",
      technology: "",
      year: "",
      education: { degree: "", program: "", graduationYear: "" },
      certifications: "",
      projects: "",
      workExperience: "",
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal large-modal">
        <h3>Lisää uusi konsultti</h3>
        <form onSubmit={handleAddConsultant}>
          <input
            type="text"
            name="name"
            placeholder="Nimi"
            value={newConsultant.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="expertise"
            placeholder="Osaaminen"
            value={newConsultant.expertise}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="technology"
            placeholder="Teknologia"
            value={newConsultant.technology}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="year"
            placeholder="Kokemus (esim. 5 vuotta)"
            value={newConsultant.year}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="education.degree"
            placeholder="Koulutustaso"
            value={newConsultant.education.degree}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="education.program"
            placeholder="Koulutusohjelma"
            value={newConsultant.education.program}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="education.graduationYear"
            placeholder="Valmistumisvuosi"
            value={newConsultant.education.graduationYear}
            onChange={handleInputChange}
          />
          <textarea
            name="certifications"
            placeholder="Sertifikaatit (erota pilkulla)"
            value={newConsultant.certifications}
            onChange={handleInputChange}
          />
          <textarea
            name="projects"
            placeholder="Projektit (erota pilkulla)"
            value={newConsultant.projects}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="workExperience"
            placeholder="Työkokemus (esim. Started in 2016)"
            value={newConsultant.workExperience}
            onChange={handleInputChange}
          />
          <div className="modal-buttons">
            <button type="submit" className="save-btn">Tallenna</button>
            <button
              type="button"
              onClick={closeModal}
              className="cancel-btn"
            >
              Peruuta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddConsultant;
