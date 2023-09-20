import {BadRequestException, Controller} from '@nestjs/common';
import {HelloService} from "./hello.service";

@Controller('hello')
export class HelloController {
    constructor(private helloService: HelloService) {}

    public getHello(): string {
        return this.helloService.getHello();
    }

    public getHelloByName(name: string): string {
        if (name) {
            return this.helloService.getHello(name);
        } else {
            throw new BadRequestException("Cannot say Hello to null; who will answer you??");
        }
    }
}
