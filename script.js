alert(
  'It needs some time to fetch the data from the server, please wait a few seconds.'
);

fetch('https://api-cv-cgtp.onrender.com/education')
  .then((response) => response.json())
  .then((education) => {
    const container = document.getElementById('education-container');
    education.forEach((course) => {
      const educationDiv = document.createElement('div');
      educationDiv.innerHTML = `
        <h2>${course.title}</h2>
        <p>${course.description}</p>
        <a href="${course.URL}" target="_blank">Learn More</a>
      `;
      container.appendChild(educationDiv);
    });
  })
  .catch((error) => console.error('Error fetching education:', error));

fetch('https://api-cv-cgtp.onrender.com/projects')
  .then((response) => response.json())
  .then((projects) => {
    const container = document.getElementById('project-container');
    projects.forEach((project) => {
      const projectDiv = document.createElement('div');
      projectDiv.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <p><strong>Technologies:</strong> ${project.technology.join(', ')}</p>
        <a href="${project.URL}" target="_blank">View Project</a>
      `;
      container.appendChild(projectDiv);
    });
  })
  .catch((error) => console.error('Error fetching projects:', error));
