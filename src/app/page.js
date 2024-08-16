  "use client";

  import { useEffect, useState } from "react";

  export default function Books() {
    const [books, setBooks] = useState([]);

    // Kitoblarni olish uchun fetch qilish
    useEffect(() => {
      const fetchBooks = async () => {
        try {
          const res = await fetch("https://json-api.uz/api/project/Kitoblar%20Markazi/books");
          const data = await res.json();
          console.log(data);
          setBooks(data.data);
        } catch (err) {
          console.error(err); 
        }
      };
      

      fetchBooks();
    }, []);

    return (
      <div className="w-full max-w-4xl mx-auto mt-10">
        <h1 className="text-3xl font-sans font-[700] mb-6 text-center">Kitoblar ro'yxati</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {books.map((book) => (
            <div key={book.id} className="bg-white rounded-lg shadow-lg p-4">
              <img
                src={book.photo}
                alt={book.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
                <p className="text-gray-700 mb-2">Muallif: {book.auth}</p>
                <p className="text-gray-600">{book.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
