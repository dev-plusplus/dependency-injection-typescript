export interface Injectable{}

export class DatabaseInjectable implements Injectable {
    constructor() {
        console.log("DatabaseInjectable");
    }
}

export class StripeInjectable implements Injectable {
    constructor() {
        console.log("DatabaseInjectable");
    }
}
