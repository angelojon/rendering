'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

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
  }
]

export async function getBookId({ params }: any) {
  const bookId = parseInt(params.id);
  const book = booksList.find((b) => b.id === bookId);

  return {
    props: {
      book,
    },
  };
}

export default function BookDetails({ book }: any) {
  const router = useRouter();

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div>
      <p>{book.id}: {book.title}</p>
      <p>Pages: {book.pages}</p>
      <p>Language: {book.language}</p>
    </div>
  );
}
