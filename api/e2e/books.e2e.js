const request = require("supertest");

const createApp = require("../src/app");

describe("Testing the books received correctly", () => {
	let app, server

	beforeAll(() => {
		app = createApp();
		server = app.listen(8080);
	});

	afterAll(async () => {
		await server.close();
	});

	test("Receiving 10 books in the book's request", () => {
		return request(app)
			.get("/api/v1/books")
			.expect(200)
			.then(({body}) => {
				expect(body.length).toBe(10);
			})
	})
})