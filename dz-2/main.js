//dz1
let counterLeft = 0
let counterTop = 0
let counterLeftEnd = 450
let counterTopEnd = 400
const mini = document.querySelector(".mini_block")
const max = document.querySelector(".main_block")
max.addEventListener("click",rev=()=> {
    if (counterLeft <= 450) {
      mini.style.left = `${counterLeft}px`
      counterLeft += 50
      setTimeout(() => {
          rev()
        }
        , 100)
    } else if (counterTop <= 400) {
      counterTop += 50
      mini.style.top = `${counterTop}px`
      setTimeout(() => {
          rev()
        }
        , 100)
    } else if (counterLeftEnd >= 0) {
      mini.style.left = `${counterLeftEnd}px`
      counterLeftEnd -= 50
      setTimeout(() => {
          rev()
        },
        100)
    } else if (counterTopEnd >= 0) {
      mini.style.top = `${counterTopEnd}px`
      counterTopEnd -= 50
      setTimeout(() => {
          rev()
        },
        100)
    }else{
      counterLeft = 0
      counterTop = 0
      counterLeftEnd = 450
      counterTopEnd = 400
      rev()
    }
  }
    )

//dz2
const h1 = document.querySelector('h1')
const start = document.querySelector(".Start")
const stop = document.querySelector(".Stop")
const resume = document.querySelector(".resume")
const clear = document.querySelector(".clear")

var count = 0;
var intervalId;

function starts() {
  intervalId = setInterval(() => {
    h1.innerHTML = count++;
  }, 100);
}

start.onclick = () => {
  start.setAttribute('disabled', '');
  resume.setAttribute('disabled', '');
  starts();
  resume.onclick = () => {
    resume.setAttribute('disabled', '');
    starts();
  };
};
clear.onclick = () => {
  count = 0
  h1.innerHTML = count
  start.removeAttribute('disabled');
}
stop.onclick = () => {
  clearInterval(intervalId);
  resume.removeAttribute('disabled');
};
