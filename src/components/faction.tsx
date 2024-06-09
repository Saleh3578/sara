import "../styles/globals.css";
interface Texbot {
  buttonName: string;
}
export default function Factioneddddddd({ buttonName }: Texbot) {
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
