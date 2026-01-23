document.addEventListener("DOMContentLoaded", () => {
  const copyLinks = document.querySelectorAll(".copy-link");

  copyLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      console.log('hellooo i am bob preventing navigation!');
        e.preventDefault(); 
    
      try {
        const url = link.href; 
        navigator.clipboard.writeText(url); 
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    });
  });
});
