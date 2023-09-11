export const backgroundColor = () => {
	const colors = [ '#D7E4FD', '#CAEFF0', '#FEE9E2', '#F4EEFD' ];
	const index = Math.floor(Math.random() * (3 - 0 + 1)) + 0;

	return colors[index];
};
