import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Tag from "../Book/Tag";
import { saveBook } from "../../utility/localstorage";
import { useState } from "react";

const BookDetails = () => {
    const books = useLoaderData();
    // console.log(books);
    const {id} = useParams();
    // console.log(id);
    const idInt = parseInt(id);
    const book = books.find(book => book.bookId === idInt);
    // console.log(book); 
    const [tastN, settasteN] = useState(true);



    const handleApplybook = () =>{
        saveBook(idInt);
        toast('Successfully added to read Section');
        settasteN(false);
        console.log(tastN);
    }
    const notify = ()=>{
        if(!tastN){
            toast("Already added in read");

        }
         else toast("Wishlist added");
    }
    
    return (
                <div className="card gap-5 mt-5 p-2 card-side bg-base-100">
        <figure className="rounded-xl "><img src={book.image} alt="Movie"/></figure>
        <div className="card-body">
            <h2 className="card-title text-4xl font-bold">{book.bookName}</h2>
            <p className="border-b-2"> By : {book.author}</p>
            <p className="border-b-2">{book.category}</p>
            <p><span className="font-bold">Review : </span>{book.review}</p>
            <div className="flex gap-3">{
                book.tags.map((tag)=> <Tag key={book.bookId} tag={tag} ></Tag>)
             }</div>
            <div className="grid border-t-2 grid-cols-2">
                <p>Number of page :</p>
                <p className="font-bold">{book.totalPages}</p>
                <p>Publisher :</p>
                <p className="font-bold">{book.publisher}</p>
                <p >Year of Publishing : </p>
                <p className="font-bold">{book.yearOfPublishing}</p>
                <p>Rating : </p>
                <p className="font-bold">{book.rating}</p>
            </div>
            <div className="card-actions">
            <button onClick={handleApplybook} className="btn hover:bg-red-100 rounded-xl btn-primary text-black bg-[#FFFFFF]">Read</button>
            <button onClick={notify} className="btn text-white rounded-xl btn-primary hover: hover:bg-red-100 bg-[#50B1C9]">Wishlist</button>
            </div>
        </div>
        <ToastContainer/>
        </div>
        
    );
};

export default BookDetails;