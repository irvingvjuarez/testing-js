const BooksService = require("./books.service");

const fakeBooks = [
	{
		_id: 1,
		name: "21 lessons for the XXI century"
	},
	{
		_id: 2,
		name: "Population explosion"
	}
]

const MongoLibStub = {
	getAll: () => fakeBooks,
	create: () => {}
}

jest.mock("../lib/mongo.lib", () => jest.fn().mockImplementation(() => MongoLibStub))

describe("Test for the Books service", () => {
	let service

	beforeEach(() => {
		// Arrange
		service = new BooksService();
	})

	describe("Tests for getBooks method of the BooksService instance", () => {

		test("Making sure the books.length is correct", async () => {
			// Act - Making an action with the exported service
			const books = await service.getBooks();

			// Assert
			expect(books.length).toEqual(2);
		})
	})
})