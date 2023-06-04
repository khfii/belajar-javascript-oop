// membuat constructor function tanpa paramater
function Login() {
  this.username = null;
  this.password = null;

  // function biasa pada object
  this.tryLogin = function (percobaanPertama, percobanKedua) {
    return `${percobaanPertama} ${percobanKedua}`;
  };

  // arrow function pada object
  this.sayLoginSucces = (firstTry) => {
    return `${firstTry}`;
  };
}

// create an object
const firstLogin = new Login();
console.log(firstLogin.tryLogin("Percobaan Pertama", "Gagal"));
console.log(firstLogin.sayLoginSucces("Login Berhasil"));

// membuat function constructor dengan parameter
function PersonInfo(fullName, address) {
  this.fullName = fullName;
  this.address = address;

  this.seePersonInfo = (number) => {
    return `${number}. Nama Lengkap : ${fullName} Alamat ${address}`;
  };
}

// const Bambang = new PersonInfo("Kahfi", "Jalan Desa Pula Alalak");

// console.log(Bambang.seePersonInfo(1));

// {} =
function Faktorial() {
  this.countFaktorial = (number) => {
    if (number == 1) {
      return (number = 1);
    } else {
      return number * this.countFaktorial(number - 1);
    }
  };
}

function Register(){
  this.firstName; 
  this.secondName; 
  this.fullName; 
  this.gender; 
  this.addres; 
  this.tryAccess = (regisAcces) => {
   if(regisAcces=="404"){
    console.log(`Status Server non-Aktif`);
   }else if(regisAcces == "201"){
    console.log();
   }
   
  };

}

const result = new Faktorial();

console.log(result.countFaktorial(5));
