import { NavLink } from "react-router-dom";


const Banner = () => {
    return (
                <div className="card card-side bg-base-300 p-2 items-center ">
        
        <div className="card-body">
            <h2 className="card-title text-4xl">Books to freshen up your bookshelf</h2>  <br /> 
            <div className="card-actions">
            <NavLink className="btn btn-primary bg-[#23BE0A] text-white" to="/Listed">View the List</NavLink>
            </div>
        </div>
        <figure className="w-2/4 rounded-xl"><img src="https://i.ibb.co/ZgYwtf8/image.png" alt="Movie"/></figure>
        </div>
    );
};

export default Banner;