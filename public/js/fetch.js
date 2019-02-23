const fetch = (url, method, data, cb) => {
	const xhr = new XMLHttpRequest();

	xhr.onreadystatechange = () => {

		if (xhr.readyState === 4) {
			const response = JSON.parse(xhr.responseText);
			if (xhr.status === 200) {
					cb(response);
			} else {
				cb(new TypeError(err));
			}
		}
	}
	xhr.open(method, url);
	xhr.send(data);
};

