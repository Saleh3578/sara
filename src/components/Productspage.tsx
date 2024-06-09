import TableProducts from "@/components/Products";
import { CgNotes } from "react-icons/cg";
import { IoPeopleSharp } from "react-icons/io5";
import { FaFolder } from "react-icons/fa6";
import { RiDashboardFill } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import { HiOutlineLink } from "react-icons/hi2";
import { FaBagShopping } from "react-icons/fa6";
import { FaFaceFrown } from "react-icons/fa6";
import { BiSolidMessageRounded } from "react-icons/bi";
export default function products() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-evenly",
        width: "95%",
        height: "200px",
        borderRadius: "18px",
        boxShadow: "2px 2px 3px rgba(128, 128, 128, 0.265)",
        margin: "30px",
        paddingTop: "20px",
        backgroundColor: "white",
      }}
    >
      <TableProducts text={"مدیریت آگهی"} icon={<CgNotes />} />
      <TableProducts text={"روایط عمومی"} icon={<IoPeopleSharp />} />
      <TableProducts text={"مدیریت وظایف"} icon={<FaFolder />} />
      <TableProducts text={"داشورد راهکار"} icon={<RiDashboardFill />} />
      <TableProducts text={"داشورد راهکار"} icon={<FaCalendarAlt />} />
      <TableProducts text={"داشورد راهکار"} icon={<HiOutlineLink />} />
      <TableProducts text={"مدیریت وظایف"} icon={<FaBagShopping />} />
      <TableProducts text={"مدیریت وظایف"} icon={<FaFaceFrown />} />
      <TableProducts text={"مدیریت وظایف"} icon={<BiSolidMessageRounded />} />
    </div>
  );
}
