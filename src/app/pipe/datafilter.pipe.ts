import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datafilter',
  pure: false
})
export class DatafilterPipe implements PipeTransform {
  constructor(){
  }

  transform(value:any, ...args: any){

      if(args.length > 0){
        return value.filter((resValue: any) =>{
          if(resValue.name.indexOf(args[0]) > -1 ||
             resValue.designation.indexOf(args[1]) > -1 ||
             resValue.age ==  args[2] ||
             resValue.dos ==  args[3] ||
             resValue.doe ==  args[4]  )
            {
              if( resValue.dos ==  args[3] &&  resValue.doe ==  args[4]){
                const x = new Date(resValue.dos);
                const y = new Date(resValue.doe);
                if(+x == +y){
                  return resValue;
                }
                else if(x < y){
                  return resValue;
                }

              }
              else{
                return resValue;
              }

            }
      });
    }
    else{
      return value;
    }
  }

}
