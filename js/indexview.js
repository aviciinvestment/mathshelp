'use strict';
import { linear_diff } from "./indexmodel.js"
import { linear_int } from "./indexmodel.js"
import { simult } from "./indexmodel.js";
import { quad } from "./indexmodel.js";


const submit_diff = document.querySelector('.submit_diff');
const scrolldown= document.querySelector('.scrolldown');
const submit_int = document.querySelector('.submit_int');
const submit_simult = document.querySelector('.submit_simult');
const Linear_Quad = document.querySelector('.Linear_Quad');
const submit_Quad = document.querySelector('.submit_Quad')
const title1 = document.querySelector('.title1');
const title4 = document.querySelector('.title4')

///////////////////////////////////////////
///enabling dark mode
const body = document.querySelector('body');
const mode = document.querySelector('.mode');
const h2 = document.querySelectorAll('h2');
const input = document.querySelectorAll('input');
const footer = document.querySelector('.footer');


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


 ///////////////////////////////////
 ////submiting the solving of simulteneous equation
 submit_Quad.addEventListener('click', function(e) {
    e.preventDefault();
    quad._quad()
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


//////////////////////
//output for quadratic equation
export const outputQuad = document.querySelector('.outputQuad');

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
        this._mode()
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
                Linear_Quad.scrollIntoView({behavior: "smooth"})
            });


            ///////////////////////////////
        function obsfunction(entries){
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    Linear_Quad.style.opacity = '100%';
                    Linear_Quad.style.marginTop = '10px';
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
            title4.innerHTML = animate('Quadratic Equation aX<sup>2</sup> +  bX + C = 0')
        }, 100);


               }else{
                    Linear_Quad.style.opacity = '50%';
                    Linear_Quad.style.marginTop = '200px';   
                    scrolldown.style.visibility = 'visible';
                    title4.innerHTML = ''         
               }
            });
            }
            const obsoption = {
                thresholds: 1.0,
                roots:null
            }
            const observer = new IntersectionObserver(obsfunction,obsoption);
            observer.observe(Linear_Quad)
        
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
        /////////////////////////////////////
        _mode(){
            //localStorage.clear()
            const storemode = () => {
                mode.textContent = localStorage.getItem('modetext')
                mode.classList.remove(localStorage.getItem('mode1'))
                mode.classList.add(localStorage.getItem('mode2'))
                body.style.backgroundColor = localStorage.getItem('color1');
                footer.style.color = localStorage.getItem('color2');
                input.forEach((elem) => {
                    elem.style.backgroundColor = localStorage.getItem('color1');
                    elem.style.color = localStorage.getItem('color2');
                });
                h2.forEach((elem) => {
                    elem.style.color = localStorage.getItem('color2');
                })
            };


            let modes = true
            mode.addEventListener('click', function(){

                modes = !modes
                if(modes){
                    localStorage.setItem('mode1','darkmode');
                    localStorage.setItem('mode2','lightmode');
                    localStorage.setItem('modetext','dark mode');
                    localStorage.setItem('color1','white');
                    localStorage.setItem('color2','black');
                }else{
                    localStorage.setItem('mode1','lightmode');
                    localStorage.setItem('mode2','darkmode');
                    localStorage.setItem('modetext','light mode');
                    localStorage.setItem('color1','black');
                    localStorage.setItem('color2','white');
                };
                
                storemode();
            })
            storemode();
            mode.textContent = 'dark mode';

        }


 }

const Display = new display()