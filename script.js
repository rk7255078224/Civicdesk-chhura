const form = document.getElementById('complaintForm');
const list = document.getElementById('complaintList');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const issue = document.getElementById('issue').value;

  const li = document.createElement('li');
  li.textContent = ${name} reported: ${issue};

  list.appendChild(li);
  form.reset();
});
