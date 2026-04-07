type RichPeopleVehicle = {
    bike: string;
    car: string;
    ship: string;
};

type CheckVehicle<T> = T extends keyof RichPeopleVehicle ? true : false;

// Type checks
type HasBike = CheckVehicle<"bike">;   // true
type HasPlane = CheckVehicle<"plane">; // false

// Runtime helper function
const checkVehicle = (key: string) => {
    const vehicles: RichPeopleVehicle = {
        bike: "Ducati",
        car: "Tesla",
        ship: "Yacht",
    };

    return key in vehicles;
};

// Runtime usage
console.log(checkVehicle("bike"));   // true
console.log(checkVehicle("plane"));  // false