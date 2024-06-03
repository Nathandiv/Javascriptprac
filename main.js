let Fname = prompt ('Enter your first Name :');
let surname = prompt ('Enter your Surname :');
let citizenship = prompt ('Enter your Citizenship :');
let age = Number(prompt ('Enter your age :'));

if ( age >= 18 && citizenship =='South Africa'){
   alert ('Hi '+ Fname+''+ surname +''+ ' you can vote')}
else {
   alert ('Hi '+ Fname+''+ surname +''+ ' you cant vote')
}


