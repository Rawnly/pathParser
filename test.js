import test from 'ava';
import pathParser from '.';

test('testing path', t => {
	const givenPath = '~/Desktop';
	const parsed = pathParser(givenPath);

	t.is(parsed.includes('~'), false);
})