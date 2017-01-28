var Handlebars = require('handlebars');

Handlebars.registerHelper('_initVariable', function (varName, data) {
    if (varName) {
        return 'var ' + varName + ' = ' + ((typeof data == 'object') ? JSON.stringify(data) : ((typeof data == 'string') ? ('\'' + data + '\'') : data)) + ';';
    }
});

Handlebars.registerHelper('_pageTitle', function (title) {
    return title ? title : sails.config.appDisplayName;
});

Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
    switch (operator) {
        case '==':
            return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '===':
            return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '!=':
            return (v1 != v2) ? options.fn(this) : options.inverse(this);
        case '!==':
            return (v1 !== v2) ? options.fn(this) : options.inverse(this);
        case '<':
            return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
            return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '&&':
            return (v1 && v2) ? options.fn(this) : options.inverse(this);
        case '||':
            return (v1 || v2) ? options.fn(this) : options.inverse(this);
        default:
            return options.inverse(this);
    }
});

Handlebars.registerHelper('arrayContains', function (arrayObj, arg) {
    try {
        if (arrayObj.indexOf(arg) >= 0) {
            return true;
        }
    } catch (e) {        
    }

    return false;
});

Handlebars.registerHelper('conditionalPrint', function (v1, operator, v2, option) {
    switch (operator) {
        case '==':
            return (v1 == v2) ? option : '';
        case '===':
            return (v1 === v2) ? option : '';
        case '!=':
            return (v1 != v2) ? option : '';
        case '!==':
            return (v1 !== v2) ? option : '';
        case '<':
            return (v1 < v2) ? option : '';
        case '<=':
            return (v1 <= v2) ? option : '';
        case '>':
            return (v1 > v2) ? option : '';
        case '>=':
            return (v1 >= v2) ? option : '';
        case '&&':
            return (v1 && v2) ? option : '';
        case '||':
            return (v1 || v2) ? option : '';
        case 'in':
            try{
                v2 = v2.split(",");
                if(v2.indexOf(v1)>= 0){
                    return option;
                }else{
                    return '';
                }
            }catch(ex){
                return '';
            }
        default:
            return '';
    }
});

Handlebars.registerHelper('ternaryPrint', function (v1, operator, v2, successoption,failureoption) {
    switch (operator) {
        case '==':
            return (v1 == v2) ? successoption : failureoption;
        case '===':
            return (v1 === v2) ? successoption : failureoption;
        case '!=':
            return (v1 != v2) ? successoption : failureoption;
        case '!==':
            return (v1 !== v2) ? successoption : failureoption;
        case '<':
            return (v1 < v2) ? successoption : failureoption;
        case '<=':
            return (v1 <= v2) ? successoption : failureoption;
        case '>':
            return (v1 > v2) ? successoption : failureoption;
        case '>=':
            return (v1 >= v2) ? successoption : failureoption;
        case '&&':
            return (v1 && v2) ? successoption : failureoption;
        case '||':
            return (v1 || v2) ? successoption : failureoption;
        case 'in':
            try{
                v2 = v2.split(",");
                if(v2.indexOf(v1)>= 0){
                    return successoption;
                }else{
                    return failureoption;
                }
            }catch(ex){
                return failureoption;
            }
        default:
            return failureoption;
    }
});

module.exports = Handlebars.helpers;
