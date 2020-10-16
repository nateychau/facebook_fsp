export const getPostsByAuthor = ( posts, author_id ) => {
	let result = [];
	for (let id in posts) {
		if (posts[id].author_id === parseInt(author_id)) {
			result.push(posts[id]);
		}
	}
	return result;
};


export const getPostsByWall = ( posts, wall_id ) => {
	let result = [];
	for (let id in posts) {
		if (posts[id].wall_id === parseInt(wall_id)) {
			result.push(posts[id]);
		}
	}
	return result;
};