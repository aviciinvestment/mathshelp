'use strict';
import { linear_diff } from "./indexmodel.js"
import { linear_int } from "./indexmodel.js"
import { simult } from "./indexmodel.js";


const submit_diff = document.querySelector('.submit_diff');
const scrolldown= document.querySelector('.scrolldown');
const submit_int = document.querySelector('.submit_int');
const Linear_int = document.querySelector('.Linear_int');
const submit_simult = document.querySelector('.submit_simult');
const title1 = document.querySelector('.title1');
const title2 = document.querySelector('.title2')


 ///////////////////////////////////
 ////submiting the solving of differentiation
submit_diff.addEventListener('click', function() {
    linear_diff._diff()
})

 ///////////////////////////////////
 ////submiting the solving of integration
 submit_int.addEventListener('click', function() {
    linear_int._int()
})


 ///////////////////////////////////
 ////submiting the solving of simulteneous equation
 submit_simult.addEventListener('click', function(e) {
    e.preventDefault();
    simult._simult()
})



//////////////////////
//output for differentiation
export const output = document.querySelector('.output');


//////////////////////
//output for integration
export const outputint = document.querySelector('.outputint');

//////////////////////
//output for simulteneous equation
export const outputsimult = document.querySelector('.outputsimult');

//////////////////////////////////////
//displaying the table
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const table = document.querySelector('.table');


class display{
    constructor(){
        this._toggle();
        this._scrolldown();
        this._textAnimation()
    }
//////////////////////////////////////////////////////////////
        _toggle(){
            function events() {
                open.classList.remove(this === open ? 'show' : 'noshow');
                 open.classList.add(this === open ? 'noshow' : 'show');
                 close.classList.remove(this === open ? 'noshow' : 'show');
                 close.classList.add(this === open ? 'show' : 'noshow');
                 table.classList.remove(this === open ? 'noshow' : 'show');
                 table.classList.add(this === open ? 'show' : 'noshow')
             };
             open.addEventListener('click', events)
             close.addEventListener('click', events)
        }
////////////////////////////////////////////////////////////
        _scrolldown(){
            scrolldown.style.top = `${window.innerHeight - 50}px`;
            scrolldown.style.left = `${window.innerWidth/2}px`;
            scrolldown.addEventListener('click', function(){
                Linear_int.scrollIntoView({behavior: "smooth"})
            });


            ///////////////////////////////
        function obsfunction(entries){
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    Linear_int.style.opacity = '100%';
                    Linear_int.style.marginTop = '10px';
                    scrolldown.style.visibility = 'hidden'
                    const textStore = [];
            let i = 0;
            //Animating the title
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
            title2.innerHTML = animate('INTEGRATION(Linear)  coef_ X <sup>power</sup>')
        }, 100);


               }else{
                    Linear_int.style.opacity = '50%';
                    Linear_int.style.marginTop = '200px';   
                    scrolldown.style.visibility = 'visible';
                    title2.innerHTML = ''         
               }
            });
            }
            const obsoption = {
                thresholds: 1.0,
                roots:null
            }
            const observer = new IntersectionObserver(obsfunction,obsoption);
            observer.observe(Linear_int)
        
        }
///////////////////////////////////////////////////////////
        _textAnimation(){
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
            title1.innerHTML = animate('DIFFERENTIATION(Linear)  coef_ X <sup>power</sup>')
        }, 100);
        }

 }

const Display = new display()