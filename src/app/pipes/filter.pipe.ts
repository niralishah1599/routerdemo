import { Pipe, PipeTransform,Injectable } from '@angular/core';
import {Iproducts} from 'src/app/models/products.model';

@Pipe({
  name: 'filter'
})
@Injectable({
  providedIn: 'root'
})
export class FilterPipe implements PipeTransform {

  transform(items :Iproducts[], field: any, value: any): any 
  {
    if (!items)
    {
      return [];
    }
    if (!field || !value)
    {
      return items;
    }
    

      return items.filter(item => {
        if (typeof(field) === 'string' && item[field].toString().toLowerCase().
        includes(value.toLowerCase()))
        {
          console.log('')
          return items
        }
         else 
        {
          console.log("field :: ", field)
          if (
            typeof(field) === 'object' && item[field[0]].toString().toLowerCase().includes(value.toLowerCase()) ||
            typeof(field) === 'object' && item[field[1]].toString().toLowerCase().includes(value.toLowerCase()) ||
            typeof(field) === 'object' && item[field[2]].toString().toLowerCase().includes(value.toLowerCase()) ||
            typeof(field) === 'object' && item[field[3]].toString().toLowerCase().includes(value.toLowerCase())
          ) 
          {
            return items
          }
        }
      });
    }
  }
  