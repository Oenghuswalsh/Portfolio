const projects = [
  {
    name: "Project 1",
    image: "projects/project1/thumbnail.jpg",
    repositoryURL: "https://github.com/yourusername/repo1",
  },
  {
    name: "Project 2",
    image: "projects/project2/thumbnail.jpg",
    repositoryURL: "https://oenghuswalsh.github.io/Silly-story-generator/",
  },
  // Add more projects
];

const projectsContainer = document.getElementById("projects");

projects.forEach((project) => {
  const projectElement = document.createElement("div");
  projectElement.classList.add("project");
  projectElement.innerHTML = `<img src="${project.image}" alt="${project.name}">`;

  projectElement.addEventListener("click", () => {
    // Define the width and height of the popup window.
    const popupWidth = 800;
    const popupHeight = 600;

    // Calculate the center position based on the screen dimensions.
    const centerX = window.screenX + (window.innerWidth - popupWidth) / 2;
    const centerY = window.screenY + (window.innerHeight - popupHeight) / 2;

    // Open the popup window with the calculated position.
    window.open(
      project.repositoryURL,
      "_blank",
      `width=${popupWidth}, height=${popupHeight}, left=${centerX}, top=${centerY}`
    );
  });

  projectsContainer.appendChild(projectElement);
});
