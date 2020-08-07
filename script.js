var list = document.getElementsByClassName("box"),
button = document.getElementById("shuffle"),
sortList = document.getElementsByClassName("box")[0].children;

function shuffleFunction()
{    
    let childNodes = list[0].children, listItems, temp, random;
    childNodes = Array.prototype.slice.call(childNodes);

    listItems = childNodes.slice(0);

    for(let i=listItems.length-1; i > -1; i--){   
        random = Math.floor(i * Math.random());
        temp = listItems[random];
        listItems[random] = listItems[i];
        listItems[i] = temp;
    }

    for(let i=0; i < listItems.length; i++){        
        list[0].appendChild(listItems[i]);
    };
} 

function sortingFunction(){    
    let temp = [], i = 0,j=0;
    for(let i=0; i < sortList.length; i++){        
        temp[parseInt(sortList[i].innerHTML)-1] = sortList[i];
    };       
    for(let j=0; j < temp.length; j++){        
        list[0].appendChild(temp[j]);
    };   
}