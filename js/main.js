'use strict';
{
   const open = document.getElementById('open');
   const overlay = document.querySelector('.overlay');
   const uppernav = document.querySelector('.header');

   const click_pre = document.getElementById('child-node');

   const click_pre_2 = document.getElementById('child-node-2');
//    const click = click_pre.

   const close = document.getElementById('close')

   open.addEventListener('click' , () => {
       overlay.classList.add('show');
       open.classList.add('hide');
       uppernav.classList.add('hide');

   });

   close.addEventListener('click' , () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
    uppernav.classList.remove('hide');
   });

   click_pre.addEventListener('click' , () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
    uppernav.classList.remove('hide');
   });

   click_pre_2.addEventListener('click' , () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
    uppernav.classList.remove('hide');
   });
}