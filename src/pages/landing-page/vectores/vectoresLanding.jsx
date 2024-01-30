import React from 'react';

const MedalIcon = () => {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="150"
    >
      {/* Fondo del círculo */}
      <circle cx="100" cy="100" r="90" fill="#f7d63d" />

      {/* Cinta de la medalla */}
      <rect x="50" y="130" width="100" height="20" fill="#e23e57" />

      {/* Detalles tecnológicos en la medalla */}
      <circle cx="100" cy="100" r="80" fill="#444" />
      <rect x="30" y="80" width="140" height="40" fill="#555" />
      <polygon points="50,120 100,40 150,120" fill="#555" />

      {/* Estrella en el centro */}
      <polygon
        points="100,25 114,67 160,75 126,109 136,155 100,130 64,155 74,109 40,75 86,67"
        fill="#fff"
      />
    </svg>
  );
};

export default MedalIcon;
