'use strict';

const cresteUsersList = () => {
  const form = document.querySelector('.form-control');
  const table = document.querySelector('.users-list tbody');
  const list = [];

  const handleAddUser = (e) => {
    e.preventDefault();
    const firstName = form.elements.firstname.value;
    const lastName = form.elements.lastname.value;
    const id = list.length + 1;
    const userInfo = { firstName, lastName, id };
    list.push(userInfo);

    createUser(id);
  };

  const createUser = (id) => {
    list.filter((user) => {
      if (user.id === id) {
        const tableRow = document.createElement('tr');
        const tableCellId = document.createElement('td');
        const tableCellFirstname = document.createElement('td');
        const tableCellLastname = document.createElement('td');
        const tableCellButton = document.createElement('td');
        const btn = document.createElement('button');
        btn.innerHTML = 'sterge';

        tableCellButton.appendChild(btn);

        tableCellId.innerHTML = id;
        tableCellFirstname.innerHTML = user.firstName;
        tableCellLastname.innerHTML = user.lastName;

        tableRow.appendChild(tableCellId);
        tableRow.appendChild(tableCellFirstname);
        tableRow.appendChild(tableCellLastname);
        tableRow.appendChild(tableCellButton);

        table.appendChild(tableRow);
        btn.addEventListener('click', () => removeUser(tableRow, id));
      }
    });
  };
  function removeUser(row, id) {
    const index = list.findIndex((item) => item.id === id);
    list.splice(index, 1);

    console.log(list);
    row.remove();
    return list;
  }
  form.addEventListener('submit', handleAddUser);
};
cresteUsersList();
