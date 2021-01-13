document.addEventListener('DOMContentLoaded', function(e) {
    const list = document.querySelector("#search-bar")
    const searchBar = document.forms['search-student'].querySelector('input');
    searchBar.addEventListener('keyup', function(e) {
        const searchedText = e.target.value.toLowerCase();
        const students = list.getElementsbyTagName('li');
        Array.from(students).forEach(function(student) {
            const studentName = student.firstElementChild.textContent;
            if (studentName.toLowerCase().indexOf(searchedText) != -1) {
                student.style.display = 'block';
            } else {
                student.style.display = 'none';
            }
        });
    });

});