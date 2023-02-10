import {DatabaseInjectable, StripeInjectable} from "./injectable";
import {injector} from "./injector";

export interface Service {
}

export class BalanceService implements Service {
    constructor(database: DatabaseInjectable, stripe: StripeInjectable) {

    }

    async calculateBalance() {
        // DO something here with the database and stripe
        return 0;
    }
}

injector.register(BalanceService, [DatabaseInjectable, StripeInjectable]);
