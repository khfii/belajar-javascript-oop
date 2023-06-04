class Pegawai {
  constructor(name) {
    this.name = name;
  }

  sayHello(name) {
    this.message = `hi ${this.name}, saya adalah ${name}`;
    return this.message;
  }
}
class Karyawan {
  constructor(name) {
    this.name = name;
  }

  sayHello(name) {
    this.message = `hi, ${this.name}, saya adalah ${name}`;
    console.log(this.message);
    return this.message;
  }
}

let pegawai = new Pegawai("Kahfi");
console.log(pegawai);
console.log(pegawai.sayHello("kahfi"));

let karyawan = new Karyawan("Zidan");
console.log(karyawan);
console.log(karyawan.sayHello("Nayla"));
