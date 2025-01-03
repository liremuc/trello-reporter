document.addEventListener('DOMContentLoaded', function() {
    loadBoards();
    
    document.getElementById('reportForm').addEventListener('submit', function(e) {
        e.preventDefault();
        generateReport();
    });
});

async function loadBoards() {
    try {
        const response = await fetch('/api/boards');
        const boards = await response.json();
        const boardList = document.getElementById('boardList');
        
        boards.forEach(board => {
            const div = document.createElement('div');
            div.innerHTML = `
                <input type="checkbox" id="board-${board.id}" value="${board.id}">
                <label for="board-${board.id}">${board.name}</label>
            `;
            boardList.appendChild(div);
        });
    } catch (error) {
        console.error('Error loading boards:', error);
        alert('Error loading Trello boards. Please check your API credentials.');
    }
}

async function generateReport() {
    const selectedBoards = Array.from(document.querySelectorAll('#boardList input:checked'))
        .map(input => input.value);
        
    if (selectedBoards.length === 0) {
        alert('Please select at least one board');
        return;
    }
    
    try {
        const response = await fetch('/api/generate-report', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ boards: selectedBoards })
        });
        
        if (response.ok) {
            alert('Report generated successfully!');
        } else {
            alert('Error generating report');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error generating report');
    }
}
