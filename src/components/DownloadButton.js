import React from 'react';

const DownloadButton = ({ purchaseResult, fileName }) => {
  const downloadFile = () => {
    const json = JSON.stringify(purchaseResult, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button onClick={downloadFile}><i class="fa-solid fa-file-arrow-down"></i>  Descargar comprobante</button>
  );
};

export default DownloadButton;