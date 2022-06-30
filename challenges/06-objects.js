/*
## Objects #6

1. create car object
2. add make, model, year, colors (array),
   hybrid (boolean) keys
3. add two methods (drive and stop)
4. in the function body setup log with random text
5. log make
6. log first color
7. invoke both methods
*/

const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2017,
  colors: ['red', 'silver', 'blue'],
  hybrid: false,
  keys: true,
  driving() {
    console.log('Driving around town.');
  },
  stop() {
    console.log('I dont stop, wtf?');
  },
};
console.log(car.make);
console.log(car.colors[0]);
car.driving();
car.stop();
