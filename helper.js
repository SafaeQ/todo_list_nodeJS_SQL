function getpro(req) {
    return new Promise((resolve, reject) => {
        try {
            let body = '';
            req.on('data', chunk => {
                // console.log('chuk : ', chunk);
                body += chunk;
            })
            req.on('end', () => {
                req.body = JSON.parse(body);
                resolve(req.body);
                // console.log(req.body)
            })
        } catch (error) {
            reject(error);
        }

    })
}
module.exports = {
    getpro
}