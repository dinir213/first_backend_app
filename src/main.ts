import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { ConfigService } from "@nestjs/config";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('port');

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
      .setTitle("firstBack API")
      .setDescription("This for studying")
      .setVersion("1.0")
      .addTag("API")
      .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  console.log(port)
//   console.log('1');
//   console.log(5);
//   let counter: number;
//   counter = 10;
//   console.log(counter);
//   let str: string = 'Это строка!';
//   console.log(str);
//   let active: boolean = true;
//   console.log(active);
//   let arrayName: string[] = ['первый элемент', 'второй', 'третий', 'четвертый'];
//   console.log(arrayName);
//
//   let person: {
//     name: string;
//     age: number;
//   };
//   person = {
//     name: 'ThisName',
//     age: 15
//   };
//   console.log(person);
//   let massive: number[] = [1, 2, 3, 4, 5];
//   console.log(massive);
//   let box: {
//     length: number;
//     width: number;
//     height: number;
//   };
//   box = {
//     length: 10,
//     width: 15,
//     height: 20,
//   };
//   console.log(box)
//   let greeting: (name: string) => string;
//   greeting = function (name: string){
//     return `Привет ${name}!`;
//   }
//   console.log(greeting('Steve'));
//
//   let str1: string = `это строка ТС
// Содержит несколько
// строк`;
//   console.log(str1);
//
//   let firstName: string = `Olesya`;
//   let title: string = `web developer`;
//   let profile: string = `My name is ${firstName}.
// I am ${title}`;
//   console.log(profile);
//
//   let employee: {
//     firstName: string;
//     lastName: string;
//     age: number;
//     jobTitle: string;
//   } = {
//     firstName: 'Ivan',
//     lastName: 'Petrov',
//     age: 25,
//     jobTitle: 'Web developer'
//   };
//
//   console.log(employee);
//   console.log(employee.firstName);
//
//   let mass2: string[] = ['el1', 'el2', 'el3', 'el4', 'el5'];
//   console.log(mass2.length);

}
bootstrap();
