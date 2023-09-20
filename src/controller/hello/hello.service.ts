import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {

    public getHello(name?: string): string {
        return name ? `Hello World ${name} !` : "Hello World !";
    }
}
