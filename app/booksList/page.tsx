import Link from 'next/link';
import React from 'react';

export const booksList = [
  {
    id: 1,
    title: "Things fall apart",
    pages: 209,
    language: "English"
  },
  {
    id: 2,
    title: "Fairy tails",
    pages: 784,
    language: "Danish"
  },
  {
    id: 3,
    title: "The book of Job",
    pages: 176,
    language: "Hebrew"
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    pages: 443,
    language: "French"
  },
  {
    id: 5,
    title: "The Martian",
    pages: 369,
    language: "English"
  },
  {
    id: 6,
    title: "War and Peace",
    pages: 1225,
    language: "Russian"
  },
  {
    id: 7,
    title: "To Kill a Mockingbird",
    pages: 281,
    language: "English"
  },
  {
    id: 8,
    title: "One Hundred Years of Solitude",
    pages: 417,
    language: "Spanish"
  },
  {
    id: 9,
    title: "1984",
    pages: 328,
    language: "English"
  },
  {
    id: 10,
    title: "The Great Gatsby",
    pages: 180,
    language: "English"
  },
  {
    id: 11,
    title: "Don Quixote",
    pages: 863,
    language: "Spanish"
  },
  {
    id: 12,
    title: "Crime and Punishment",
    pages: 574,
    language: "Russian"
  },
  {
    id: 13,
    title: "The Odyssey",
    pages: 541,
    language: "Greek"
  },
  {
    id: 14,
    title: "Moby-Dick",
    pages: 635,
    language: "English"
  },
  {
    id: 15,
    title: "Les Misérables",
    pages: 1463,
    language: "French"
  }
];


export async function getBooks() {
  
  return {
    props: {
      books: booksList,
    },
  };
}

export default async function BooksList({ books }: any) {
  const { props: { books: data } } = await getBooks();

  return (
    <div>
      {data?.length === 0 ? (
        <div>Loading...</div>
      ) : (
        data?.map((book: any) => (
          <div key={book.id}>
            <Link href={`/booksList/${book.id}`}>
                <p>
                  {book.id}: {book.title}
                </p>
              
            </Link>
          </div>
        ))
      )}
    </div>
  );
        }
