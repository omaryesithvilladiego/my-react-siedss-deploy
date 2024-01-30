import React from 'react';

const ProfessionalInvitationIcon = () => {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
    >
      {/* Fondo dorado */}
      <rect width="100%" height="100%" fill="#ffd700" />

      {/* Detalles decorativos */}
      <circle cx="50%" cy="50%" r="25" fill="#ffcc00" />

      {/* Explosión de conocimiento */}
      <polygon points="30,38 40,20 50,38" fill="#ffcc00" />
      <polygon points="40,48 50,30 60,48" fill="#ffcc00" />

      {/* Detalles de la carta */}
      <rect x="22" y="30" width="20" height="30" fill="#fff" />
      <line x1="22" y1="30" x2="42" y2="30" stroke="#ffcc00" strokeWidth="2" />
      <rect x="24" y="33" width="16" height="24" fill="#ffcc00" />
      <circle cx="32" cy="47" r="2" fill="#fff" />

      {/* Detalles adicionales */}
      <line x1="27" y1="38" x2="37" y2="38" stroke="#fff" strokeWidth="1" />
      <line x1="27" y1="42" x2="37" y2="42" stroke="#fff" strokeWidth="1" />
      <line x1="27" y1="46" x2="37" y2="46" stroke="#fff" strokeWidth="1" />

    </svg>
  );
};

export default ProfessionalInvitationIcon;
