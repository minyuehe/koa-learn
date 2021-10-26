const http = require('http');
const context = require('./context');
const request = require('./request');
const response = require('./response');


class Application {
    constructor() {
        this.context = Object.create(context);
        this.request = Object.create(request);
        this.response = Object.create(response);
    }
    use(fn) {
        this.fn = fn;
    }

    callback = (req, res) => {
        this.fn(req, res);
    }

    listen() {
        const server = http.createServer(this.callback);
        console.log(...arguments);
        server.listen(...arguments);
    }
}

module.exports = Application;