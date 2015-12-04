/*global turtle */
/*jshint sub:true*/

class DaphneVisual4 {
	constructor(name) {
		this.name = name;
	}
	
	init() {
		
	}
	
	draw() {
		
		let c = this.canvasContext;
		
		c.fillStyle = 'rgba(0,0,0,1.0)';
		c.fillRect(0,0,this.canvas[0].width,this.canvas[0].height);
		let x = -20;
		let y = 20;
		for (let i = 0; i < this.dataArray.length; i++) {
			let data = this.dataArray[i];
			if ((x + 40) < this.canvas[0].width) {
				x = x+40;
			} else {
				x = 20;
				y = y+40;
			}
			let r = (1.0 - (Math.abs(128 - data)/128)) * 20;
			let antiData = Math.floor((1.0 - (data/256)) * 255);
			this.canvasContext.fillStyle = "rgba("+ data +","+ Math.abs(data - antiData)*2 +","+ antiData +",1.0)";
			this.canvasContext.beginPath();
			this.canvasContext.arc(x, y, r, 0, 2 * Math.PI, false);
			this.canvasContext.fill();
		}
	}
}

export default DaphneVisual4;