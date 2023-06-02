var form = document.querySelector('form');
        form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        var inputText = document.getElementById('inputMessage').value;
        document.write("<p>Vous avez saisi : " + inputText + "</p>");
        
        window.setTimeout(function() {
        window.location.reload();
        }, 5000);
        });