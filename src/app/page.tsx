import Header from "@/components/Header";
import ProductsPage from "@/components/Productspage";
import Fanctionpage from "@/components/Factionpage";
import Publicpage from "@/components/Publicitypage";
export default function Home() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <div className="componet3">
          <h1>محصولات</h1>
          <h2>مشاهده همه</h2>
        </div>
        <ProductsPage />
      </div>
      <div>
        <div className="componet3">
          <h1>ویجت ها</h1>
          <h2>مشاهده همه</h2>
        </div>
        <Fanctionpage />
      </div>
      <div>
        <div className="componet3">
          <h1>آگهی ها</h1>
          <h2>مشاهده همه</h2>
        </div>
        <Publicpage />
      </div>
    </>
  );
}
