export const getCommentsByPost = ( comments, post_id ) => {
	let result = [];
	for (let id in comments) {
		if (comments[id].post_id === parseInt(post_id)) {
			result.push(comments[id]);
		}
	}
	return result;
};

export const getCommentIdsByPost = ( comments, post_id ) => {
	let result = [];
	for (let id in comments) {
		if (comments[id].post_id === parseInt(post_id)) {
			result.push(comments[id].id);
		}
	}
	return result;
};