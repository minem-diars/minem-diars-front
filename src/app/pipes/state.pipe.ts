import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'state'
})
export class StatePipe implements PipeTransform {

  transform(value: any, args: any): any {
    if (args === 'p') {
      if (value === 0 ) {
        return 'APROBADO';
      } else if (value === 1) {
        return 'DESAPROBADO';
      } else if (value === 2) {
        return 'EN ESPERA';
      } else if (value === 3) {
        return 'DERIVADO';
      }
    } else if (args === 'v') {
      if (value === 0 ) {
        return 'NO COSTEADO POR MINERA';
      } else if (value === 1) {
        return 'COSTEADO POR MINERA';
      }
    }

  }
}
