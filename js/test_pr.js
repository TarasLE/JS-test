console.log({}.prototype === {}._proto_);

function ITKamasutra() {}
console.log(ITKamasutra.prototype === ITKamasutra._proto_);

function ITIncubator() {}
// function ITKamasutra() {}

console.log(ITIncubator._proto_ === ITKamasutra._proto_);
console.log(ITIncubator.prototype === ITKamasutra.prototype);

let Component = (props) => {
  return "<div>I dont know Prototype</div>";
};

console.log(Component.prototype === Object.prototype);
console.log(Component._proto_ === Object._proto_);

let age = 18;
console.log(age.prototype === Number.prototype);
console.log(age._proto_ === Number.prototype);

class Hacker {}
console.log(Hacker._proto_ === Function.prototype);

// function ITIncubator()
console.log(ITIncubator._proto_);

const count = 12;
console.log(count._proto_);

// function Samurai(name) {
//   this.name = name;

//   Samurai.prototype.hello = function () {
//     alert(this.name);
//   };

//   Samurai.prototype.weight = function (weight) {
//     this.weight = weight;
//   };
// }

// let ringo = new Samurai();
// ringo.weight(150);
// console.log(ringo.weight);
// console.log(Samurai.prototype);

class Samurai {
  constructor(name) {
    this.name = name;
  }
  hello() {
    alert(this.name);
  }
}

let shogun = new Samurai("Dimych");
// console.log(shogun._proto_._proto_);
// console.log(shogun._proto_.constructor._proto_);
console.log(shogun._proto_._proto_._proto_);
