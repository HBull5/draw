const canvas = document.querySelector('canvas');
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
const ctx = canvas.getContext('2d');
ctx.strokeStyle = '#ffffff';
ctx.lineWidth = 7;
ctx.lineCap = 'round';
let isDrawing = false;
const id = new URL(document.URL).pathname.replace('/draw/', '');
const btn = document.querySelector('button');

function clearCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function startDrawing(x, y) {
	ctx.moveTo(x - 1, y - 1);
	ctx.lineTo(x, y);
	ctx.stroke();
}

function continueDrawing(x, y) {
	ctx.lineTo(x, y);
	ctx.stroke();
}

canvas.addEventListener('touchstart', e => {
	btn.classList.remove('hidden');
	isDrawing = true;
	const touch = e.touches[0];
	const x = touch.pageX;
	const y = touch.pageY;
	startDrawing(x, y);
});

canvas.addEventListener('mousedown', e => {
	btn.classList.remove('hidden');
	isDrawing = true;
	const x = e.pageX;
	const y = e.pageY;
	startDrawing(x, y);
});

canvas.addEventListener('touchmove', e => {
	const touch = e.touches[0];
	const x = touch.pageX;
	const y = touch.pageY;
	if (isDrawing) {
		continueDrawing(x, y);
	}
});

canvas.addEventListener('mousemove', e => {
	const x = e.pageX;
	const y = e.pageY;
	if (isDrawing) {
		continueDrawing(x, y);
	}
});

canvas.addEventListener('touchend', e => {
	isDrawing = false;
});

canvas.addEventListener('mouseup', e => {
	isDrawing = false;
});
