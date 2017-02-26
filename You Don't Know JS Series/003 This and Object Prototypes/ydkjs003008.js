// Below is an example of Explicit Mixins, which can be found on 
// page 77 of "This and Object Prototypes" of the YDKJS Book Series

// vastly simplified "mixin(...)" example:

function mixin( sourceObj, targetObj){
    for (var key in sourceObj){
        // Only copies if not already present
        if (!(key in targetObj)){
            targetObj[key] = sourceObj[key];
        }
    }

    return targetObj;
}

var Vehicle = {
    engines: 1,

    ignition: function(){
        console.log("Turning on my engine.");
    },

    drive: function(){
        this.ignition();
        console.log("Steering and moving forward!");
    }
};

var Car = mixin( Vehicle, {
    wheels: 4,

    drive: function(){
        Vehicle.drive.call(this);
        console.log(
            "Rolling on all " + this.wheels + " wheels!"
        );
    }
});