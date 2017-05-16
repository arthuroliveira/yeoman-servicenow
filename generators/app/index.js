var Generator = require('yeoman-generator');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        // This makes `appname` a required argument.
        this.argument('appname', {
            type: String,
            required: true
        });
        this.env.error("something bad is happened");

        // And you can then access it later; e.g.
        this.log(this.options.appname);
    }

    prompting() {
        return this.prompt([{
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: this.appname // Default to current folder name
        }, {
            type: 'confirm',
            name: 'cool',
            message: 'Would you like to enable the Cool feature?'
        }]).then((answers) => {
            this.log('app name', answers.name);
            this.log('cool feature', answers.cool);
        });
    }

    myAction() {
        this.log('Something has gone wrong!');
    }

};