//target elements and turn to var
// let amountInput = document.getElementById('amountInput');
// let quantity = document.getElementById('qtyInput');
// let price = document.getElementById('price');
// let item = document.getElementById('item');

// var total1 = document.getElementById('total1');
// var total2 = document.getElementById('total2');
// var total3 = document.getElementById('total3');

// function doCal(){
//     total1 = Number(amountInput.value) + Number(quantity.value);
//     console.log(Number(amountInput.value) + Number(qtyInput.value)); //input is string
    
//     document.getElementById('total1').textContent = total1;
//     // total1.value = total;
// }

// function doCal1 () {
//     total2 = Number(price.value) + Number(item.value);
//     console.log(Number(price.value) + Number(item.value));
    
//     document.getElementById('total2').textContent = total2;
//     // total2.value = total2;
// }

// function doCal2 () {
//     total3 = Number(total2) + Number(total1);
//     document.getElementById('total3').textContent = total3;
//     // total3.value = total3;

// }



// Add To Do List 

// var section1 = [
//     {
//         input: '',
//         process: '',
//         sum: '',
//     }
//     ]



var holder = document.getElementById('holder');

function addNew(){
    var division = document.createElement('div'); //create div
    division.classList.add('list'); //create section class

    var input1 = document.createElement('input'); //create input
    input1.onchange = validation;

    var input2 = document.createElement('input'); //create input
    input2.onchange = validation;

    var para = document.createElement('p'); //create para
    para.innerHTML = 0;

    holder.append(division);
    division.append(input1);
    division.append(input2);
    division.append(para);

}


var gTotal = 0;
function validation () {
    console.log(this.parentNode);
    // var listNode = this.parentNode
    
    var sectionNode = this.parentNode;
    var inputList = sectionNode.querySelectorAll('input');
    var subTotal =  inputList[0].value * inputList[1].value; //input
   
    sectionNode.querySelector('p').innerHTML = subTotal;
   
    gTotal += subTotal;
    console.log(gTotal);

    //relook at the ID.
}
























//  var sliderEle = document.createElement('div'); var to create div

//  var sliderTitle = document.createElement('h1'); var sliderTitle to create h1
//  sliderTitle.innerHTML = sliderItem[i].title; print var in html according to item.

//  var sliderSubTitle = document.createElement('p'); var to create Subtitle (p)
//  sliderSubTitle.innerHTML = sliderItem[i].subTitle; print var in html according to item

//  sliderEle.classList.add('slider'); create class (a sub class call slider inside the div)
//  sliderEle.appendChild(sliderTitle); put sliderTitle into slider class
//  sliderEle.appendChild(sliderSubTitle);  put slidersubTitle into slider class

//  sliderEle.style.backgroundImage = sliderItem[i].bgImg; edit style for background
//  sliderHolder.appendChild(sliderEle); put sliderEle (div and class) into variable sliderHolder.