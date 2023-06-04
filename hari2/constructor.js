class Person {
  constructor(fullName) {
    // Masukan kode apapun disini
    console.log(`Nama Lengkap : ${fullName}`);
  }
}

const Person1 = new Person("Budi");
console.log(Person1);

class Animal {
  constructor(animalName) {
    this.animalName = animalName;
  }
}

const animal = new Animal("Katak");
console.log(animal);

class Angka {
  constructor(angka) {
    this.angka = angka;
  }
}

const angka = new Angka(30);
console.log(angka);

// method di constructor
class Siswa {
  constructor(nomorAbsen) {
    this.nomorAbsen = nomorAbsen;
  }

  //   membuat function pada class
  namaLengkapSiswa(fullName) {
    this.namaLengkap = `Absen ${this.nomorAbsen} ${fullName}`;
    return this.namaLengkap;
  }
}

const detailSiswa = new Siswa(1);
console.log(detailSiswa.namaLengkapSiswa("Ashabul kahfi"));
