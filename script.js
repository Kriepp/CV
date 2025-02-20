document.addEventListener('DOMContentLoaded', () => {
  const educationContainer = document.getElementById('education-container');

  // Show a loading animation only for education
  educationContainer.innerHTML = `<div class="loader"></div>`;

  // Fetch Education Data
  fetch('https://api-cv-cgtp.onrender.com/education')
    .then((response) => response.json())
    .then((education) => {
      educationContainer.innerHTML = ''; // Remove loader

      education.forEach((course) => {
        const educationDiv = document.createElement('div');
        educationDiv.innerHTML = `
          <h2>${course.title}</h2>
          <p>${course.description}</p>
          <a href="${course.URL}" target="_blank">Learn More</a>
        `;
        educationContainer.appendChild(educationDiv);
      });
    })
    .catch((error) => {
      educationContainer.innerHTML = '<p>Failed to load education data.</p>';
      console.error('Error fetching education:', error);
    });

  // Fetch Projects Data (No loader here)
  fetch('https://api-cv-cgtp.onrender.com/projects')
    .then((response) => response.json())
    .then((projects) => {
      const projectContainer = document.getElementById('project-container');
      projects.forEach((project) => {
        const projectDiv = document.createElement('div');
        const projectClass =
          project.status === 'unfinished' ? 'unfinished' : 'finished';
        projectDiv.classList.add('project', projectClass);
        projectDiv.innerHTML = `
          <img src="${project.image}" alt="${project.title}" />
          <h2>${project.title}</h2>
          <p>${project.description}</p>
          <p><strong>Technologies:</strong> ${project.technology.join(', ')}</p>
          <a href="${project.URL}" target="_blank">View Project</a>
        `;
        projectContainer.appendChild(projectDiv);
      });
    })
    .catch((error) => console.error('Error fetching projects:', error));
});
