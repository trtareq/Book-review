import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedBooks from "../Featuredbook/FeaturedBooks";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedBooks></FeaturedBooks>
        </div>
    );
};

export default Home;