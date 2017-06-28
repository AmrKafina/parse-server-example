
Parse.Cloud.define('hello', function(req, res) {
    res.success('Hi');
});

Parse.Cloud.job("myJob", function(request, status) {
    // the params passed through the start request
    var params = request.params;
    // Headers from the request that triggered the job
    var headers = request.headers;

    // get the parse-server logger
    var log = request.log;

    // Update the Job status message
    status.message("I just started");
    status.success("I can here you!");
});