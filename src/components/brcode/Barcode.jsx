import React, { useState } from "react";
import "./barcode.css";
import { useBarcode } from "@createnextapp/react-barcode";

const Barcode = () => {
  const [data, setData] = useState("");

  const { inputRef } = useBarcode(
    data && {
      value: data,
      options: {
        background: "#ffffff",
        fontSize: 20,
        margin: 30,
        fontOptions: "bold",
        width: 1,
        height: 70,
      },
    }
  );

  return (
    <div>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <div>
        <svg ref={inputRef} />
      </div>
    </div>
  );
};

export default Barcode;
