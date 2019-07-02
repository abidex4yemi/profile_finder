const fs = require('fs');

const replacePlaceholderWithValues = (values, fileWithPlaceholder) => {
	for (let key in values) {
		fileWithPlaceholder = fileWithPlaceholder.replace(`%${key}`, values[key]);
	}

	return fileWithPlaceholder;
};
