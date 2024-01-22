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
  }
]

export async function getBooks() {
  console.log('Fetching books...');
  // Simulating an API call by returning the books data
  return {
    props: {
      books: booksList,
    },
  };
}

export default async function TodoList({ todos }: any) {
  const { props: { books: data } } = await getBooks();

  return (
    <div>
      {data?.length === 0 ? (
        <div>Loading...</div>
      ) : (
        data?.map((books: any) => (
          <div key={books.id}>
            <p>
              {books.id}: {books.title}
            </p>
          </div>
        ))
      )}
    </div>
  );
}