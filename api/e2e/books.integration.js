const mockGetAll = jest.fn()
const request = require("supertest");

const createApp = require("../src/app");
const { getBooks } = require("../src/fakes/books.fake");
const BooksService = require("../src/services/books.service");


jest.mock("../src/lib/mongo.lib", () => jest.fn().mockImplementation(() => ({
	getAll: mockGetAll,
	create: () => {}
})))

describe("Testing the books received correctly", () => {
	let app, server, service

	beforeEach(() => {
		service = new BooksService();
		jest.clearAllMocks();
	})

	beforeAll(() => {
		app = createApp();
		server = app.listen(8080);
	});

	afterAll(async () => {
		await server.close();
	});

	test("Receiving 10 books in the book's request", () => {
		mockGetAll.mockResolvedValue(getBooks());

		return request(app)
			.get("/api/v1/books")
			.expect(200)
			.then(({body}) => {
				expect(body.length).toBe(10);
			})
	})
})