import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): unknown {
    if(value.length === 0){
      return null;
    }
    let resultArray = [];
    for(const character of value){
      console.log(character[propName].toLowerCase());
      if(filterString === undefined || filterString.length==0 || character[propName].toLowerCase().indexOf(filterString.toLowerCase()) != -1){
        resultArray.push(character);
      }
    }
    return resultArray;
  }

}
