import {Service} from "./service";
import {Injectable} from "./injectable";

class Injector {
    services: Map<Service, Injectable[]> = new Map();

    register(service: Service, dependencies: Injectable[]) {
        this.services.set(service, dependencies);
    }
    create(service: Service): Service {
        const dependencies = this.services.get(service);
        if (!dependencies) {
            throw new Error("Service not registered");
        }
        const args = dependencies.map(dependency => this.create(dependency));
        // @ts-ignore
        return new service(...args);
    }
}

export const injector = new Injector();
