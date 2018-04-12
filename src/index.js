import { join } from 'path';
import { homedir } from 'os';

function pathParser(path) {
	const tester = /^~\/.*?/g;

	if ( tester.test(path) ) {
		path = path.replace(tester, homedir())
	}

	return path;
}

module.exports = pathParser;