import Factioned from "@/components/faction";

export default function Chart() {
  return (
    <div
      style={{
        width: "96%",
        height: "370px",
        borderRadius: "18px",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        margin: "25px",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "99%",
          height: "100px",
          display: "flex",
          alignItems: "center",
          flexDirection: "row-reverse",
          borderBottom: "2px solid black",
          overflowX: "hidden",
          justifyContent: "space-evenly",
          paddingRight: "5px",
        }}
      >
        <Factioned buttonName="دسته بندی 1" />
        <Factioned buttonName="دسته بندی 2" />
        <Factioned buttonName="دسته بندی 3" />
        <Factioned buttonName="دسته بندی 4" />
        <Factioned buttonName="دسته بندی 5" />
        <Factioned buttonName="دسته بندی 6" />
        <Factioned buttonName="دسته بندی 7" />
        <Factioned buttonName="دسته بندی 8" />
        <Factioned buttonName="دسته بندی 9" />
        <Factioned buttonName="دسته بندی 10" />
        <Factioned buttonName="دسته بندی 11" />
        <Factioned buttonName="دسته بندی 12" />
        <Factioned buttonName="دسته بندی 13" />
      </div>
      <div className="component6">
        <p style={{ fontSize: "30px" }}>کارتابل جاری</p>
      </div>
    </div>
  );
}
