const http = require('http');

class Application {
    constructor() {
        
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