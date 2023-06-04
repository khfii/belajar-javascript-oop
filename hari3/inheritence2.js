class Pegawai {
  sayHello(name) {
    // this.name = "karyawan";
    console.log(`Hello ${name}, my name is ${this.name}`);
  }
}

class Karyawan extends Pegawai {
  //   sayHello(name) {
  //   console.log(`Hello ${name}, my name is ${this.name}`);
  //   }
}

const pegawai = new Pegawai();
pegawai.name = "kahfi";
pegawai.sayHello("Pegawai");

const karyawan = new Karyawan();
karyawan.name = "Budi";
karyawan.sayHello("Karyawan");

console.info(pegawai);
console.info(karyawan);
