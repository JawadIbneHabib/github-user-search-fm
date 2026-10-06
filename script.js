let userInput = document.getElementById("user-input");
let searchButton = document.getElementById("search-button");
let userNameDisplay = document.getElementById("user-name");
let userBioDisplay = document.getElementById("user-bio");
let userFollowersDisplay = document.getElementById("user-followers");
let userFollowingDisplay = document.getElementById("user-following");
let userReposDisplay = document.getElementById("user-repos");
let userAvatarDisplay = document.getElementById("user-avatar");
let userLocationDisplay = document.getElementById("user-location");
let userTwitterDisplay = document.getElementById("user-twitter");
let userCompanyDisplay = document.getElementById("user-company");
let userJoinedDisplay = document.getElementById("user-joined");
let userBlogDisplay = document.getElementById("user-github-blog");
let userProfileLinkDisplay = document.getElementById("user-profile-link");

async function fetchGitHubUser(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            throw new Error(`User not found (Status: ${response.status})`);
        }
        const userData = await response.json();
        userNameDisplay.textContent = userData.name;
        userBioDisplay.textContent = userData.bio;
        userFollowersDisplay.textContent = userData.followers;
        userFollowingDisplay.textContent = userData.following;
        userReposDisplay.textContent = userData.public_repos;
        userAvatarDisplay.src = userData.avatar_url;
        userLocationDisplay.textContent = userData.location;
        userTwitterDisplay.textContent = userData.twitter_username;
        userCompanyDisplay.textContent = userData.company;
        userJoinedDisplay.textContent = new Date(userData.created_at).toLocaleDateString();
        userBlogDisplay.textContent = userData.blog;
        userProfileLinkDisplay.href = userData.html_url;
        return userData;
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}

fetchGitHubUser("octocat");
