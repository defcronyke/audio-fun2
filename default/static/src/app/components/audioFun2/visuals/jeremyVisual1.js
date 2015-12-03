/*jshint sub:true*/

class JeremyVisual1 {
	constructor(name) {
		this.name = name;
	}
	
	init() {
		
	}
	
	draw() {
		
		let c = this.canvasContext;
		
		c.fillStyle = this.backgroundFillStyle;
		c.fillRect(0, 0, this.canvas[0].width, this.canvas[0].height);

		for (let i = 0; i < this.dataArray.length; i++) {
			
			let data = this.dataArray[i];

			let rand_r = Math.floor(Math.random() * 255);
			let rand_g = Math.floor(Math.random() * 255);
			let rand_b = Math.floor(Math.random() * 255);

			c.fillStyle = 'rgba('+rand_r+', 0, '+rand_b+', 1.0)';
//			c.fillRect(i, 0, 1, data);
			c.fillRect(i, data, 1, 15);
			
			c.fillStyle = 'rgba(0, '+rand_g+', '+rand_b+', 1.0)';
//			c.fillRect(i, this.canvasHeight, 1, -data);
			c.fillRect(i, this.canvas[0].height - data, 1, 15);
			
			if (data <= 8) {
				
				let rand_r = Math.floor(Math.random() * 255);
				let rand_g = Math.floor(Math.random() * 255);
				let rand_b = Math.floor(Math.random() * 255);
		
				//c.fillStyle = 'rgba(0, 0, 0, 1.0)';
				
				c.fillStyle = 'rgba('+this.dataArray[rand_r]+', '+this.dataArray[rand_g]+', '+this.dataArray[rand_b]+', 1.0)';
				this.backgroundFillStyle = c.fillStyle;
			}
		}
	}
}

export default JeremyVisual1;