const form = document.getElementById('complaintForm');
const list = document.getElementById('complaintList');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const category = document.getElementById('category').value;
  const issue = document.getElementById('issue').value;

  const li = document.createElement('li');
  li.innerHTML = `
    <strong>${category}</strong> - ${name} reported: ${issue} 
    <br><span>Status: <b style="color: orange;">Pending</b></span>
  `;

  list.appendChild(li);
  form.reset();
});
