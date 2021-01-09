const person = {
  firstName: 'bob',
  showName() {
    console.log(this.firstName);
  },
};

const foo = function(callback) {
  callback();
};

foo(person.showName);


