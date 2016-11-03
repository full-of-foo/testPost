var newman = require('newman');
var converter = require('json-2-csv');
var _ = require('underscore');


var _formatJob = function(res) {
    job = JSON.parse(res);
    return _.pick(job, 'startedOn', 'description', 'revenue', 'signature', 'jobId',
                       'scheduledOn', 'pre_signature', 'estDuration', ' uuid',
                       'createdOn', 'completedOn');
};

var cb = function(err, data) {
    if (err) { throw err; }

    console.log(data.environment.values.reference);
    // var resBody = data.environment.values.reference.body.value;
    // var job = _formatJob(resBody);
    //
    // converter.json2csv(job, function(err, csv){
    //     if(err) console.error(err);
    //     console.log(csv); // we would write to file here!
    // });
};

newman.run({
    collection: require('./test2.json'),
    reporters: 'cli',
    environment: require('./testEnv.json')
}, cb);
