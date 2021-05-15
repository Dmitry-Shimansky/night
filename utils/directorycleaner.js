const fs = require('fs');

class DirectoryCleaner {

    cleaner() {
        fs.readdirSync('./tests_output').forEach(fileName => {
            fs.unlinkSync(`./tests_output/${fileName}`);
        });
    }
}

module.exports = new DirectoryCleaner();
