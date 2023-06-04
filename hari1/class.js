// pembuatan constractor function
function Person() {}

function PremiumMember() {}

// pembuatan objek dari constructor function
const budi = new Person();
const cahyo = new PremiumMember();

// default parameter arrow function
const sayHello = () => "Say Kahfi";

const helloBandung = (firstName, secondName) => {
  return `halo ${firstName}, ${secondName}`;
};

console.log(sayHello());
console.log(helloBandung("Kahfi", "azmi"));
