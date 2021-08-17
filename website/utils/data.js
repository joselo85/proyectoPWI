const request = require('postman-request');

const getProjects = (callback) => {
    request('https://pdh-arq-api.herokuapp.com/projects', (error, res, body) => {
        if (error) {
            console.log('Error', error)
            return callback(error, undefined);
        }
        if(res){
            if(body) {
                return callback(undefined, body);
            }
            callback("No projects found", undefined)
        }
    });
};

module.exports = {getProjects};