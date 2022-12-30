const { faker } = require("@faker-js/faker");

const getSingleBook = () => ({
	_id: faker.datatype.uuid(),
	name: faker.commerce.productName(),
	price: faker.commerce.price()
});

const getBooks = (size = 10) => {
	const books = new Array(size)
		.fill({})
		.map(_book => getSingleBook())

	return books
}

module.exports = {
	getSingleBook,
	getBooks
}