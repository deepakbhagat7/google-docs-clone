import React, { useState } from 'react';

const FontDropdown = () => {
  const [selectedFont, setSelectedFont] = useState('Geneva');

  const handleFontChange = (event) => {
    setSelectedFont(event.target.value);
  };

  return (
    <div>
     
      <select id="fontDropdown" value={selectedFont} onChange={handleFontChange}>
        <option value="Arial">Arial</option>
        <option value="Verdana">Verdana</option>
        <option value="Helvetica">Helvetica</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Courier New">Courier New</option>
        <option value="Geneva">Geneva</option>
        <option value="Calibri">Calibri</option>
        <option value="Optima">Optima</option>
        <option value="Perpetua ">Perpetua </option>
        <option value="Didot">Didot</option>
      </select>
    </div>
  );
};

export default FontDropdown;
