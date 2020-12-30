// Google Maps

// Initialize and add the map
function initMap() {
    // The location of ASC
    const ASC = { lat: 18.214136267410332, lng: -67.15490776876263 };
    // The map, centered at ASC
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: ASC,
    });
    // The marker, positioned at ASC
    const marker = new google.maps.Marker({
      position: ASC,
      map: map,
    });
  }

// Formspree

window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      status.classList.add('submitted');
      status.innerHTML = "Info Submitted, Thanks!";
    }

    function error() {
        status.classList.add('error');
      status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }