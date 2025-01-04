fetch('http://localhost:5000/test')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Fetch error:', error));

fetch('http://localhost:5000/education')
  .then((response) => response.json())
  .then((education) => {
    const containerEdu = document.getElementById('education-container');
    education.forEach((course) => {
      const educationDiv = document.createElement('div');
      educationDiv.innerHTML = `
        <h2>${course.title}</h2>
        <p>${course.description}</p>
        <a href="${course.URL}">View course</a> 
      `;
      containerEdu.appendChild(educationDiv);
    });
  })
  .catch((error) => console.error('Error fetching education:', error));

fetch('http://localhost:5000/projects')
  .then((response) => response.json())
  .then((projects) => {
    const container = document.getElementById('project-container');
    projects.forEach((project) => {
      const projectDiv = document.createElement('div');
      projectDiv.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <p><strong>Technologies:</strong> ${project.technology.join(', ')}</p>
        <a href="${project.URL}">View Project</a> 
        <img src="${project.image}" alt="${project.title}"> 
      `;
      container.appendChild(projectDiv);
    });
  })
  .catch((error) => console.error('Error fetching projects:', error));
