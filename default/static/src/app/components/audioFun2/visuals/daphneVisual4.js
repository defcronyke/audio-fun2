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
		let circles = [];
		for (let i = 0; i < this.dataArray.length -1; i++) {
			let data = this.dataArray[i];
			
		}
	}
}

export default DaphneVisual4;