import { getBooks } from "../page"

export const revalidate = 30

export default async function BookId({ 
    params,
}: { 
    params: { id : string } 
}) {
    const bookId = params.id;
    const booksData = await getBooks();
    const books = booksData.props.books;
    const selectedBook = books.find((book:any) => String(book.id) === bookId);


    return (
        <div>
          {selectedBook ? (
            <div>
              <h1>{selectedBook.title}</h1>
              <p>Pages: {selectedBook.pages}</p>
              <p>Language: {selectedBook.language}</p>
            </div>
          ) : (
            <div>Loading...</div>
          )}

        <a href="/booksList"> back to list </a>

        </div>
        
        
      );
    }


