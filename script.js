function goToNextPage() {
    window.location.href = 'next.html';
}

function handleYes() {
    const card = document.querySelector('.card');
    card.innerHTML = '<h1>Thank you, my Fiance.</h1>';
}

function handleNo() {
    const question = document.getElementById('question');
    const options = document.getElementById('options');

    if (question.textContent === 'Would you like to be my Valentine?') {
        question.textContent = 'Are you sure?';
    } else if (question.textContent === 'Are you sure?') {
        question.textContent = 'Are you really sure?';
    } else {
        question.textContent = 'Would you like to be my Valentine?';
        options.innerHTML = '<button onclick="handleYes()">Yes</button> <button onclick="handleNo()">No</button>';
    }
}
