/* global moment:false */
import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';

import AudioFun2Service from '../app/components/audioFun2/audioFun2.service';
import AudioFun2Directive from '../app/components/audioFun2/audioFun2.directive';

import MainController from './main/main.controller';

angular.module('audioFun2', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ngResource', 'ui.router'])

	.constant('moment', moment)
	.config(config)
	
	.config(routerConfig)
	
	.run(runBlock)

	.service('audioFun2', AudioFun2Service)

	.directive('audioFun2', () => new AudioFun2Directive())
	
	.controller('MainController', MainController);
