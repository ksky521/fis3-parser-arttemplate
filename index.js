var TmodJS = require('tmodjs');

module.exports = function(content, file, conf) {
    var tmod = new TmodJS('./', conf);
    var id = conf.filename = file.id;
    var modObject = tmod.template.AOTcompile(content, conf);
    content = modObject.code;
    if (conf.wrapper) {
        content = conf.wrapper.split('${content}').join(content)
            .split('${id}').join(id);
    }
    return content;
}
