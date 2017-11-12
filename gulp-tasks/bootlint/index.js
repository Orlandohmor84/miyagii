var gulp = require('gulp'); 
var bootlint  = require('gulp-bootlint');

//Bootlint
gulp.task('bootlint', function() {
    var fileIssues = [];
    return gulp.src('./src/index.html')
        .pipe(bootlint({
            stoponerror: true,
            stoponwarning: true,
            loglevel: 'debug',
            disabledIds: ['W009', 'E007'],
            issues: fileIssues,
            reportFn: function(file, lint, isError, isWarning, errorLocation) {
                var message = (isError) ? "ERROR! - " : "WARN! - ";
                if (errorLocation) {
                    message += file.path + ' (line:' + (errorLocation.line + 1) + ', col:' + (errorLocation.column + 1) + ') [' + lint.id + '] ' + lint.message;
                } else {
                    message += file.path + ': ' + lint.id + ' ' + lint.message;
                }
                console.log(message);
            },
            summaryReportFn: function(file, errorCount, warningCount) {
                if (errorCount > 0 || warningCount > 0) {
                    console.log("please fix the " + errorCount + " errors and "+ warningCount + " warnings in " + file.path);
                } else {
                    console.log("No problems found in "+ file.path);
                }
            }
        }));
});