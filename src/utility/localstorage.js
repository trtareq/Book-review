const getStoredBook = () =>{
    const storedBook = localStorage.getItem('book-saved');
    if(storedBook){
        return JSON.parse(storedBook);
    }
    return [];
}


const saveBook = id =>{
    const storedBooks = getStoredBook();
    const exists = storedBooks.find(jobId => jobId === id);
    if(!exists){
        storedBooks.push(id);
        localStorage.setItem('book-saved', JSON.stringify(storedBooks))
    }
}

export { getStoredBook, saveBook}