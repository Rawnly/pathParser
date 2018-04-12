# path-fixer
> Replace '~' with user home path.

## Install
```sh
	$ npm install path-fixer --save

	#or

	$ yarn add path-fixer
```

## Usage
```js
	import fixPath from '@splash-cli/path-fixer';
	
	console.log(fixPath('~/Desktop')) //=> '/Users/<user>/Desktop'
```

## Api
### fixPath(path)
Returns parsed path.

#### path
Type: `String`
Path to be fixed

### fixPath.promise(path)
Returns promise for parsed path.

#### path
Type: `String`
Path to be fixed

## License
MIT © [Federico Vitale](https://federicovitale.me)