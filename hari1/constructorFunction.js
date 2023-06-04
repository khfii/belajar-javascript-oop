function Person() {
  this.username = "";
  this.password = "";
}

const budi = new Person();
const eko = new Person();

budi.username = "Budi Alexander";
budi.password = "Jamaludin";

const fullInfo = `${budi.username} ${budi.password}`;
console.log(fullInfo);
