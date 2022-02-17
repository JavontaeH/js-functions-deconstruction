const createChassis = () => {
  // Create a new object. No properties yet.
  const newChassisObject = {};

  return newChassisObject;
};

const addWheels = (chassisObject) => {
  chassisObject.wheels = 4;
  return chassisObject;
};

const addEngine = (chassisObject) => {
  chassisObject.engine = "4.8L";
  return chassisObject;
};

const addSteering = (chassisObject) => {
  chassisObject.steeringWheel = "Tilting";
  return chassisObject;
};

const addBody = (chassisObject) => {
  // Use dot notation to add a new property
  chassisObject.body = "Fever";

  // Return the chassis that now has a body property on it
  return chassisObject;
};

const addDrivetrain = (chassisObject) => {
  chassisObject.driveTrain = "Two wheel drive";
  return chassisObject;
};

let chassis = createChassis();
let completedChassis = addWheels(chassis);
addEngine(chassis);
addSteering(chassis);
addBody(chassis);
addDrivetrain(chassis);

console.log(completedChassis);
