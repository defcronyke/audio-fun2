class AudioFun2Directive {
  constructor () {
    'ngInject';

    let directive = {
      restrict: 'E',
      templateUrl: 'app/components/audioFun2/audioFun2.html',
      scope: {},
      controller: AudioFun2Controller,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }
}

class AudioFun2Controller {
	constructor (audioFun2) {
		'ngInject';
	
		this.audioFun2 = audioFun2;
	}
}

export default AudioFun2Directive;