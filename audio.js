exports.build = false;

exports.fetch = function(load) {
    return new Promise(function(resolve, reject) {
        var audio = load.metadata.audio = new Audio();
        audio.src = load.address;
        resolve('');
    });
};

exports.instantiate = function(load) {
    return load.metadata.audio;
};
