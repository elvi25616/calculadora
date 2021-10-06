import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CalculadoraService } from './calculadora.service';


@Controller('calculadora')
export class CalculadoraController {
    constructor(private readonly calculadoraService: CalculadoraService){}

    @Get('sumar')
    //numeros={num1=1, num2=0}
    getSumar(@Query() datosQuery) {

        let resultado: number = this.calculadoraService.sumar2Numeros(datosQuery);
        console.log(resultado);
        if(resultado>=0){
            return {
                'status':true,
                'nameQuery':datosQuery['name'],
                'operation':datosQuery['num1']+'+'+datosQuery['num2'],
                'result':resultado
            };

        }else{
            return{
                'status':false,
                'nameQuery':datosQuery['name'],
                'operation':datosQuery['num1']+'+'+datosQuery['num2'],
                'result':'params error type'
            };
        }
       
       
    }

    @Get('restar')
    //numeros={num1=1, num2=0}
    getRestar(@Query() datosQuery) {

        let resultado: number = this.calculadoraService.restar2Numeros(datosQuery);
        console.log(resultado);
        if(resultado>=0){
            return {
                'status':true,
                'nameQuery':datosQuery['name'],
                'operation':datosQuery['num1']+'-'+datosQuery['num2'],
                'result':resultado
            };

        }else{
            return{
                'status':false,
                'nameQuery':datosQuery['name'],
                'operation':datosQuery['num1']+'-'+datosQuery['num2'],
                'result':'params error type'
            };
        }
       
       
    }


    @Get('multiplicar')
    //numeros={num1=1, num2=0}
    getMultiplicar(@Query() datosQuery) {

        let resultado: number = this.calculadoraService.multiplicar2Numeros(datosQuery);
        console.log(resultado);
        if(resultado>=0){
            return {
                'status':true,
                'nameQuery':datosQuery['name'],
                'operation':datosQuery['num1']+'*'+datosQuery['num2'],
                'result':resultado
            };

        }else{
            return{
                'status':false,
                'nameQuery':datosQuery['name'],
                'operation':datosQuery['num1']+'*'+datosQuery['num2'],
                'result':'params error type'
            };
        }
       
       
    }


    @Get('dividir')
    //numeros={num1=1, num2=0}
    getDividir(@Query() datosQuery) {

        let resultado: number = this.calculadoraService.dividir2Numeros(datosQuery);
        console.log(resultado);
        if(resultado>=0){
            return {
                'status':true,
                'nameQuery':datosQuery['name'],
                'operation':datosQuery['num1']+'/'+datosQuery['num2'],
                'result':resultado
            };

        }else{
            return{
                'status':false,
                'nameQuery':datosQuery['name'],
                'operation':datosQuery['num1']+'/'+datosQuery['num2'],
                'result':'params error type'
            };
        }
       
       
    }

    @Post('suma')
    //numeros={num1=1, num2=0}
    createSumar(@Body() Body) {

        let resultado: number = this.calculadoraService.suma2Numeros(Body);
        console.log(resultado);
        if(resultado>=0){
            return {
                'status':true,
                'namePost':Body['name'],
                'operation':Body['num1']+'+'+Body['num2'],
                'result':resultado
            };

        }else{
            return{
                'status':false,
                'namePost':Body['name'],
                'operation':Body['num1']+'+'+Body['num2'],
                'result':'params error type'
            };
        }
       
       
    }

    @Post('resta')
    //numeros={num1=1, num2=0}
    createResta(@Body() Body) {

        let resultado: number = this.calculadoraService.resta2Numeros(Body);
        console.log(resultado);
        if(resultado>=0){
            return {
                'status':true,
                'namePost':Body['name'],
                'operation':Body['num1']+'-'+Body['num2'],
                'result':resultado
            };

        }else{
            return{
                'status':false,
                'namePost':Body['name'],
                'operation':Body['num1']+'-'+Body['num2'],
                'result':'params error type'
            };
        }
       
       
    }

    @Post('multiplica')
    //numeros={num1=1, num2=0}
    createMultiplica(@Body() Body) {

        let resultado: number = this.calculadoraService.multiplica2Numeros(Body);
        console.log(resultado);
        if(resultado>=0){
            return {
                'status':true,
                'namePost':Body['name'],
                'operation':Body['num1']+'*'+Body['num2'],
                'result':resultado
            };

        }else{
            return{
                'status':false,
                'namePost':Body['name'],
                'operation':Body['num1']+'*'+Body['num2'],
                'result':'params error type'
            };
        }
       
       
    }

    @Post('division')
    //numeros={num1=1, num2=0}
    createDivision(@Body() Body) {

        let resultado: number = this.calculadoraService.division2Numeros(Body);
        console.log(resultado);
        if(resultado>=0){
            return {
                'status':true,
                'namePost':Body['name'],
                'operation':Body['num1']+'/'+Body['num2'],
                'result':resultado
            };

        }else{
            return{
                'status':false,
                'namePost':Body['name'],
                'operation':Body['num1']+'/'+Body['num2'],
                'result':'params error type'
            };
        }
       
       
    }
}
