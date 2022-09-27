import React from "react";
import "./app.css";
import Barcode from "./components/brcode/Barcode";
import PdfPrint from "./components/pdf-print/PdfPrint";
import Qrcode from "./components/qrcode/Qrcode";

const App = () => {
  return (
    <div>
      {/* <PdfPrint /> */}
      {/* <Qrcode /> */}
      <Barcode />
    </div>
  );
};

export default App;
