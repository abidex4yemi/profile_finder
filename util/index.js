const fs = require('fs');
const path = require('path');

/**
 * 
 * @param {object} values 
 * @param {string} fileWithPlaceholder 
 */
const replacePlaceholderWithValues = (values, fileWithPlaceholder) => {
	for (let key in values) {
		fileWithPlaceholder = fileWithPlaceholder.replace(`%${key}`, values[key]);
	}

	return fileWithPlaceholder;
};

/**
 * 
 * @param {object} { templateName, values = {}, response } 
 */
const views = ({ templateName, values = {}, response }) => {
	const fileContents = fs.readFileSync(path.resolve(`screens/${templateName}.html`), 'UTF-8');

	response.write(replacePlaceholderWithValues(values, fileContents));
};

module.exports.views = views;
