import { CiStar } from "react-icons/ci";

import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Tag from "./Tag";


const Book = ({ book }) => {
    // console.log(book);
    const { bookId, bookName, author, image, rating, category, tags} = book;
    // console.log(bookName);
    return (
              <Link to={`/book/${bookId}`}>
              
              <div className="p-2 h-auto w-96 rounded-xl border hover:bg-green-100">
                 <div className="card   bg-base-100 ">
        <figure  className=""><img src={image} alt="Shoes" /></figure>
        <div className="card-body grow">
             <div className="flex gap-5 ">
             {
                tags.map((tag)=><Tag key={bookId} tag={tag} ></Tag>)
             }
             </div>
            <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
            </h2>
            <p className="text-xs" >By : {author}</p>
            <div className="card-actions text-xs border-t-2 border-dashed   justify-between">
            <div className="">{category}</div> 
            <div className="flex items-center gap-2">{rating}<CiStar /></div>
            </div>
        </div>
        </div>
               </div>
              </Link>
    );
};
Book.propTypes = {
    book: PropTypes.object
  };
export default Book;