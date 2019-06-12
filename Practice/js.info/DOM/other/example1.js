<!DOCTYPE html>
<html>

<body>

  <h2>Using The class Attribute in JavaScript</h2>
  <p>Click the button, to hide all elements with the class name "city", with JavaScript:</p>

  <button onclick="myFunction()">Hide elements</button>

  <h2 class="city">London</h2>
  <p>London is the capital of England.</p>

  <h2 class="city">Paris</h2>
  <p>Paris is the capital of France.</p>

  <h2 class="city">Tokyo</h2>
  <p>Tokyo is the capital of Japan.</p>

  <script>
    function myFunction() {
      let x = document.getElementsByClassName("city");
      for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
    }
  </script>

</body>

</html>
