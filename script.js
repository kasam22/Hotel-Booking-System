window.onload = () => {
    setTimeout(() => {
      document.querySelector("body").classList.add("display");
    }, 4000);
  };
  
  document.querySelector(".main-nav").addEventListener("click", () => {
    document.querySelector(".content").classList.toggle("change");
  });
  
  document.querySelector(".scroll-btn").addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
      document.querySelector("html").style.scrollBehavior = "unset";
    }, 1000);
  });

  let button = document.querySelector(".btn");

button.addEventListener("click", () => 
{
    alert("Are you sure to book the room?")
});

