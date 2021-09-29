// Target Variables
var newAct = document.getElementById('new-activity');
var listHolder = document.getElementById('list-holder');
var listHolder1 = document.getElementById('list-holder1');



function add () {
    
    //create 
    var division = document.createElement('div');
    var header = document.createElement('h1');
    var para = document.createElement('para');
    var btn1 = document.createElement('button');
    var btn2 = document.createElement('button');
    var btn3 = document.createElement('button');

    //append to holder and divisions
    listHolder.append(division);
    division.append(header);
    division.append(btn1);
    division.append(btn2);
    division.append(btn3);

    
    //show output
    if (newAct.value == '') {
        console.log('error');
        
    } 
    else
    {
        header.innerHTML = "New Task: " + newAct.value; //add    
        division.classList.add('arrangement');
        btn2.style.margin = '10px';

        btn1.innerHTML = "edit";

        btn1.classList.add('btn');

        btn2.innerHTML = "Completed";
        btn3.innerHTML = "Abort";


        //push event
        btn2.onclick = completeTask; //add evt del when click
        btn3.onclick = abortTask;
        btn1.onclick = edit; //add evt complete when click

        function abortTask () {
            division.remove();
            }


        function edit() 
        {
            console.log("press enter when done");
            var new1 = document.createElement('input');
            header.append(new1)
            // division.append(new1)
            
            new1.addEventListener('keydown', function (evt)
            {
    
            if (evt.key == 'Enter' ) 
            {
                console.log('Enter is pressed');
                header.innerHTML = "New task: " + new1.value;
            }
            })
        }
    }
}










//part 3
function completeTask() {
    console.log(this.parentNode);
    this.parentNode.remove();
    
    var division = document.createElement('div');
    var header = document.createElement('h1');
    var btn1 = document.createElement('button');
    var btn2 = document.createElement('button');
    var btn3 = document.createElement('button');


    header.innerHTML = "New Task: " + newAct.value; //add
    
    division.classList.add('complete');
    btn2.style.margin = '10px';
    btn1.innerHTML = "edit";
    btn1.classList.add('btn');
    btn2.innerHTML = "delete";

    listHolder1.append(division);
    division.append(header);
    // division.append(btn1);
    division.append(btn2);

    btn2.onclick = deleteTask;

    function deleteTask() {
        this.parentNode.remove();
    }

}






