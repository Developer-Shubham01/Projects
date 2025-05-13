let input=document.getElementById('input');

function value(faceValue){
    input.value+=faceValue;
};

function calcualation(){
    input.value=eval(input.value);
};

function allClear(){
    input.value='';
};

function leftClear(){
    let newInput=input.value.slice(0,input.value.length-1);
    input.value=newInput;
};

function themeChange(){
    let section=document.querySelector('section');
    if (section.style.backgroundColor=="black" && section.style.color=="red"){
        section.style.backgroundColor="transparent";
        section.style.color="black";
    }
    else{
        section.style.backgroundColor="black";
        section.style.color="red";
    };
};

function copyOutput(){
    navigator.clipboard.writeText(input.value);
}