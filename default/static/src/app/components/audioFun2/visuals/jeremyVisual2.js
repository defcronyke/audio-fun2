/*jshint sub:true*/

class JeremyVisual2 {
	constructor(name) {
		this.name = name;
	}
	
	draw() {
		
		let c = this.canvasContext;
		
		c.fillStyle = this.backgroundFillStyle;
		c.fillRect(0, 0, this.canvas[0].width, this.canvas[0].height);

		let p = this.pen;

		p.penDown();

		for (let i = 0; i < this.dataArray.length; i++) {
			
			let data = this.dataArray[i];

			let rand_r = Math.floor(Math.random() * 255);
			let rand_g = Math.floor(Math.random() * 255);
			let rand_b = Math.floor(Math.random() * 255);

			p.turn(data / 2);
			p.forward(1);
			
			p.turn(-data);
			p.forward(2);
			
			p.turn(rand_r / 2);
			p.forward(3);
			
//			p.turn(rand_b / data);
//			p.forward(1);
			
			p.width((rand_g + data) / 510);

//			c.fillStyle = 'rgba('+rand_r+', 0, '+rand_b+', 1.0)';
////			c.fillRect(i, 0, 1, data);
//			c.fillRect(i, data, 1, 15);
			
//			c.fillStyle = 'rgba(0, '+rand_g+', '+rand_b+', 1.0)';
////			c.fillRect(i, this.canvasHeight, 1, -data);
//			c.fillRect(i, this.canvas[0].height - data, 1, 15);
			
			if ((data <= 8) || (data >= 247)) {
				
				let rand_r = Math.floor(Math.random() * this.dataArray.length);
				let rand_g = Math.floor(Math.random() * this.dataArray.length);
				let rand_b = Math.floor(Math.random() * this.dataArray.length);
		
				//c.fillStyle = 'rgba(0, 0, 0, 1.0)';
				
				c.fillStyle = 'rgba('+this.dataArray[rand_r]+', '+this.dataArray[rand_g]+', '+this.dataArray[rand_b]+', 1.0)';
				this.backgroundFillStyle = c.fillStyle;
			}
			
			// Keep pen inside window
			if ((p.position().x > this.canvas[0].width) 	||
				(p.position().y > this.canvas[0].height) 	||
				(p.position().x <= 0) 						||
				(p.position().y <= 0)) {
			
				p.moveTo(this.canvas[0].width/2, this.canvas[0].height/2);
			}
		}
	}
}

export default JeremyVisual2;