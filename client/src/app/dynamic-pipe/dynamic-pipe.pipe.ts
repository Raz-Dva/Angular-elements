import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dynamicPipe',
  pure: false
})
export class DynamicPipePipe implements PipeTransform {

  transform(arrCar, letters:string, name:string) {
    
    return  arrCar.filter(item=>item[name].toString().toLowerCase().indexOf(letters.toLowerCase()) !== -1);
      
  }

}
