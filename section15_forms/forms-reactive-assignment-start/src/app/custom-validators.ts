import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators {

    static invalidProjectName(control: FormControl): {[s:string]: boolean} {
        if(control.value === 'Test'){
            return {'invalidProjectName': true}
        }
        return null;
    }

    static invalidProjectNameAsync(control:FormControl): Promise<any> | Observable<any> {
        const forbiddenNames = 'Test';
        const promise = new Promise<any>((resolve, reject) => {
          setTimeout(() => {
            if(control.value === forbiddenNames) {
              resolve({'nameIsForbidden': true});
            } else {
              resolve(null);
            }
          }, 1500);
        });
        return promise;
    }
}