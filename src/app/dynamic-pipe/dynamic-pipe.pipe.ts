import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dynamicPipe',
  pure: true
})
export class DynamicPipePipe implements PipeTransform {

  transform(arrCar, letters:string, name:string) {
    // console.log(arrCar)
    console.log(letters)
    // console.log(name)

     var resultArr = arrCar.filter(item=>item[name].toLowerCase().indexOf(letters.toLowerCase()) !== -1);
     console.log(resultArr)
     return resultArr ;

      // var resultArr = arrCar.filter(word=>word['name'] === 'Ford')
    // console.log(resultArr)
    //  return resultArr 


  }

}
