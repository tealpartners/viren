var fs = require('fs');
var sass = require('node-sass');

function getDirectory(subpath) {
    return __dirname + '/' + subpath;
}
sass.render({
    file: getDirectory('scss/all.scss'),
    outFile: getDirectory('scss/all.css'),
    sourceMap: true,
}, function (err, result) {
    fs.writeFile(getDirectory('scss/all.css'), result.css, function (err) {
        if (!err) {
            //file written on disk
        }
    });
    fs.writeFile(getDirectory('scss/all.css.map'), result.map, function (err) {
        if (!err) {
            //file written on disk
        }
    });
});
