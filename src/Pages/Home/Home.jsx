import Features from "../../Components/Features/Features";
import Banner from "../../Components/Header/Banner/Banner";
import Team from "../../Components/Team/Team";
import About from "../About/About";
import Products from "../Products/Products";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>   
       <Banner></Banner>
       <About></About>
       <Services></Services>
       <Products></Products>
       <Team></Team>
       <Features></Features>
        </div>
    );
};

export default Home;