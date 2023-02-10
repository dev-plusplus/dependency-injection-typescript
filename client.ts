import {injector} from "./injector";
import {BalanceService, Service} from "./service";

class Express {
    get(route: string, service: Service) {

    }
}

const main = async (): Promise<void> => {
    const app = new Express();
    const balanceService = injector.create(BalanceService);
    app.get("/balance", balanceService);
};

void main();
