const colors = {
	grey: '#424242',
	red: '#ef3e3e',
	green: '#6dc13c',
	yellow: '#e2cf3d',
	blue: '#468df2',
	pruple: '#8f41a3',
	pink: '#b250ab',
	array: ['#ef3e3e', '#6dc13c', '#e2cf3d', '#468df2', '#8f41a3', '#b250ab'],
};

const config = {
	rowHeight: 10, // Specification in pixels
	maxRowLength: 200,
	maxRowAmount: 10,
	spacing: 20, //Specification in pixels
};

const body = document.getElementsByTagName('body')[0];
body.style.padding = 0;
body.style.margin = 0;
body.style.width = '100vw';
body.style.height = '100vh';

const canvas = document.getElementsByTagName('canvas')[0];

let width = window.innerWidth;
let height = window.innerHeight;

canvas.width = width;
canvas.height = height;

const rows = Math.floor(height / (config.spacing * 2 + config.rowHeight));

const ctx = canvas.getContext('2d');

function draw() {
	ctx.clearRect(0, 0, width, height);

	ctx.fillStyle = colors.grey;
	ctx.fillRect(0, 0, width, height);

	for (let i = 0; i < rows; i++) {
		console.log('--------New Row--------');
		let rowAmount = Math.floor(Math.random() * config.maxRowAmount + 1);
		console.log('Row Amount: ', rowAmount);
		let overallLenght = config.spacing;
		for (let i2 = 0; i2 < rowAmount; i2++) {
			let rowLength = Math.floor(Math.random() * (config.maxRowLength - config.spacing * 2) + 10);
			if (overallLenght + rowLength + config.spacing > width) break;
			drawRow(
				ctx,
				overallLenght,
				config.spacing + i * (config.spacing * 2 + config.rowHeight),
				config.rowHeight,
				rowLength,
				colors.array[Math.floor(Math.random() * (colors.array.length - 1))]
			);
			overallLenght += rowLength + config.spacing * 2;
			console.log('Overall Lenght: ', overallLenght);
		}
		console.log('--------Row End--------');
	}
}

window.addEventListener('resize', (e) => {
	width = window.innerWidth;
	height = window.innerHeight;
	canvas.width = width;
	canvas.height = height;
	draw();
});

draw();

function drawRow(ctx, x, y, rowHeight, rowLength, color) {
	console.log(
		'X:',
		x,
		' Y:',
		y,
		'Row Lenght:',
		rowLength,
		' Row Height:',
		rowHeight,
		' Color:',
		color
	);
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.arc(x, y, rowHeight, 0, 2 * Math.PI);
	ctx.fillRect(x, y - rowHeight, rowLength, rowHeight + 10);
	ctx.arc(x + rowLength, y, rowHeight, 0, 2 * Math.PI);
	ctx.fill();
}
