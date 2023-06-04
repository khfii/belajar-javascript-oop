/**
 * Jika pada suatu class memiliki constructor maka class lain yang mewarisi class super tersebut juga akan memilki constructor
 */

class Pegawai {
  constructor(name) {
    this.name = name;
  }

  sayHello(name) {
    console.log(`hi ${name}, my position is ${this.name}`);
  }
}

class Karyawan extends Pegawai {
  // class ini akan memiliki constructor bawaan
}

const pegawai = new Pegawai("Pegawai");
console.log(pegawai);

const karyawan = new Karyawan();
console.log(karyawan);
