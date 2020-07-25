document.body.onload = gamePage();

function gamePage(){
   
    var level = 'level-1';
    var game = addElement("game-container",0) 
    let currDiv = document.getElementById("intro");
    document.body.insertBefore(game, currDiv);
    if(level == 'level-1'){
        let temp = document.getElementsByTagName("div")[1]; 
        temp.setAttribute("id",level);
        let rand_arr = shuffle(Array.from(Array(8), (_, i) => i + 1));
        for(let i=1,j=0;i<10;i++,j++){
            let newDiv = addElement("game-box",rand_arr[j]);
            let currentDiv = document.getElementById(level); 
            currentDiv.appendChild(newDiv);
        }
    }
    if(level == 'level-2'){
        let temp = document.getElementsByTagName("div")[1]; 
        temp.setAttribute("id",level);
        let rand_arr = shuffle(Array.from(Array(15), (_, i) => i + 1));
        for(let i=1,j=0;i<17;i++,j++){
            let newDiv = addElement("game-box",rand_arr[j]);
            let currentDiv = document.getElementById(level); 
            currentDiv.appendChild(newDiv);
        }
    }
    if(level == 'level-3'){
        let temp = document.getElementsByTagName("div")[1]; 
        temp.setAttribute("id",level);
        let rand_arr = shuffle(Array.from(Array(24), (_, i) => i + 1));
        for(let i=1,j=0;i<26;i++,j++){
            let newDiv = addElement("game-box",rand_arr[j]);
            let currentDiv = document.getElementById(level); 
            currentDiv.appendChild(newDiv);
        }
    }
    if(level == 'level-4'){
        let temp = document.getElementsByTagName("div")[1]; 
        temp.setAttribute("id",level);
        let rand_arr = shuffle(Array.from(Array(35), (_, i) => i + 1));
        for(let i=1,j=0;i<37;i++,j++){
            let newDiv = addElement("game-box",rand_arr[j]);
            let currentDiv = document.getElementById(level); 
            currentDiv.appendChild(newDiv);
        }
    }

    var maxTicks = 60;
    var tickCount = 0;

    var tick = function()
    {
        if (tickCount >= maxTicks)
        {
            clearInterval(myInterval);
            return;
        }
        document.querySelector("#timer").innerHTML = (maxTicks - tickCount);
        tickCount++;
    };

    // Start calling tick function every 1 second.
    var myInterval = setInterval(tick, 1000);
}

function addElement (class_name,n=0,) { 
  var newDiv = document.createElement("div");
  newDiv.setAttribute("class",class_name);
  if(n != 0){
    var newContent = document.createTextNode(n); 
    newDiv.appendChild(newContent);
  }
  return newDiv; 
}

function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;
    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }
    return array;
}


