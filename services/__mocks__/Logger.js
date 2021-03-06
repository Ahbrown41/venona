// __mocks__/Logger.js

const create = jest.fn(() => ({
	info: jest.fn(),
	warn: jest.fn(),
	child: jest.fn(create),
	error: jest.fn(),
}));

module.exports = {
	create,
};
