import PropTypes from 'prop-types';
import Tag from '../Book/Tag';

const ListedBookDetails = ({book}) => {
    // console.log(book);
    const {  bookName, author, image, rating, category, tags} = book;
    // console.log(bookName);
    return (
        <div className="card gap-5 max-h-[412px] mt-5 p-2 card-side bg-base-100 border-2 rounded-xl">
        <figure className="rounded-xl  "><img src={image} alt="Movie"/></figure>
        <div className="card-body">
            <h2 className="card-title text-4xl font-bold">{bookName}</h2>
            <p className="border-b-2"> By : {author}</p>
            <p className="border-b-2">{category}</p>
            
            <div className="flex gap-3">{
                tags.map((tag,idx)=> <Tag key={idx} tag={tag} ></Tag>)
             }</div>
            <div className="grid border-t-2 grid-cols-2">
                <p>Number of page :</p>
                <p className="font-bold">{book.totalPages}</p>
                <p>Publisher :</p>
                <p className="font-bold">{book.publisher}</p>
                <p >Year of Publishing : </p>
                <p className="font-bold">{book.yearOfPublishing}</p>
                <p>Rating : </p>
                <p className="font-bold">{rating}</p>
            </div>
            <div className="card-actions">
            <button className="border-2 text-black rounded-xl  hover: hover:bg-red-100 text-xs  p-2 bg-[#50B1C9]"> Category :  {category}</button>
            <button className="border-2 text-black rounded-xl  hover: hover:bg-red-100 text-xs  p-2 bg-yellow-300"> Rating :  {rating}</button>
            <button className="border-2 text-black rounded-xl  hover: hover:bg-red-100 text-xs  p-2 bg-green-300">View Details</button>
            </div>
        </div>
        
        </div>
    );
};

ListedBookDetails.propTypes = {
    book: PropTypes.object
  };

export default ListedBookDetails;