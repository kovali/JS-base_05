//make worker
function Worker(worker) {
    this.name = worker.name;
    this.surname = worker.surname;
    this.rate = worker.rate;
    this.days = worker.days;
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


function getTotalSalary(workers) {
    var TotalSalary = 0;

    for (var i = 0; i < workers.length; i++) {
        var worker = workers[i];
        var workerSalary = worker.getSalary();
        TotalSalary = TotalSalary + workerSalary;
    }

    return TotalSalary;
}


console.log(worker1.name);
console.log(worker1.surname);
console.log(worker1.rate);
console.log(worker1.days);

console.log("Fist worker salary = " + worker1.getSalary());
console.log("Second worker salary = " + worker2.getSalary());
console.log("Third salary = " + worker3.getSalary());
console.log("Total salary = " + getTotalSalary([worker1, worker2, worker3]));


function Director() {
}

Director.prototype = Object.create(Worker.prototype);
Director.prototype.constructor = Director;
Director.prototype.workers = {};
Director.prototype.addWorker = function (worker) {
    this.workers[worker.name] = worker;
};
Director.prototype.deleteWorker = function (name) {
    delete this.workers[name];
};
Director.prototype.getWorker = function (name) {
    return this.workers[name];
};
Director.prototype.setWorkerRate = function (name, rate) {
    this.getWorker(name).rate = rate;
};

var director = new Director({
    name: 'Alec',
    surname: 'P',
    rate: 30,
    days: 20
});

director.addWorker(worker1);
director.addWorker(worker2);
director.addWorker(worker3);

console.log("Director workers: " + director.workers);

console.log("First director worker salary: " + director.getWorker(worker1.name).getSalary());
director.setWorkerRate(worker1.name, 900);
console.log("First director worker salary after change: " + director.getWorker(worker1.name).getSalary());
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



