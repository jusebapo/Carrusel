// Cargar datos JSON
fetch('motos.json')
    .then(response => response.json())
    .then(data => {
        const motos = data.motos;
        const imageContainer = document.getElementById('image-container');

        motos.forEach(moto => {
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('image-container');

            const img = document.createElement('img');
            img.src = moto.path;
            img.alt = moto.alt;
            img.setAttribute('data-filter', moto.category);

            const overlay = document.createElement('div');
            overlay.classList.add('overlay');
            overlay.textContent = moto.alt;

            imgContainer.appendChild(img);
            imgContainer.appendChild(overlay);
            imageContainer.appendChild(imgContainer);

            img.onclick = function() {
                overlay.style.opacity = '1'; 
            };
        });
        const liprocduct = document.querySelectorAll('ul li');
        const imgElements = document.querySelectorAll('.image-container img');
        liprocduct.forEach(li => {
            li.onclick = function() {
                liprocduct.forEach(li => {
                    li.className = "";
                });
                li.className = "current";
                const value = li.textContent.toLowerCase();
                
                imgElements.forEach(img => {
                    img.parentElement.style.display = "none";
                    if (img.getAttribute('data-filter') === value || value === "menu") {
                        img.parentElement.style.display = "block";
                    }
                });
            };
        });
    })
    .catch(error => console.error('Error al cargar el JSON:', error));
