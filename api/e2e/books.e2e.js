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
			.get("/books")
			.expect(200)
			.then(res => res.json())
			.then(data => {
				expect(data.length).toBe(10)
			})
	})
})