import React from 'react';

const ProfessionalBadgeIcon = () => {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
    >
      {/* Fondo de la insignia */}
      <circle cx="100" cy="100" r="95" fill="#f0f0f0" />

      {/* Forma estilizada del caballo */}
      <path
        d="M100 160 C70 130, 130 130, 100 100 C70 130, 130 130, 100 160"
        fill="#8b4513"
      />

      {/* Cabeza del caballo */}
      <circle cx="100" cy="80" r="20" fill="#8b4513" />

      {/* Ojos del caballo */}
      <circle cx="95" cy="75" r="2" fill="#000" />

      {/* Cabello estilizado del caballo */}
      <path d="M90 65 Q 100 60 110 65" fill="#000" />

      {/* Maleta estilizada */}
      <rect x="70" y="110" width="60" height="40" fill="#333" />

      {/* Detalles de la maleta */}
      <rect x="75" y="115" width="50" height="30" fill="#555" />
      <line x1="85" y1="125" x2="115" y2="125" stroke="#fff" strokeWidth="2" />
    </svg>
  );
};

export default ProfessionalBadgeIcon;
