import "../styles/globals.css";
interface Text {
  buttonName: string | number;
}
export default function publicate({ buttonName }: Text) {
  return (
    <div>
      <button
        style={{
          width: "160px",
          height: "45px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "20px",
          borderRadius: "15px",
          backgroundColor: "#009688",
          borderColor: "black",
        }}
      >
        {buttonName}
      </button>
    </div>
  );
}
