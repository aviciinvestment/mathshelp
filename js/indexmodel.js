'use strict';

import { output } from "./indexview.js";
import { outputint } from "./indexview.js";
import { outputsimult } from "./indexview.js";


///////////////////////////////
class Linear_diff {
    constructor() {
        //calling the initials to access the Dom Elements
        this.power = power;
        this.coef_ = coef_;
        this.variable = variable;
        this.power_values;
        this.coef_values;
        this.differential;
        this.variable_value;
        this.second_power;
        this.new_coef_;
        this.equation;
        this.equations = [];        
    }
 //////////////////////////////
 //class prototype that helps in linear differentiation
    _diff(){
        this.power_values = Number(this.power.value);
        this.coef_values = Number(this.coef_.value);
        this.variable_value = this.variable.value;
        this.equations = [];
    
        this.second_power = 1;
        this.new_coef_ = this.coef_values * this.second_power;
        this.differential = this.power_values;
        while (this.power_values > 0 || (this.power_values < 0 && this.power_values > -10)) {
            this.new_coef_ = this.new_coef_ * this.second_power
            this.equation = `${Math.abs(this.power_values - this.differential)}. differential ${this.new_coef_}${this.variable_value}<sup>${this.power_values}</sup> <br>`;
            this.equations.push(this.equation);
            this.second_power = this.power_values;
            this.power_values--;
            if (this.power_values === 0) {
                this.equation = `${Math.abs(this.power_values - this.differential)}. differential ${this.new_coef_} <br>`;
                this.equations.push(this.equation);
            }
            
        };
        const textStore = [];
        let i = 0;
        function animate(text){
            if (i < text.length) {
                let show = text.split('')[i];
                textStore.push(show);
                i++ 
                return textStore.join('');
            }
            else{
                clearInterval(interval)
            }
            return textStore.join('');
        }
        const interval = setInterval(() => {
            output.innerHTML = animate(this.equations.join(''))
        }, 50);
    

       // output.innerHTML = this.equations.join('');  
        this.power.value = '';
        this.coef_.value = '';
        this.variable.value = '';
    };

}

////////////////////////

export const linear_diff = new Linear_diff();



//////////////////////////////////
//class integral
class Linear_int {
    constructor() {
        //calling the initials to access the Dom Elements
        this.powerint = powerint;
        this.coefint_ = coefint_;
        this.variableint = variableint;
        this.powerint_values;
        this.coefint_values;
        this.variableint_value;
        //this.equation;
        this.equations = [];        
    }
 //////////////////////////////
 //class prototype that helps in linear integration
    _int(){
        this.powerint_values = Number(this.powerint.value);
        this.coefint_values = Number(this.coefint_.value);
        this.variableint_value = this.variableint.value;
        this.equations = [];


        this.equation = `${this.coefint_values}${this.variableint_value}<sup>${this.powerint_values} </sup> <br>`;
        this.equations.push(this.equation);
        this.equation = `integral: (${this.coefint_values}${this.variableint_value}<sup>${this.powerint_values + 1}</sup>)
         / ${this.powerint_values + 1} + C <br>`;
        this.equations.push(this.equation);
        const textStore = [];
        let i = 0;
        function animate(text){
            if (i < text.length) {
                let show = text.split('')[i];
                textStore.push(show);
                i++ 
                return textStore.join('');
            }
            else{
                clearInterval(interval)
            }
            return textStore.join('');
        }
        const interval = setInterval(() => {
            outputint.innerHTML = animate(this.equations.join(''))
        }, 50);  
        this.powerint.value = '';
        this.coefint_.value = '';
        this.variableint.value = '';
    };
/////////////////////////////////////////////////
}

////////////////////////

export const linear_int = new Linear_int();









/////////////////////////////////////////
//class simulteneous equation//////////////////////////////////
//class integral
class Simult {
    constructor() {
        //calling the initials to access the Dom Elements
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
        this.f = f;
        this.a_values;
        this.b_values;
        this.c_values;
        this.d_values;
        this.e_values;
        this.f_values;
        //this.equation;
        this.x;
        this.y;
               
    }
 //////////////////////////////
 //class prototype that helps in linear integration
    _simult(){
        this.a_values = Number(this.a.value);
        this.b_values = Number(this.b.value);
        this.c_values = Number(this.c.value);
        this.d_values = Number(this.d.value);
        this.e_values = Number(this.e.value);
        this.f_values = Number(this.f.value);
        let firstx = this.c_values*((this.e_values * this.a_values )- (this.b_values * this.d_values)) + this.b_values*((this.d_values * this.c_values) - (this.f_values * this.a_values));
        let secondx = ((this.e_values*this.a_values*this.a_values) - (this.a_values*this.b_values*this.d_values));
        this.x = firstx / secondx;
        let firsty = ((this.f_values*this.a_values) - (this.d_values*this.c_values));
        let secondy = ((this.e_values * this.a_values)-(this.b_values*this.d_values));
        this.y = firsty / secondy;
        if (secondy === 0 || secondx === 0) {
            outputsimult.innerHTML = ''; 
        }else{
            const textStore = [];
        let i = 0;
        function animate(text){
            if (i < text.length) {
                let show = text.split('')[i];
                textStore.push(show);
                i++ 
                return textStore.join('');
            }
            else{
                clearInterval(interval)
            }
            return textStore.join('');
        }
        const interval = setInterval(() => {
            outputsimult.innerHTML =  animate(`X = ${this.x} <br> Y = ${this.y}`)
        }, 50);  
            
        }

        this.a.value = '';
        this.b.value = '';
        this.c.value = '';
        this.d.value = '';
        this.e.value = '';
        this.f.value =''

    }
/////////////////////////////////////////////////
}

////////////////////////

export const simult  = new Simult();