

function inicio(){

for(i=0;i<$('.KambiBC-mod-outcome').length;i++){

if(parseFloat($('.KambiBC-mod-outcome')[i].textContent.substr($('.KambiBC-mod-outcome')[i].textContent.length-4,$('.KambiBC-mod-outcome')[i].textContent.length-1))<=1.20 && parseFloat($('.KambiBC-mod-outcome')[i].textContent.substr($('.KambiBC-mod-outcome')[i].textContent.length-4,$('.KambiBC-mod-outcome')[i].textContent.length-1))>=1.01  ){

$('.KambiBC-mod-outcome')[i].click()
break


}}}






function tryit(){



alert('')}
