import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculadoraService {

    sumar2Numeros(datos):number{ 
        let suma:number = (+datos['num1'])+(+datos['num2']);
        return suma;   
    }

    restar2Numeros(datos):number{ 
        let resta:number = (+datos['num1'])-(+datos['num2']);
        return resta;   
    }


    multiplicar2Numeros(datos):number{ 
        let multi:number = (+datos['num1'])*(+datos['num2']);
        return multi;   
    }

    dividir2Numeros(datos):number{ 
        let divi:number = (+datos['num1'])/(+datos['num2']);
        return divi;   
    }
    //post
    suma2Numeros(body):number{ 
        let suma:number = (+body['num1'])+(+body['num2']);
        return suma;   
    }

    resta2Numeros(body):number{ 
        let resta:number = (+body['num1'])-(+body['num2']);
        return resta;   
    }

    multiplica2Numeros(body):number{ 
        let multiplica:number = (+body['num1'])*(+body['num2']);
        return multiplica;   
    }

    division2Numeros(body):number{ 
        let division:number = (+body['num1'])/(+body['num2']);
        return division;   
    }
}
