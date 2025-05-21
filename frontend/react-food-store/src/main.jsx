import ReactDOM from "react-dom/client"
import "./style.css"
import Header from "./component temp/Header/Header";
import ProductLayout from "./component temp/ProductLayout/ProductLayout";
import Footer from "./component temp/Footer/Footer";


const Home = () => {
  return (
    <>
    <Header/>
    <ProductLayout/>
    <Footer/>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home/>)
