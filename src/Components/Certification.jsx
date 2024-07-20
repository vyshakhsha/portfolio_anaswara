import React from "react";
import { CertificateData } from "../Data/Data";

function Certification() {
  return (
    <div className="certificate-container">
      <h2>Certifications</h2>
      <div className="certificate">
        {CertificateData.map((CertificateData, index) => (
          <div className="certificate-item" key={index}>
            <img
              className="certificate-img"
              src={CertificateData.imageUrl}
              alt="logo"
            />
            <div className="certificate-details">
              <p className="certificate-name">{CertificateData.name}</p>
              <p className="certificate-issuer">{CertificateData.issuer}</p>
              <p className="certificate-date">{CertificateData.date}</p>
              {CertificateData.url && (
                <button
                  onClick={() => window.open(CertificateData.url, "_blank")}
                  className="btn-credential"
                >
                  Show Credential
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certification;
