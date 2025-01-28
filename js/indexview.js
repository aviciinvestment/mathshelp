'use strict';
const button = document.querySelector('.button');
const element = document.querySelector('.element');
const output = document.querySelector('.output');
const submit_diff = document.querySelector('.submit_diff');


///////////////////////////////
class Linear_diff {
    constructor() {
        //calling the initials to access the Dom Elements
        this.power = document.querySelector('#power');
        this.coef_ = document.querySelector('#coef_');
        this.variable = document.querySelector('#variable');
        this.power_values;
        this.coef_values;
        this.variable_value;
        this.second_power;
        this.new_coef_;
        this.equation;
        this.equations = [];        
    }
 //////////////////////////////
    _diff(){
        this.power_values = Number(this.power.value);
        this.coef_values = Number(this.coef_.value);
        this.variable_value = this.variable.value;

        output.innerHTML = 'yyyyyy';
    
        this.second_power = 1;
        this.new_coef_ = this.coef_values * this.second_power;
        while (this.power_values > 0) {
            this.new_coef_ = this.new_coef_ * this.second_power
            this.equation = `${this.new_coef_}${this.variable_value}<sup>${this.power_values}</sup>`;
            this.equations.push(this.equation);
            this.second_power = this.power_values;
            this.power_values--;
            if (this.power_values === 0) {
                this.equation = this.new_coef_;
                this.equations.push(this.equation);
            }
        };

        output.innerHTML = this.equations.join(' >>> ');  
        this.power.value = '';
        this.coef_.value = '';
        this.variable.value = '';
    };


}

////////////////////////

const linear_diff = new Linear_diff();



 ///////////////////////////////////
 ////submiting the solving
submit_diff.addEventListener('click', function() {
    linear_diff._diff()
})