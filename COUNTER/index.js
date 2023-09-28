//set intial count


// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});


/*querySelectorAll--The method returns all elements in the documents that macthes a css selector 

forEach---method calls a function once for each element in array in an order 

addEventListener---attaches an event handler to the specific element

currentTarget property----returns the element whose event listeners triggered the event


classList---returns the classname of an element 


textContent--- returns the textContentof the specified node */
