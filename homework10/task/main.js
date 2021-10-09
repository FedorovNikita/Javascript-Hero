const btnGetData = document.querySelector('.get-users');
const usersList = document.querySelector('.users__list');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const modalList = document.querySelector('.modal__list');

btnGetData.addEventListener('click', () => {
    ajax({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts/',
        success: function(res) {
            generateTemplate(res);
        },
        error: function(err) {
            console.log(err);
        },
    });
})

btnCloseModal.addEventListener('click', () => {
    modal.classList.remove('modal--active');
})

const generateTemplate = (users) => {
    clearList(usersList);

    for (let i = 0; i < users.length; i++) {
        createItem(users[i]);
    }
}

const clearList = (list) => {
    list.innerHTML = '';
}

const createItem = (item) => {
    const li = document.createElement('li');
    li.textContent = item.name;
    li.setAttribute('data-gender', item.gender);
    li.setAttribute('data-job', item.job);
    li.addEventListener('click', (e) => {
        showModal(e.target)
    });
    usersList.append(li);
}

const showModal = (item) => {
    clearList(modalList);

    const name = generateItemModal('name', item.textContent);
    const gender = generateItemModal('gender', item.dataset.gender);
    const job = generateItemModal('job', item.dataset.job);

    modalList.append(name);
    modalList.append(gender);
    modalList.append(job);
    modal.classList.add('modal--active');
}

const generateItemModal = (key, value) => {
    const li = document.createElement('li');
    li.textContent = `${key}: ${value}`;
    return li;
}