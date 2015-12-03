/*global document */
/*global AudioContext */
/*global Uint8Array */
/*global requestAnimationFrame */
/*global console */
/*global URL */
/*global turtle */

import JeremyVisual1 from './visuals/jeremyVisual1';
import JeremyVisual2 from './visuals/jeremyVisual2';
import DaphneVisual1 from './visuals/daphneVisual1';
import DaphneVisual2 from './visuals/daphneVisual2';
import DaphneVisual3 from './visuals/daphneVisual3';
import DaphneVisual4 from './visuals/daphneVisual4';


class AudioFun2Service {
	constructor () {
		'ngInject';
		
		this.visuals = [
			new JeremyVisual1('Jeremy Visual 1'),
			new JeremyVisual2('Jeremy Visual 2'),
			new DaphneVisual1('Daphne Visual 1'),
			new DaphneVisual2('Daphne Visual 2'),
			new DaphneVisual3('Daphne Visual 3'),
			new DaphneVisual3('Daphne Visual 4')
		];
		
		this.selectedVisual = 2;
		
		this.createAudioPlayer();
		this.createAudioContext();
		this.createAudioPlayerSource();
		this.createAudioAnalyzer(2048);
		this.createAudioBuffer();
		this.fillAudioBuffer();
		this.connectAudioPlayerSourceToAudioAnalyzer();
		this.connectAudioAnalyzerToDestination();
		this.createCanvasContext();
		this.createTurtle();
		
		this.audioPlayerFile = angular.element('#audio-player-file');
		this.audioPlayerFile[0].onchange = this.changeAudioFile.bind(this);
		
		this.processAudio();
	}
	
	createAudioPlayer() {
		
		this.audioPlayer = document.createElement('audio');
		this.audioPlayer.src = 'assets/audio/04_Bombs-Over-Brooklyn.ogg';
		this.audioPlayer.setAttribute('type', 'audio/ogg');
		this.audioPlayer.setAttribute('controls', '');
		this.audioPlayer.id = 'audio-player';
		
		this.audioPlayerArea = angular.element('#audio-player-area');
		this.audioPlayerArea.html(this.audioPlayer);
	}
	
	createAudioContext() {
		
		this.audioContext = new AudioContext();
	}
	
	createAudioPlayerSource() {
		
		this.audioPlayerSource = this.audioContext.createMediaElementSource(this.audioPlayer);
	}
	
	createAudioAnalyzer(fftSize) {
		
		this.audioAnalyser = this.audioContext.createAnalyser();
		this.audioAnalyser.fftSize = fftSize;
		this.bufferLength = this.audioAnalyser.frequencyBinCount;
	}
	
	createAudioBuffer() {
		
		this.dataArray = new Uint8Array(this.bufferLength);
	}
	
	fillAudioBuffer() {
		
		this.audioAnalyser.getByteTimeDomainData(this.dataArray);
	}
	
	connectAudioPlayerSourceToAudioAnalyzer() {
		
		this.audioPlayerSource.connect(this.audioAnalyser);
	}
	
	connectAudioAnalyzerToDestination() {
		
		this.audioAnalyser.connect(this.audioContext.destination);
	}
	
	createCanvasContext() {
		
		this.canvas = angular.element('#visual');
		this.canvasContext = this.canvas[0].getContext('2d');
		this.canvasContext.fillStyle = 'rgba(0, 0, 0, 1.0)';
		this.canvasContext.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
		this.backgroundFillStyle = 'rgba(0, 0, 0, 1.0)';
	}
	
	createTurtle() {
		
		this.pen = turtle.penFor(this.canvas[0]);
		this.pen.moveTo(this.canvas[0].width/2, this.canvas[0].height/2);
	}
	
	processAudio() {
		
		this.processAudioHandle = requestAnimationFrame(this.processAudio.bind(this));
		
		this.audioAnalyser.getByteTimeDomainData(this.dataArray);
		
		let skip = true;
		
		for (let i = 0; i < this.bufferLength; i++) {
			
			let data = this.dataArray[i];

			if (data !== 128) {
				skip = false;
			}
		}
		
		if (skip) {
			return;
		}
			
//		console.log(this.dataArray);
		this.visuals[this.selectedVisual].draw.bind(this)();
	}
	
	changeVisual(visualNum) {
		
		console.log('Changing to visual: ' + visualNum);
		
		this.selectedVisual = visualNum;
	}
	
	changeAudioFile() {
		
		this.audioPlayer.src = URL.createObjectURL(this.audioPlayerFile[0].files[0]);
	}
}

export default AudioFun2Service;
