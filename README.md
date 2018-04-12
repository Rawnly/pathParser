# path-fixer
> Replace '~' with user home path.

## Install
```sh
	$ npm install @splash-cli/path-fixer --save

	#or

	$ yarn add @splash-cli/path-fixer
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