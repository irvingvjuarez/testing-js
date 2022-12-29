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

const mockGetAll = jest.fn();

// const MongoLibStub = {
// }

jest.mock("../lib/mongo.lib", () => jest.fn().mockImplementation(() => ({
	getAll: mockGetAll,
	create: () => {}
})))

describe("Test for the Books service", () => {
	let service

	beforeEach(() => {
		// Arrange
		service = new BooksService();
		jest.clearAllMocks();
	})

	describe("Tests for getBooks method of the BooksService instance", () => {

		test("Making sure the books.length is correct", async () => {
			// Arrange
			mockGetAll.mockResolvedValue(fakeBooks);

			// Act - Making an action with the exported service
			const books = await service.getBooks();

			// Assert
			expect(books.length).toEqual(2);
		})
	})
})