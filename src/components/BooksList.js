
const BooksList = () => {
  const displayBooks = () => {
    let books = []
    return books;
  }

  return(
    <table>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      {displayBooks()}
    </table>
  )
}
