function makeBuffer() {

    var currentBuffer = [];

    function bufferOps(value) {
        return !value ? currentBuffer : currentBuffer.push(value);
    }


    bufferOps.clear = function () {
        currentBuffer = [];
    };

    return bufferOps;
}


var buffer = makeBuffer();
 //make worker
function Worker(worker) {
    this.name = worker.name;
    this.surname = worker.surname;
    this.rate = worker.rate;
    this.days = worker.days;
    buffer(worker);
}

var worker1 = new Worker(
    {
        name: "Mike",
        surname: "Hilson",
        rate: 10,
        days: 20
    }
    ),
    worker2 = new Worker(
        {
            name: "Sam",
            surname: "Bring",
            rate: 15,
            days: 31
        }
    ),
    worker3 = new Worker(
        {
            name: "Polly",
            surname: "Richardson",
            rate: 10,
            days: 25
        }
    );

Worker.prototype.getSalary = function () {
    return this.rate * this.days;
};


Worker.prototype.getTotalSalary = function () {
    var totalSalary = 0,

        workers = buffer();

    for (var key in workers) {
        totalSalary += workers[key].rate * workers[key].days;
    }

    return totalSalary;

};
console.log(worker1.name);
console.log(worker1.surname);
console.log(worker1.rate);
console.log(worker1.days);

console.log(worker2.name);
console.log(worker2.surname);
console.log(worker2.rate);
console.log(worker2.days);

console.log(worker3.name);
console.log(worker3.surname);
console.log(worker3.rate);
console.log(worker3.days);
console.log("Fist worker salary = " + worker1.getSalary());
console.log("Second worker salary = " + worker2.getSalary());
console.log("Third salary = " + worker3.getSalary());
console.log("Total salary = " + Worker.prototype.getTotalSalary());



