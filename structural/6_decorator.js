// Надає можливість добавляти нову поведінку або функціонал для існуючих класів

class Server {
    constructor(ip, port) {
        this.ip = ip;
        this.port = port
    }

    get url() {
        return `https://${this.ip}:${this.port}`
    }
}

// ДЕКОРАТОР
function aws(server) {
    server.isAWS = true;
    server.awsInfo = function() {
        return server.url;
    }

    return server;
}

const awsServer = aws(new Server("21.32.54.32", "8080"))

console.log(awsServer.awsInfo());
console.log(awsServer.isAWS);

// ДЕКОРАТОР

function azure(server) {
    server.isAzure = true;
    server.port += 500;
    return server;
}

const azureServer = azure(new Server("34.34.56.21", "55"))

console.log(azureServer.port);
console.log(azureServer.isAzure);