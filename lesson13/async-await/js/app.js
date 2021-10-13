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
        ui.showLoader();
        // github.getUser(userText)
        //     .then(user => {
        //         if (user.message == 'Not Found') {
        //             // Show alert
        //             ui.showAlert(`User: ${userText} not found`, 'alert alert-danger');
        //             // Clear profile
        //             ui.clearProfile();
        //             ui.hideLoader();
        //         } else {
        //             // Show profile
        //             ui.showProfile(user);
        //         }
        //         return user;
        //     })
        //     .then((user) => github.getRepos(user))
        //     .then(repos => ui.showRepos(repos))
        //     .then(() => ui.hideLoader())
        //     .catch(err => console.log(err))
        github.getUserAsync(userText)
            .then(info => {
                if (info.userData.message == 'Not Found') {
                    // Show alert
                    ui.showAlert(`User: ${userText} not found`, 'alert alert-danger');
                    // Clear profile
                    ui.clearProfile();
                } else {
                    // Show profile and repos
                    ui.showProfile(info.userData);
                    ui.showRepos(info.reposData);
                }
            })
            .then(() => ui.hideLoader())

    } else {
        // Clear profile
        ui.clearProfile();
    }
});