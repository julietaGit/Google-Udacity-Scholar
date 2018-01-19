// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const $pixelCanvas = $('#pixel_canvas');
const $inputHeight = $('#input_height');
const $inputWidth = $('#input_width');
const $colorPicker = $('#colorPicker');

$('#sizePicker').submit(function(event){
    event.preventDefault();

    let M = $inputWidth.val();
    let N = $inputHeight.val();
    $pixelCanvas.html('');
    makeGrid(N, M);
    addCellClickListener();
})

function makeGrid(N, M) {
	
	// Your code goes here!
    for(let i=0; i < N; i++) {
        $pixelCanvas.append('<tr></tr>');
    }    

    for(let i=0; i < M; i++) {
        $('tr').append('<td></td>');
    }
}

function addCellClickListener() {
    $('td').click( event => {
        let color = $colorPicker.val();
        $(event.currentTarget).css("background-color", color)
    })    
}
