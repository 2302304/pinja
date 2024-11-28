import React, { useState } from "react";
import "./AddConsultant.css"; // Lisää tyylit

const AddConsultant = ({ addConsultant, closeModal }) => {
  const [newConsultant, setNewConsultant] = useState({
    name: "",
    educationLevel: "",
    educationProgram: "",
    graduationYear: "",
    certificates: "",
    courses: "",
    projectExperience: "",
    techExperience: "",
    workExperienceYears: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewConsultant((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddConsultant = (e) => {
    e.preventDefault();

    // Lisätään konsultti ja muokataan kenttien sisältöjä, kuten sertifikaatteja ja kursseja
    const formattedConsultant = {
      ...newConsultant,
      certificates: newConsultant.certificates.split(",").map((cert) => cert.trim()),
      courses: newConsultant.courses.split(",").map((course) => course.trim()),
      projectExperience: newConsultant.projectExperience.split(",").map((proj) => proj.trim()),
      techExperience: newConsultant.techExperience.split(",").map((tech) => tech.trim()),
      id: Date.now(), // Unik ID
    };

    // Lähetetään lisätty konsultti takaisin pääkomponenttiin
    addConsultant(formattedConsultant);

    closeModal(); // Sulkee modal
    // Tyhjennetään lomakekentät
    setNewConsultant({
      name: "",
      educationLevel: "",
      educationProgram: "",
      graduationYear: "",
      certificates: "",
      courses: "",
      projectExperience: "",
      techExperience: "",
      workExperienceYears: "",
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal large-modal"> {/* Suurempi modal-luokka */}
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
            name="educationLevel"
            placeholder="Koulutustaso"
            value={newConsultant.educationLevel}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="educationProgram"
            placeholder="Koulutusohjelma"
            value={newConsultant.educationProgram}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="graduationYear"
            placeholder="Valmistumisvuosi"
            value={newConsultant.graduationYear}
            onChange={handleInputChange}
          />
          <textarea
            name="certificates"
            placeholder="Sertifikaatit (erota pilkulla)"
            value={newConsultant.certificates}
            onChange={handleInputChange}
          />
          <textarea
            name="courses"
            placeholder="Käydyt kurssit (erota pilkulla)"
            value={newConsultant.courses}
            onChange={handleInputChange}
          />
          <textarea
            name="projectExperience"
            placeholder="Projektikokemus (erota pilkulla)"
            value={newConsultant.projectExperience}
            onChange={handleInputChange}
          />
          <textarea
            name="techExperience"
            placeholder="Teknologiakokemus (erota pilkulla)"
            value={newConsultant.techExperience}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="workExperienceYears"
            placeholder="Työkokemus (vuosina)"
            value={newConsultant.workExperienceYears}
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
