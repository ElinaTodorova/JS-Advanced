window.addEventListener('load', solve);

function solve() {
    let genreElement = document.getElementById('genre');
    let songNameElement = document.getElementById('name');
    let authorElement = document.getElementById('author');
    let dateElement = document.getElementById('date');

    let addButton = document.getElementById('add-btn');

    addButton.addEventListener('click', (e) => {
        e.preventDefault();

        if(genreElement.value !== '' && songNameElement.value !== ''
        && authorElement.value !== '' && dateElement.value !== '') {
            let divElementSaved = document.querySelector('.all-hits-container');
            
            let divEl = document.createElement('div');
            divEl.classList.add('hits-info');

            let imgElement = document.createElement('img');
            imgElement.setAttribute('src', './static/img/img.png');
            
            let h2GenreElement = document.createElement('h2');
            h2GenreElement.textContent = `Genre: ${genreElement.value}`;

            let h2Name = document.createElement('h2');
            h2Name.textContent = `Name: ${songNameElement.value}`

            let h2Autor = document.createElement('h2');
            h2Autor.textContent = `Author: ${authorElement.value}`;

            let h3Date = document.createElement('h3');
            h3Date.textContent = `Date: ${dateElement.value}`;

            let saveBtn = document.createElement('button');
            saveBtn.textContent = 'Save song';
            saveBtn.classList.add('save-btn');
            let likeBtn = document.createElement('button');
            likeBtn.textContent = 'Like song';
            likeBtn.classList.add('like-btn');
            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');

            divEl.appendChild(imgElement);
            divEl.appendChild(h2GenreElement);
            divEl.appendChild(h2Name);
            divEl.appendChild(h2Autor);
            divEl.appendChild(h3Date);
            divEl.appendChild(saveBtn);
            divEl.appendChild(likeBtn);
            divEl.appendChild(deleteBtn);
            divElementSaved.appendChild(divEl);

            genreElement.value = '';
            songNameElement.value = '';
            authorElement.value = '';
            dateElement.value = '';

            likeBtn.addEventListener('click', (e) => {
                let currentElement = document.querySelector('.likes > p');
                let array = Array.from(currentElement.textContent);
               
                let likes = Number(array.pop())
                
                let newP = document.createElement('p');
                newP.textContent = `Total Likes: ${likes += 1}`;

                currentElement.remove()

                let el = document.querySelector('.likes');
                el.insertBefore(newP, el.firstChild);

                likeBtn.disabled = true;
                
            });

            saveBtn.addEventListener('click' , (e) => {
                let articleToMove = e.currentTarget.parentElement;
              
                let btnLike = articleToMove.querySelector('.like-btn');
                btnLike.remove();
                let btnSave = articleToMove.querySelector('.save-btn');
                btnSave.remove();

                let saveElement = document.querySelector('.saved-container');
                saveElement.appendChild(articleToMove);

            });

            
            deleteBtn.addEventListener('click', (e) => {
                let elementToDelete = e.currentTarget.parentElement;
                elementToDelete.remove();

                let likesEl = document.querySelector('.likes > p');
                console.log(likesEl)
                let array = Array.from(likesEl.textContent);
                let likes = Number(array.pop());
               
                if(likes > 0) {
                    let element = document.querySelector('.likes')
                    let newLikes = document.createElement('p');
                    newLikes.textContent = `Total Likes: ${likes -= 1}`;
                    likesEl.remove();
                    element.insertBefore(newLikes, element.firstChild)
                }
                
            })

       
          
        }
    })
}