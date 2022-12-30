const request = require("supertest");
const createApp = require("../src/app");

describe("Testing the root of the api", () => {
	let app, server

	beforeAll(() => {
		app = createApp();
		server = app.listen(8080);
	});

	afterAll(async () => {
		await server.close();
	});

	test("Making sure the root of the api returns the expected value", () => {
		return request(app)
			.get("/")
			.expect(200)
			.then(res => {
				expect(res.text).toBe("Hello World!")
			})
	});
})