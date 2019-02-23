const {
	handleHomePage,
	handleStatics,
	handleLogin,
	handleSignUp,
	handleProfile,
	handleCreatePost,
	handleLogout,
	handlePageNotFound,	
} = require('./handleAll');

const router = (req, res) => {

	// switch (`${req.method} ${req.url}`) {
	// 	case 'GET /':
	// 	return handleHomePage(req, res);
	// 	case 'GET /public':
	// 	return handleStatics(req, res);
	// 	case 'POST /login':
	// 	if(req.headers.cookie && req.headers.cookie.includes('jwt'))
	// 	return handleLogin(req, res);
	// 	case 'POST /signUp':
	// 	return handleSignUp(req, res);
	// 	case 'GET /profile':
	// 	return handleProfile(req, res);
	// 	case 'POST /create-post':
	// 	return handleCreatePost(req, res);
	// 	case 'POST /logout':
	// 	return handleLogout(req, res);
	// 	default handlePageNotFound(req,res);
	// }
	switch (`${req.method}`) {
		case 'GET': 
		return getRoutes(req, res);
		case 'POST':
		return postRoutes();
		default handlePageNotFound(req,res);
	}

	const getRoutes = (req, res) => {
	switch (`${req.url}`) {
		case '/':
		return handleHomePage(req, res);
		case 'includes('/public/')':
		return handleStatics(req, res);
		case '/profile':
		return handleProfile(req, res);
	 }		
	}

	const postRoutes = (req, res) => {
	switch (`${req.url}`) {
		case '/login':
		return handleLogin(req, res);
		case '/signUp':
		return handleSignUp(req, res);
		case '/create-post':
		return handleCreatePost(req, res);
		case '/logout':
		return handleLogout(req, res);
	  }		
	}
} ;


