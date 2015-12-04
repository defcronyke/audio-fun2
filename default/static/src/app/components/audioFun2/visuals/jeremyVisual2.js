/*jshint sub:true*/

class JeremyVisual2 {
	constructor(name) {
		this.name = name;
	}
	
	init() {
		this.pen.moveTo(this.canvas[0].width/2, this.canvas[0].height/2);
		this.pen.turn(90);
		
		this.n = 0;
		this.nMax = 1000;
	}
	
	draw() {
		
		let c = this.canvasContext;
		let p = this.pen;
		let n = this.n;
		let nMax = this.nMax;
		let dataAverage = 0;
		let dataSum = 0;
		let dataDifference = Math.abs(this.dataArray[0] - this.dataArray[this.dataArray.length-1]);
		let dataHighest = 0;
		let dataLowest = 255;
		let dataHighAvg = 0;
		let dataHighSum = 0;
		let dataMidAvg = 0;
		let dataMidSum = 0;
		let dataLowAvg = 0;
		let dataLowSum = 0;
		
		c.fillStyle = this.backgroundFillStyle;
		c.fillRect(0, 0, this.canvas[0].width, this.canvas[0].height);

		p.color('rgba(255, 255, 255, 1.0)');

		for (let i = 0; i < this.dataArray.length; i++) {
			
			let data = this.dataArray[i];
			
			dataSum += data;
			
			if (data > dataHighest) {
				dataHighest = data;
			}
			
			if (data < dataLowest) {
				dataLowest = data;
			}
			
			if (i < (this.dataArray.length/3)) {
			
				dataLowSum += data;
			
			} else if (i < (this.dataArray.length/3 * 2)) {
				
				dataMidSum += data;
			
			} else {
				
				dataHighSum += data;
			}
		}
		
		dataAverage = Math.floor(dataSum / this.dataArray.length);
		dataLowAvg = Math.floor(dataLowSum / (this.dataArray.length / 3));
		dataMidAvg = Math.floor(dataMidSum / (this.dataArray.length / 3));
		dataHighAvg = Math.floor(dataHighSum / (this.dataArray.length / 3));
		
		p.moveTo(this.canvas[0].width/2, this.canvas[0].height/2 - dataDifference);
		p.penDown();
		
//		console.log('r: ' + dataAverage.toString() + ' g: ' + dataHighest.toString() + ' b: ' + (255 - dataLowest).toString());
		
		p.color('rgba('+ (dataLowAvg + dataAverage) % 255 +', '+ (dataMidAvg + dataAverage) % 255 +', '+ (dataHighAvg + dataAverage) % 255 +', 1.0)');
		
		for (let i = n; i > 0; i--) {
		
			p.turn(dataAverage);
			p.forward(dataHighest);
			
			p.turn(-(dataAverage*2));
			p.forward(255 - dataLowest);
			
			p.turn(-(dataLowAvg*2));
			p.forward(dataMidAvg/3);
			
			p.turn(Math.abs(dataHighAvg*2 - dataLowAvg));
			p.forward(dataMidAvg/2);
		}
		
//		if (dataHighest >= 200) {
			
//			p.color('rgba('+dataAverage/2+', '+dataHighest/2+', '+(255 - dataLowest)/2+', 0.8)');	
//		}
		
		p.penUp();
		p.moveTo(this.canvas[0].width/2, this.canvas[0].height/2);
		
		this.n = (n + 1) % nMax;
	}
}

export default JeremyVisual2;