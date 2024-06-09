import "../styles/globals.css";
import { LuMenu } from "react-icons/lu";
import { FaBell } from "react-icons/fa";

export default function HederPage({}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row-reverse",
        justifyContent: "space-evenly",
        borderRadius: "8px",
        border: "20px",
        width: "97%",
        height: "75px",
        backgroundColor: "white",
        boxShadow: "2px 2px 3px rgba(128, 128, 128, 0.265)",
      }}
    >
      <div className="sid menu">
        <LuMenu style={{ fontSize: "50px", padding: "20px" }} />
      </div>

      <button
        style={{
          fontSize: "35px ",
          width: "110px",
          height: "60px",
        }}
      >
        خبرها
      </button>
      <p
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "25px",
          borderLeft: "1px solid",
          minWidth: "170px",
          paddingLeft: "26px",
        }}
      >
        سلام;خوش آمدید
      </p>
      <p style={{ fontSize: "30px", minWidth: "120px" }}>شنبه 2 فروردین</p>
      <form
        style={{
          fontSize: "30px",
          borderRadius: "8px",
          border: "1px solid black",
          width: "300px",
          height: "50px",
        }}
        action="https://www.google.com/;"
      >
        <input
          style={{
            width: "300px",
            height: "50px",
            borderRadius: "8px",
            fontSize: "20px",
          }}
          placeholder="...دنبال چه میگردی"
          type="search"
        />
      </form>
      <FaBell style={{ fontSize: "50px" }} />
      <img
        style={{
          widows: "50px",
          height: "50px",
          border: "2px solid",
          color: "#009688",
          borderRadius: "50%",
        }}
        src="img.jpg"
        alt="Error"
      />
    </div>
  );
}
