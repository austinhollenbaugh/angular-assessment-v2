angular
	.module('assessment')
	.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'views/home.html'
			})
			.state('about', {
				url: '/about',
				templateUrl: 'views/about.html',
				controller: 'mainCtrl',
				controllerAs: 'vm'
			})
			.state('blog', {
				url: '/blog',
				templateUrl: 'views/blog.html',
				controller: 'mainCtrl',
				controllerAs: 'vm'
			})
			.state('pets', {
				url: '/pets',
				templateUrl: 'views/pets.html',
				controller: 'mainCtrl',
				controllerAs: 'vm'
			})
			.state('bio', {
				url: '/bio/:id',
				templateUrl: 'views/pet-bio.html',
				controller: 'bioCtrl',
				controllerAs: 'vm'
			});
	});
