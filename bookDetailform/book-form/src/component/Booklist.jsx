import { useSelector } from "react-redux";
function Booklist() {
  const books = useSelector((state) => state.books);
  console.log(books);
  return (
    <div>
      {books.map((book) => (
        <div
          key={book.id}
          style={{
            marginBottom: "2rem",
            border: "2px solid red",
            padding: "2rem",
          }}
        >
          <h2>{book.title}</h2>
          <h3>{book.author}</h3>
          <p>{book.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Booklist;
