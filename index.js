const mainContainer=document.querySelector(".main")
const thankContainer=document.querySelector(".thankyou")

const divItems = document.getElementsByClassName("circles");
const rater=document.getElementById('rating');
const rates=document.querySelectorAll('.number');
const submitButton=document.getElementById('submitBtn');

submitButton.addEventListener('click',()=>{
    thankContainer.classList.remove('hidden');
    mainContainer.style.display='none';
})

function selected(item) {
  this.clear();
  item.style.backgroundColor = "hsl(217, 12%, 63%)";
  item.style.color = "white";
}

function clear() {
  for (var i = 0; i < divItems.length; i++) {
    var item = divItems[i];
    item.style.color = "hsl(217, 12%, 63%)";
    item.style.backgroundColor = "hsl(213, 22%, 24%)";
  }
}

rates.forEach((rate)=>{
    rate.addEventListener('click',()=>{
        let vote=rate.innerHTML;
        rater.innerHTML=vote;
        rater.style.backgroundColor='hsl(213, 22%, 24%)';
    })
})

