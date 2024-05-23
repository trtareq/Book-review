import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom"; 
import { getStoredBook } from "../../utility/localstorage";
import ListedBookDetails from "./ListedBookDetails";
import { NavLink } from "react-router-dom";

const ListedBooks = () => {
    const books = useLoaderData();

    const [bookSaved, setBookSaved] = useState([]);
    const [displayBooks, setDisplayBooks] = useState([]);

    useEffect(() => {
        const storedbookIds = getStoredBook();
        console.log(books);
        if (books.length > 0 && Array.isArray(storedbookIds)) {
            const booksApplied = [];
            for (const id of storedbookIds) {
                const book = books.find(book => book.bookId === id);
                if (book) {
                    booksApplied.push(book);
                }
            }
            setBookSaved(booksApplied);
            setDisplayBooks(booksApplied);
            // console.log(books, storedbookIds, booksApplied);
        }
    }, [books]);
    const handleBooksFilter = (filter) => {
        let sortedBooks = [...bookSaved];

        if (filter === 'pages') {
            sortedBooks.sort((a, b) => {
                return b.totalPages - a.totalPages;
            });
        } else if (filter === 'year') {
            sortedBooks.sort((a, b) => {
                return b.yearOfPublishing - a.yearOfPublishing;
            });
        } else if (filter === 'rating') {
            sortedBooks.sort((a, b) => b.rating - a.rating);
        }


        setDisplayBooks(sortedBooks);
    };

    return (
        <div>
            <h2 className="text-4xl text-center p-5 bg-slate-100 font-extrabold">Books</h2>

                        <div className="dropdown dropdown-hover item-center text-white  bg-[#23BE0A]">
            <div tabIndex={0} role="button" className="btn m-1  bg-[#23BE0A]">Sort By</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow  bg-[#23BE0A] rounded-box w-52">
            <li onClick={() => handleBooksFilter('pages')}><a>Number of Pages</a></li>
                    <li onClick={() => handleBooksFilter('year')}><a>Published Year</a></li>
                    <li onClick={() => handleBooksFilter('rating')}><a>Rating</a></li>
            </ul>
            </div>
             
             <div className="btn flex gap-10">
                <NavLink to="/read">Read</NavLink>
               <NavLink to="/wishlist">Wishlist</NavLink></div>

            <div className="grid gap-6 ">
            {
                    displayBooks.map( (book , idx) => <ListedBookDetails key={idx}
                    book={book}>
                   </ListedBookDetails>
                   
                        )
                }
            </div>
            
                
            
        </div>
    );
};

export default ListedBooks;
