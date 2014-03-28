# Gone

Ready, Set, Gone!

> This is a work in progress and I will likely add more functionality in the future.


## Installation

1 - First of all, make sure you have [Node.js](http://nodejs.org/) installed. <br/>
2 - Clone this repository and create your project folder

```bash
git clone git://github.com/vitorbritto/gone.git projectname
cd projectname
```

3 - Install dependencies and make the script executable

```bash
npm install
chmod u+x gone.js
```

4 - Run gone: `./gone.js run`
5 - Choose your deploy method
6 - And you're ready to go!

> Use `./gone.js -h` for more details and instructions.


## Usage

Once you have `gone` installed, just follow the steps bellow to deploy your files.

1 - Setup your preferences *(check the [configuration](#configuration) section to begin this step)*
2 - Execute `chmod u+x gone.js` and `./gone.js`


## Configuration

Each deploy method has its own settings for sending files and communicating with the server. Thus, the configuration file is well documented to make the reading more legible and be easily updated.

Check out the following:

#### FTP

*[Documentation](https://npmjs.org/package/ftp)*
*[Configuration](/lib/template/ftp/config.json)*

#### SSH

*[Documentation](https://npmjs.org/package/ssh)*
*[Configuration](/lib/template/ssh/config.json)*

#### Rsync

*[Documentation](https://npmjs.org/package/rsync)*
*[Configuration](/lib/template/rsync/config.json)*

#### Git

*[Documentation](https://npmjs.org/package/git)*
*[Configuration](/lib/template/git/config.json)*


## Contributing

Feel free to [contribute](https://github.com/vitorbritto/gone/pulls) with this project or leave a [suggestion](https://github.com/vitorbritto/gone/issues).


## License

[MIT License](http://vitorbritto.mit-license.org/) © Vitor Britto

