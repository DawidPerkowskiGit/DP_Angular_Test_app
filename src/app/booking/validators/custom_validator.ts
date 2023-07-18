import { AbstractControl, FormGroup } from "@angular/forms";

export class CustomValidator {
    static Validatename(control: AbstractControl) {
        const value = control.value as string;
        if (value.includes('test')) {
            return {
                invalidName: true
            }
        }
        return null;
    }

    static ValidateSpecialChar(char: string) {
        return (control: AbstractControl) => {
            const value = control.value as string;
            if (value.includes(char)) {
                return {
                    invalidSpecialChar: true,
                }
            }
            return null;
        }
    }

    static validateDate(control: FormGroup) {
        const checkinDate: any = new Date(control.get('checkinDate')?.value) ;
        const checkoutDate: any = new Date(control.get('checkoutDate')?.value) ;
        const difftime = (checkoutDate - checkinDate);
        console.log(difftime);
        
        if (difftime < 0) {
            control.get('checkoutDate')?.setErrors({
                invalidDate: true,
            })
            return {
                invalidDate: true,
            };
        }
        control.get('checkoutDate')?.setErrors({
            invalidDate: false,
        })
        return null;
    }
}