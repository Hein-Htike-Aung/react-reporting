import React, { useState } from "react";
import "./qrcode.css";
import QRCode from "qrcode";

const Qrcode = () => {
  const [data, setData] = useState("");
  const [qr, setQr] = useState("");

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      data,
      {
        width: 100,
        margin: 2,
        // color: {
        //   dark: "#335383FF",
        //   light: "#EEEEEEFF",
        // },
      },
      (err, url) => {
        if (err) return console.error(err);

        setQr(url);
      }
    );
  };
  return (
    <div>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={GenerateQRCode}>Generate</button>
      <div>
        {qr && (
          <>
            <img src={qr} alt="" />
            <img src={qr} alt="" />
            <img src={qr} alt="" />
            <a href={qr} download="qrcode.png">
              Download
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default Qrcode;
