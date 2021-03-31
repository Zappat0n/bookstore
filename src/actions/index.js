const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const createBook = (book) => {
  return {
    type: CREATE_BOOK,
    payload: book,
  }
};

const removeBook = (id) => {
  return {
    type: REMOVE_BOOK,
    payload: id,
  }
}

export { createBook, CREATE_BOOK, removeBook, REMOVE_BOOK}
