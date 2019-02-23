const handleHomePage = require('./handleHomePage');
const handleStatics = require('./handleStatics');
const handleLogin = require('./handleLogin');
const handleSignUp = require('./handleSignUp');
const handleProfile = require('./handleProfile');
const handleCreatePost = require('./handleCreatePost');
const handleLogout = require('./handleLogout');
const handlePageNotFound = require('./handlePageNotFound');
const handleInternalServerError = require('./handleInternalServerError');

module.exports = {
	handleHomePage,
	handleStatics,
	handleLogin,
	handleSignUp,
	handleProfile,
	handleCreatePost,
	handleLogout,
	handlePageNotFound,
	handleInternalServerError,
};

