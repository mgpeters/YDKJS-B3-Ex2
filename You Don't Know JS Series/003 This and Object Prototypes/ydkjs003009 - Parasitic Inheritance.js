// This is the example given of "Parasitic Inheritance," regarding Mixins. The 
// example is on page 82 of the 3rd book in the You Don't Know Javascript series - This and Object Prototypes

// This example is an explicit mixin pattern, however, is both Implicit and explicit

function Vehicle(){         // Traditional JavaScript Class "Vehicle"
    this.engines = 1;
}
Vehicle.prototype.ignition = function(){
    console.log("Turning on my engine.");
};
Vehicle.prototype.drive = function (){
    console.log("Steering and moving forward!");
};

function Car (){                //Parasitic Class "Car"
    var car = new Vehicle();    //first, "car" is a "Vehicle"

    car.wheels = 4;             //now, let's modify our "car" to specialize it

    var vehDrive = car.drive;   // saves a privileged reference to "Vehicle::drive()"

    car.drive = function(){     // Overrides "Vehicle::drive"
        vehDrive.call(this);
        console.log("Rolling on all " + this.wheels + " wheels!");
    }

    return car;
}

var myCar = new Car();

myCar.drive();