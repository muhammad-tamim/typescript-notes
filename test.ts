type User = {
    name: string;
    age: number;
};

let data = {} as User;
data.name = "Tamim";
data.age = 20;

console.log(data) // { name: 'Tamim', age: 20 }