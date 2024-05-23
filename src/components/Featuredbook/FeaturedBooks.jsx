import { useEffect, useState } from "react";
import Book from "../Book/Book";



const FeaturedBooks = () => {
    const [books, setBooks] = useState([]);

    

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])


    return (
        <div>
            <div className="grid lg:grid-cols-3 gap-6 ">
                {
                    books.map( (book , idx) => <Book key={idx}
                     book={book}>
                    </Book>
                         )
                }
            </div>
            
        </div>
    );
};

export default FeaturedBooks;