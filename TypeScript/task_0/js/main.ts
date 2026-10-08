interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "San Francisco",
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement("table");
const thead: HTMLTableSectionElement = table.createTHead();
const headerRow: HTMLTableRowElement = thead.insertRow();

["First Name", "Location"].forEach((title: string): void => {
  const th: HTMLTableCellElement = document.createElement("th");
  th.textContent = title;
  headerRow.appendChild(th);
});

const tbody: HTMLTableSectionElement = table.createTBody();

studentsList.forEach((student: Student): void => {
  const row: HTMLTableRowElement = tbody.insertRow();

  const nameCell: HTMLTableCellElement = row.insertCell();
  nameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = row.insertCell();
  locationCell.textContent = student.location;
});

document.body.appendChild(table);
