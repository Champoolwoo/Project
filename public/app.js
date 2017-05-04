angular.module('app', [])
	.controller('TodoListController', function($scope,$http) {

		$scope.conLED = true
		$scope.conPump = true
		$scope.item = ''
		$scope.sheets = []
		$scope.status = 44

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////control

		$http.get('https://sheetsu.com/apis/v1.0/5eac309ffcdc').then(function(res){
			console.log()
		      $scope.items = res.data[res.data.length - 1]
		      $scope.sheets = res.data
    		})

		$scope.ledOn = function(){
			$http.get('/ledOn').then(function (response){
				console.log(response)
			})
		}

		$scope.ledOff = function(){
			$http.get('/ledOff').then(function (response){
				console.log(response)
			})
		}

		$scope.pumpOn = function(){
			$http.get('/pumpOn').then(function (response){
				console.log(response)
			})
		}

		$scope.pumpOff = function(){
			$http.get('/pumpOff').then(function (response){
				console.log(response)
			})
		}

		$scope.takeCam = function(){
			// $http.get('/takeCam').then(function (response){
			// 	console.log(response)
			// })

			console.log("Take Photo")
		}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////control

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////date2

		$scope.dateEndDate = []

		$scope.eat = function(){
			var dateforpush = {}
			var end = moment().add(35, 'days').calendar()

			var dateforpush = {
				end: end
			}

			$http.post('/dateend', dateforpush).then(function (response){
				// $scope.dateEndDate.push(response)
			})
		}

		$scope.getdataeat = function(){
			$http.get('/dateend').then(function (response){
				$scope.dateEndDate = response.data
			})
		}

		 // test tak
		$scope.hole = [
			{
				hole: 1,
				status: false
			},
			{
				hole: 2,
				status: false
			},
			{
				hole: 3,
				status: false
			}
		]

		$scope.totalHole = []
		getHole()
		function getHole () {
			$http.get('/dateend').then(res => {
				$scope.totalHole = res.data
				// console.log($scope.totalHole)
			})
		}

		 $scope.tree = function (hole) {
		 	var index =  $scope.hole.findIndex(i => i.hole === hole)
		 	if ($scope.hole[index].status === false) {
		 		console.log('first')
		 		$scope.hole[index].status = true
		 		$scope.hole[index].end =  moment().add(35, 'days').calendar()
		 		var cur  = $scope.totalHole.findIndex(i => i.hole === hole)

		 		console.log(cur)
		 		if (cur >= 0) {
		 			console.log('th')
		 			var cur  = $scope.totalHole.findIndex(i => i.hole === hole)
		 			$scope.totalHole[cur].status = true
		 			// console.log('xxxx ', $scope.totalHole[cur])
		 			$http.put('/dateend/' +  $scope.totalHole[cur]._id, $scope.totalHole[cur]).then(res => {})
		 		} else if (cur === -1) {
		 			console.log('sec')
		 			// $scope.hole[index].status = false
		 			// console.log('yyy ', $scope.hole[index])
		 			$http.post('/dateend', $scope.hole[index]).then(function (response){})
		 		}else {
		 			$http.post('/dateend', $scope.hole[index]).then(function (response){})
		 		}
		 		getHole()
		 	}else {
		 		console.log('four')
		 		var _id = ''
		 		$scope.hole[index].status = false
		 		$http.get('/dateend').then(res => {
		 			$scope.dateEndDate = res.data
		 			res.data.findIndex(i => {
		 				if (i.hole === hole)  {
		 					_id =  i._id
		 					// console.log('id ', i._id)
		 				}
		 			})
		 		}).then(() => {
		 			// console.log($scope.hole[index])
		 			$scope.hole[index].status = false
		 			$http.put('/dateend/' +  _id, $scope.hole[index]).then(res => {
		 			})
		 		})
		 	}//else
		 }//function

		$scope.getdataeat = function(){
			$http.get('/dateend').then(function (response){
				$scope.dateEndDate1 = response.data[0].end
				$scope.dateEndDate2 = response.data[1].end
				$scope.dateEndDate3 = response.data[2].end

				var start = moment()
				var dayend1 = moment($scope.dateEndDate1)
				var dayend2 = moment($scope.dateEndDate2)
				var dayend3 = moment($scope.dateEndDate3)

				$scope.calday1 = dayend1.diff(start, 'days')
				$scope.calday2 = dayend2.diff(start, 'days')
				$scope.calday3 = dayend3.diff(start, 'days')

				// $scope.calday = $scope.dateEndDate.find().end
				console.log($scope.dateEndDate1)
				console.log($scope.calday1)

			})
		}

		$scope.getdataeat()
		 // // test tak


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////date2
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ton
///
	/*$scope.eat = function(){
			var dateforpush = {}

			var end = moment().add(35, 'days').calendar()

			var dateforpush = {
				end: end
			}
			$http.post('/dateend', dateforpush).then(function (response){
				// $scope.dateEndDate.push(response)
			})
		}

		$scope.getdataeat = function(){
			$http.get('/dateend').then(function (response){

				$scope.dateEndDate = response.data
								// console.log($scope.dateEndDate)
			})
		}*/

// $scope.getdataeat()

		/*$scope.countDate = function (endDate){
			// $scope.calbox = '0'
				var start = moment()
				var enddaybox =  endDate
				// console.log(enddaybox)
				var endbox = moment(enddaybox)

				// console.log(endbox)

				// $scope.calbox = endbox.diff(start, 'days')
				// console.log($scope.calbox)
				return endbox.diff(start, 'days')
		}*/

		/*$scope.reset = function (index) {

			var dateforpush = {}
			var end = moment().add(35, 'days').calendar()

			var dateforpush = {
				end: end
			}

			$http.put('/dateend/' + index, dateforpush).then(function (res) {
      			console.log(res.data)
      			$scope.dateEndDate.end = res.data.end
    		})
		}

		$scope.countDate()*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ton
