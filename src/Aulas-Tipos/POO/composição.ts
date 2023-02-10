export class Car {
    private readonly engine: Engine = new Engine();

    start(): void {
        this.engine.start();
    }

    accelerate(): void {
        this.engine.accelerate();
    }
}

export class Engine {
    start(): void {
        console.log("The car is starting");
    }

    accelerate(): void {
        console.log("The car is accelerating");
    }
}

const car = new Car();

car.accelerate();
