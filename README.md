# Ember-promises

Code for [Ember Adelaide Meetup}(http://www.meetup.com/Ember-js-Adelaide/) talk on Promises.

## Notes

* There are two debugger statements in the code for ember-cli-bootstrap that you will have to comment out if you want to use a debugger in the browser
  * `node_modules/ember-cli-bootstrap/app/helpers/test-breadcrumbs.js`
  * `node_modules/ember-cli-bootstrap/app/initializers/test-breadcrumbs.js`

https://ember-promises.firebaseio.com/

## Corrections

Hopefully there will be some. Live and learn.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `npm install -g firebase-tools`
* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [rsvp.js](https://github.com/tildeio/rsvp.js/)
* [Stefan Penner talks Promises](https://www.youtube.com/watch?v=g5CSaK3HqVA&feature=youtu.be)
* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
* [ember-cli-bootstrap](https://www.npmjs.com/package/ember-cli-bootstrap)
* [ember-fire](https://github.com/firebase/emberfire)
* [glob  version issue](http://stackoverflow.com/questions/28969744/unable-to-clone-git-repository-object-function-has-no-method-hasmagic)
