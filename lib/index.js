var settings = {};

var defaults = {"removedouble":true, "removesingle":true};

module.exports = function (input) {

    var conf = defaults;
    // Load the defaults into the conf var
    
    for (var attrname in input) { conf[attrname] = input[attrname]; }
    // Overide the conf defaults with the developer inputs
    
    var doubleequal = /\--+([a-zA-Z0-9]+)=([a-zA-Z0-9]+)/g;
    // Finds "--something=here"

    var singleequal = /\-+([a-zA-Z0-9]+)=([a-zA-Z0-9]+)/g;
    // Finds "-something=here"

    var doublenoequal = /\--+([a-zA-Z0-9]+)\s([a-zA-Z0-9]+)/g;
    // Finds "--something here"

    var singlenoequal = /\-+([a-zA-Z0-9]+)\s([a-zA-Z0-9]+)/g;
    // Finds "-something here"

    var doubletruthy = /\--+([a-zA-Z0-9]+)/g;
    // Finds "--something"; we give TRUE

    var singletruthy = /\-+([a-zA-Z0-9]+)/g;
    // Finds "-something"; we give TRUE

    var lone = /([a-zA-Z0-9]+)([a-zA-Z0-9]+)/g;
    // Finds "something"; we give TRUE

    var argv = process.argv;
    // Gets all of the arguments passed

    if (argv.length >= 3) {
        // All applications should have two - engine and script
        // If there are more than two then the script can continue
        // If not, it's a waste

        // Now that we know the first two are there, we can ignore them
        // Remove the first two args
        argv.shift(); // /engine = node
        argv.shift(); // /script = self

        var str = ""; // Create a string to work with

        for (var item in process.argv) {
            // Loop through the remaining args
            // and add them to the string
            str += process.argv[item] + " ";
        }
        
        str = str.trim();
        if(str.length===0){
            // If all params are processed, the "str" should = 0
            return settings;
        }

        var de_set = str.match(doubleequal);
        str = str.replace(doubleequal, "");

        if(!conf.removedouble){
            
            // Loop AND DON'T remove the "--" at the begining
            for (var item in de_set) {
                var take = de_set[item].split("=");
                settings[take[0]] = take[1];
            }
            
        } else {

            // Loop AND remove the "--" at the begining
            for (var item in de_set) {
                var take = de_set[item].split("=");
                settings[take[0].replace("--", "")] = take[1];
            }

        }


        str = str.trim();
        if(str.length===0){
            // If all params are processed, the "str" should = 0
            return settings;
        }


        var se_set = str.match(singleequal);
        str = str.replace(singleequal, "");

        if(!conf.removesingle){
            
            // Loop AND DON'T remove the "-" at the begining
            for (var item in se_set) {
                var take = se_set[item].split("=");
                settings[take[0]] = take[1];
            }

        } else {
            
            // Loop AND remove the "-" at the begining
            for (var item in se_set) {
                var take = se_set[item].split("=");
                settings[take[0].replace("-", "")] = take[1];
            }

            
        }
        
        str = str.trim();
        if(str.length===0){
            // If all params are processed, the "str" should = 0
            return settings;
        }


        var dne_set = str.match(doublenoequal);
        str = str.replace(doublenoequal, "");

        if(!conf.removedouble){
            // Loop AND DON'T remove the "--" at the begining
            for (var item in dne_set) {
                var take = dne_set[item].split(" ");
                settings[take[0]] = take[1];
            }
        } else {
            // Loop AND remove the "--" at the begining
            for (var item in dne_set) {
                var take = dne_set[item].split(" ");
                settings[take[0].replace("--", "")] = take[1];
            
            }
        }

        str = str.trim();
        if(str.length===0){
            // If all params are processed, the "str" should = 0
            return settings;
        }


        var sne_set = str.match(singlenoequal);
        str = str.replace(singlenoequal, "");

        if(!conf.removesingle){
            // Loop AND DON'T remove the "-" at the begining
            for (var item in sne_set) {
                var take = sne_set[item].split(" ");
                settings[take[0]] = take[1];
            }
        } else {
            // Loop AND remove the "-" at the begining
            for (var item in sne_set) {
                var take = sne_set[item].split(" ");
                settings[take[0].replace("-", "")] = take[1];
            }
        }

        str = str.trim();
        if(str.length===0){
            // If all params are processed, the "str" should = 0
            return settings;
        }


        var dt_set = str.match(doubletruthy);
        str = str.replace(doubletruthy, "");

        if(!conf.removedouble){
            // Loop AND DON'T remove the "--" at the begining
            for (var item in dt_set) {
                var take = dt_set[item].split(" ");
                settings[take[0]] = true;
            }
            
        } else {
            // Loop AND remove the "--" at the begining
            for (var item in dt_set) {
                var take = dt_set[item].split(" ");
                settings[take[0].replace("--", "")] = true;
            }
            
        }
        
        str = str.trim();
        if(str.length===0){
            // If all params are processed, the "str" should = 0
            return settings;
        }

        var st_set = str.match(singletruthy);
        str = str.replace(singletruthy, "");

        if(!conf.removesingle){

            // Loop AND DON'T remove the "-" at the begining
            for (var item in st_set) {
                var take = st_set[item].split(" ");
                settings[take[0]] = true;
            }
        } else {
            // Loop AND remove the "-" at the begining
            for (var item in st_set) {
                var take = st_set[item].split(" ");
                settings[take[0].replace("-", "")] = true;
            }
            
        }

        str = str.trim();
        if(str.length===0){
            // If all params are processed, the "str" should = 0
            return settings;
        }


        var l_set = str.match(lone);
        str = str.replace(lone, "");

        for (var item in l_set) {
            settings[l_set[item]] = true;
        }

        str = str.trim();
        if(str.length===0){
            // If all params are processed, the "str" should = 0
            return settings;
        }
        
    } else {
        return settings;
    }

};