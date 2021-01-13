document.addEventListener('DOMContentLoaded', function(e) {

    var btns = document.querySelectorAll("#student-list.delete");
    Array.from(btns).forEach(function(btn) {
        btn.addEventListener("click", function(e) {
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        });
    });

    // Event Bubbling
    const list = document.querySelector("#student-list ul");
    list.addEventListener("click", function(e) {
        if (e.target.className == "delete") {
            const li = e.target.parentElement;
            list.removeChild(li);
        }
    });

    //confirm unenroll
    // const dltClick = document.querySelector('#student-list').addEventListener('click', function(e) {
    //     if (confirm('Are you sure')) {

    //         showAlert('Student Unenrolled', 'success');
    //     }

    // })

    //forms
    console.log(document.forms);
    const addStudent = document.querySelector("#add-student");
    console.log(addStudent);

    //adding new student to the list
    const addForm = document.forms["add-student"];

    addForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const value = addForm.querySelector('input[type="text"]').value;
        //console.log(value);

        //creating elements
        const li = document.createElement("li");
        const studentName = document.createElement("span");
        const deleteBtn = document.createElement("span");

        // add content
        deleteBtn.textContent = 'Unenroll';
        studentName.textContent = value;

        //add classes
        studentName.classList.add('name');
        deleteBtn.classList.add('delete');

        //append to DOM
        li.appendChild(studentName);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });


    //filter students
    const searchBar = document.forms['search-student'].querySelector('input');
    searchBar.addEventListener('keyup', function(e) {
        const term = e.target.value.toLowerCase();
        const students = list.getElementsByTagName('li');
        Array.from(students).forEach(function(student) {
            const title = book.firstElementChild.textContent;
            if (title.toLowerCase().indexOf(term) != -1) {
                student.style.display = 'block';
            } else {
                student.style.display = 'none';
            }
        });
    });


});