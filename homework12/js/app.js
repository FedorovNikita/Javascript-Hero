// Init Github
const github = new Github();

// Init ui
const ui = new UI();

// Init searchinput
const searchInput = document.getElementById('searchUser');

// Add Event Listener
searchInput.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;
    if (userText !== '') {
        // Make http request
        ui.showSpinner();
        github.getUser(userText)
            .then(user => {
                if (user.message == 'Not Found') {
                    // Show alert
                    ui.showAlert(`User: ${userText} not found`, 'alert alert-danger');
                    // Clear profile
                    ui.clearProfile();
                    ui.hideSpinner()
                } else {
                    // Show profile
                    ui.showProfile(user);
                }
                return user;
            })
            .then((user) => github.getRepos(user))
            .then(repos => ui.showRepos(repos))
            .then(() => ui.hideSpinner())
            .catch(err => console.log(err))
    } else {
        // Clear profile
        ui.clearProfile();
    }
});