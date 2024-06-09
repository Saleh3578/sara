import { ReactNode } from "react";
import "../styles/globals.css";

interface ProductProps {
  text: string;
  icon: ReactNode;
}

export default function TableProducts({ text, icon }: ProductProps) {
  return (
    <>
      <div className="tablepro">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "45px",
            border: "10px",
            borderRadius: "15px",
            width: "120px",
            height: "120px",
            backgroundColor: "#009688",
          }}
        >
          {icon}
        </div>
        <p style={{ fontSize: "20px" }}>{text}</p>
      </div>
    </>
  );
}
