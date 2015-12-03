/*global turtle */
/*jshint sub:true*/

class DaphneVisual3 {
	constructor(name) {
		this.name = name;
	}
	
	draw() {
		
		let c = this.canvasContext;
		
		c.fillStyle = 'rgba(0,0,0,1.0)';
		c.fillRect(0,0,this.canvas[0].width,this.canvas[0].height);
		let pen = turtle.penFor(this.canvas[0]);
//		pen.width(3);
		pen.moveTo(0, this.canvas[0].height/3);
		pen.penDown();
		pen.setAngle(0);
		for (let i = 0; i < this.dataArray.length -1; i++) {
			let data = this.dataArray[i];
			let next_data = this.dataArray[i+1];
			pen.width(Math.abs(data - next_data)*20);
			if (i < this.dataArray.length/4) {
				pen.color('rgba('+ data +','+ Math.abs(data - next_data)*4 +','+ next_data +',0.5)');
			} else if ((i > this.dataArray.length/4) && (i < (this.dataArray.length/4)*2)) {
				pen.color('rgba(0,'+ data +','+ Math.abs(data - next_data)*14 +',0.5)');
			} else if ((i > this.dataArray.length/4)*2 && (i < (this.dataArray.length/4)*3)) {
				pen.color('rgba(0,'+ data +','+ next_data +',0.5)');
			} else {
				pen.color('rgba('+ Math.abs(data - next_data)*10 +','+ next_data +','+ data +',0.5)');
			};
			
			//('rgba(0,'+ data +',0,1.0)')
			
			if (i === Math.floor(this.dataArray.length/4)) {
				pen.penUp();
				pen.setAngle(0);
				let x = 0;
				let y = (this.canvas[0].height/3)*2;
				pen.moveTo(x,y);
				pen.penDown();
			} else if (i === Math.floor((this.dataArray.length/4)*2)) {
				pen.penUp();
				pen.setAngle(180);
				let x = this.canvas[0].width;
				let y = this.canvas[0].height/3;
				pen.moveTo(x,y);
				pen.penDown();
			} else if (i === Math.floor((this.dataArray.length/4)*3)) {
				pen.penUp();
				pen.setAngle(180);
				let x = this.canvas[0].width;
				let y = (this.canvas[0].height/3)*2;
				pen.moveTo(x,y);
				pen.penDown();
			}
			
			pen.turn(data - next_data);
			pen.forward(3);
		};
	};
};

export default DaphneVisual3;