/*global turtle */
/*jshint sub:true*/

class DaphneVisual2 {
	constructor(name) {
		this.name = name;
	}
	
	draw() {
		
		let c = this.canvasContext;
		
		c.fillStyle = 'rgba(0,0,0,1.0)';
		c.fillRect(0,0,this.canvas[0].width,this.canvas[0].height);
		let pen = turtle.penFor(this.canvas[0]);
		pen.width(3);
		pen.moveTo(0, 0);
		pen.penDown();
		pen.turn(90);
		pen.turn(45);
		for (let i = 0; i < this.dataArray.length -1; i++) {
			let data = this.dataArray[i];
			let next_data = this.dataArray[i+1];
			pen.width(Math.abs(data - next_data)*4);
			if (i < this.dataArray.length/3) {
				pen.color('rgba('+ data +',125,'+ Math.abs(data - next_data) +',1.0)');
			} else if ((i > this.dataArray.length/3) && (i < (this.dataArray.length/3)*2)) {
				pen.color('rgba('+ Math.abs(data - next_data) +','+ data +',125,1.0)');
			} else {
				pen.color('rgba(125,'+ Math.abs(data - next_data) +','+ data +',1.0)');
			}
			
			if (i === Math.floor(this.dataArray.length/3)) {
				pen.penUp();
				pen.setAngle(135);
				let x = this.canvas[0].width;
				let y = 0;
				pen.moveTo(x,y);
				pen.penDown();
			} else if (i === Math.floor((this.dataArray.length/3)*2)) {
				pen.penUp();
				pen.setAngle(270);
				let x = this.canvas[0].width/2;
				let y = this.canvas[0].height;
				pen.moveTo(x,y);
				pen.penDown();
			}
			
			pen.turn(data - next_data);
			pen.forward(3);
		};
	};
};

export default DaphneVisual2;