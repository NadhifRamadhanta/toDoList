var activityList = document.querySelector('[data-activityList]');

// var markButton = document.querySelector('[data-mark]');
// var deleteButton = document.querySelector('[data-delete]');
const submitButton = document.querySelector('[data-submit]');

var div = document.createElement("div");
// var number = document.createElement("p");
// var newActivity = document.createElement("p");

// var buttons = document.createElement("div");

// var newMarkButton = document.createElement("button");
// newMarkButton.innerHTML = "Mark";

// var newDeleteButton = document.createElement("button");
// newDeleteButton.innerHTML = "Delete";

// number.innerHTML =1;
// newActivity.innerHTML = "a";

// div.classList.add('activity');

// buttons.append(newMarkButton, newDeleteButton);

// activityList.append(div);
submitButton.addEventListener('click',function(){
    if (document.getElementById('list').value == "" || /^\s*$/.test(document.getElementById('list').value)) {
        alert("TextBox tidak boleh kosong!");
    } else {
    var newDiv = document.createElement("div");
    
    var newActivity = document.createElement("p");
    newActivity.innerHTML = document.getElementById('list').value;

    var newDoneButton = document.createElement("button");
    newDoneButton.innerHTML = "Done";
    newDoneButton.setAttribute('id','doneButton');

    var newDeleteButton = document.createElement("button");
    newDeleteButton.innerHTML = "Delete";
    newDeleteButton.setAttribute('id','deleteButton');

    var buttons = document.createElement("div");
    buttons.append(newDoneButton, newDeleteButton);
    
    newDiv.classList.add('activity');
    activityList.append(newDiv);
    newDiv.append(newActivity,buttons);

    }
})


let observer = new MutationObserver((mutations) => {  
    const deleteButton = document.querySelectorAll('#deleteButton');
    const doneButton = document.querySelectorAll('#doneButton');


    if(document.querySelectorAll('#deleteButton')){
        deleteButton.forEach(button => {
            button.addEventListener('click',function(){
                this.parentNode.parentNode.parentNode.removeChild(button.parentNode.parentNode);
            })
        })
    }

    if(document.querySelectorAll('#markButton')){
        doneButton.forEach(button => {
            button.addEventListener("click",function(){
                this.parentNode.parentNode.classList.add('marked');
                this.disabled = true

                // switch (window.getComputedStyle(this.parentNode.parentNode).getPropertyValue('background-color') ) {
                //     case 'rgb(229, 203, 159)':
                //         this.parentNode.parentNode.style.backgroundColor = '#77dd77';
                //         console.log('berhasil');
                //         break;
                
                //     default:
                //         this.parentNode.parentNode.style.backgroundColor = '';
                //         console.log('kosong');
                //         break;
                // }

                // if (this.parentNode.parentNode.classList.contains('marked')) {
                //     this.parentNode.parentNode.classList.remove('marked');
                //     console.log("remove marked class");
                // } else {
                //     this.parentNode.parentNode.classList.add('marked');
                //     console.log("add marked class");
                // }

                // if (window.getComputedStyle(this.parentNode.parentNode).getPropertyValue('background-color') == 'rgb(229, 203, 159)') {
                //     console.log(window.getComputedStyle(this.parentNode.parentNode).getPropertyValue('background-color'));
                    
                //     this.parentNode.parentNode.style.backgroundColor = '#77dd77';
                // } else {
                //     this.parentNode.parentNode.style.backgroundColor = '';
                // }           
            })
        })
    }
    
  })
  
  observer.observe(document.body, {
      childList: true
    , subtree: true
    , attributes: false
    , characterData: false
  })
  



// const observer = new MutationObserver((mutation, obs) => {
//     if(mutation){
//         alert('test');
//         obs.disconnect();
//         return;
//     }
// });

// observer.observe(deleteButton, 
//     {
//     attributes:true,
//     childList: true, 
//     subtree: true
//     });


