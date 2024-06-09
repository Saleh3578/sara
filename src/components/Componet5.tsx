import "../styles/globals.css";
interface Textform {
  text: string | number;
  Title: string | number;
}
export default function Compon5({ text, Title }: Textform) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "12%",
        height: "170px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: "145px",
          height: "170px",
          marginLeft: "32px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            border: "20px",
            backgroundColor: "#009688",
            paddingTop: "113px",
            width: "170px",
            height: "120px",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            flexDirection: "column",

            width: "100%",
          }}
        >
          <h2>{text}</h2>
          <p>{Title}</p>
        </div>
      </div>
    </div>
  );
}
