const BooksService = require("./books.service");

describe("Test for the Books service", () => {
	let service

	beforeEach(() => {
		// Arrange
		service = new BooksService();
	})

	describe("Tests for getBooks method of the BooksService instance", () => {

		test("Making sure the books.length is correct", () => {
			// Act - Making an action with the exported service
			const books = service.getBooks()
			console.log(books)

			// Assert
			expect(books.length).toEqual();
		})
	})
})