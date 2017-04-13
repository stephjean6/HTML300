//sum field values not working
function sum() {
          var v1 = num("v1");
          var v2 = num("v2");
          var result  = document.getElementById("result");
          if (result != null) {
              result.value = v1 + v2;
          }
    document.getElementById("Sum").innerHTML = result;
      }
    

// reset form not working
document.getElementById("myForm").reset();