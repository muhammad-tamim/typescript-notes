function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const user = {
    name: "Tamim",
    age: 20
};

getProperty(user, "name"); // Tamim
getProperty(user, "age");  // 20
getProperty(user, "location");  // Argument of type '"location"' is not assignable to parameter of type '"name" | "age"'.