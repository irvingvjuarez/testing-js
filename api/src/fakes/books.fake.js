const { faker } = require("@faker-js/faker");

const getSingleBook = () => ({
	_id: faker.datatype.uuid(),
	name: faker.commerce.productName(),
	price: faker.commerce.price()
});

module.exports = {
	getSingleBook
}