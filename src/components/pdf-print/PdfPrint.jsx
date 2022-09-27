import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./pdf-print.css";

const PdfPrint = () => {
  const targetRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => targetRef.current,
    documentTitle: "emp_data",
    onafterprint: () => alert("print success"),
  });

  const handleDownload = () => {
    const element = targetRef.current;

    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const doc = new jsPDF("p", "mm", "a4");

      const imgWidth = 208;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const position = 0;
      doc.addImage(imgData, 0, position, imgWidth, imgHeight);

      doc.save("image.pdf");
    });
  };

  return (
    <div className="pdfprint">
      <button onClick={handlePrint}>Print</button>
      <button onClick={handleDownload}>Download</button>
      <div ref={targetRef}>
        <h1>Employee data</h1>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John</td>
              <td>john@gmail.com</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Merry</td>
              <td>merry@gmail.com</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Jane</td>
              <td>jane@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PdfPrint;
