const issueCard = (name, age, numBooksCheckedOut=0) => {
  const LibraryCard = {
    name: name,
    age: age,
    numBooksCheckedOut: numBooksCheckedOut,
    get isChild() { return this.age < 12 ? true : false },
  }
  return LibraryCard
}

const searchByAuthor = (collection, authorName) => {
  let results = collection.filter((book) => book.author === authorName)
  return results.length === 0 ? "No book found for search criteria" : results
}

module.exports = {
  issueCard,
  searchByAuthor,
};