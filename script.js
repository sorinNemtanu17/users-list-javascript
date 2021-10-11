'use strict';

function createUsersList() {
  const form = document.querySelector('.form');
  const table = document.querySelector('.users-list tbody');

  form.addEventListener('submit', handleAddUser);

  const list = [];

  function handleAddUser(e) {
    e.preventDefault();

    let firstName = form.elements.firstname.value;
    let lastName = form.elements.lastname.value;
    let id = list.length + 1;

    if (firstName && lastName) {
      list.push({ id, firstName, lastName });
      const tableRow = document.createElement('tr');
      const tableCellId = document.createElement('td');
      const tableCellFirstname = document.createElement('td');
      const tableCellLastname = document.createElement('td');
      const tableCellButton = document.createElement('td');
      const btn = document.createElement('button');
      btn.innerHTML = 'sterge';

      tableCellButton.appendChild(btn);

      tableCellId.innerHTML = id;
      tableCellFirstname.innerHTML = firstName;
      tableCellLastname.innerHTML = lastName;

      tableRow.appendChild(tableCellId);
      tableRow.appendChild(tableCellFirstname);
      tableRow.appendChild(tableCellLastname);
      tableRow.appendChild(tableCellButton);

      table.appendChild(tableRow);
      btn.addEventListener('click', () => removeUser(tableRow, id));
    }
    form.reset();
    form.elements.firstname.focus();
  }
  function removeUser(row, id) {
    const index = list.findIndex((item) => item.id === id);
    list.splice(index, 1);

    console.log(list);
    row.remove();
    return list;
  }
}
createUsersList();
