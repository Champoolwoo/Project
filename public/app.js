angular.module('app', [])
	.controller('TodoListController', function($scope,$http) {

		$scope.conLED = true
		$scope.conPump = true
		$scope.item = ''
		$scope.sheets = []
		$scope.status = 44

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Data Googlesheets

		$http.get('https://sheetsu.com/apis/v1.0/5eac309ffcdc').then(function(res){
			console.log()
		      $scope.items = res.data[res.data.length - 1]
		      $scope.sheets = res.data
    		})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Data Googlesheets

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////time
		// setInterval(function(){
		// 	$scope.time = moment().format('LT')
		// 	console.log($scope.time)

		// 	if($scope.time = )}{

		// 	}
		// },1000)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////time

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////control

		$scope.ledOn = function(){
			// $http.get('/ledOn').then(function (response){
			// 	console.log(response)
			// })
			console.log("ledOn")
		}

		$scope.ledOff = function(){
			// $http.get('/ledOff').then(function (response){
			// 	console.log(response)
			// })
			console.log("ledOn")
		}

		$scope.pumpOn = function(){
			// $http.get('/pumpOn').then(function (response){
			// 	console.log(response)
			// })
			console.log("ledOn")
		}

		$scope.pumpOff = function(){
			// $http.get('/pumpOff').then(function (response){
			// 	console.log(response)
			// })
			console.log("ledOn")
		}

		$scope.takeCam = function(){
			$http.get('/takeCam').then(function (response){
				console.log(response)
				setTimeout(function () {
        				window.location = 'page/picture.html'
     				 }, 3000)
			})
			console.log("Take Photo")
		}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////control

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////date2
///
		setInterval(function(){

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
				hole: 1,status: false
			},
			{
				hole: 2,status: false
			},
			{
				hole: 3,status: false
			},
			{
				hole: 4,status: false
			},
			{
				hole: 5,status: false
			},
			{
				hole: 6,status: false
			},
			{
				hole: 7,status: false
			},
			{
				hole: 8,status: false
			},
			{
				hole: 9,status: false
			},
			{
				hole: 10,status: false
			},
			{
				hole: 11,status: false
			},
			{
				hole: 12,status: false
			},
			{
				hole: 13,status: false
			},
			{
				hole: 14,status: false
			},
			{
				hole: 15,status: false
			},
			{
				hole: 16,status: false
			},
			{
				hole: 17,status: false
			},
			{
				hole: 18,status: false
			},
			{
				hole: 19,status: false
			},
			{
				hole: 20,status: false
			},
			{
				hole: 21,status: false
			},
			{
				hole: 22,status: false
			},
			{
				hole: 23,status: false
			},
			{
				hole: 24,status: false
			},
			{
				hole: 25,status: false
			},
			{
				hole: 26,status: false
			},
			{
				hole: 27,status: false
			},
			{
				hole: 28,status: false
			},
			{
				hole: 29,status: false
			},
			{
				hole: 30,status: false
			},
			{
				hole: 31,status: false
			},
			{
				hole: 32,status: false
			},
			{
				hole: 33,status: false
			},
			{
				hole: 34,status: false
			},
			{
				hole: 35,status: false
			},
			{
				hole: 36,status: false
			}
		]

		$scope.totalHole = []

		function getHole () {
			$http.get('/dateend').then(res => {
				$scope.totalHole = res.data
			})
		}

		getHole()

		var curt  = $scope.totalHole.findIndex(i => i.hole === hole)

		$scope.tree = function (hole) {

		 	var index =  $scope.hole.findIndex(i => i.hole === hole)
		 	$scope.hole[index].status = true
		 	$scope.hole[index].end =  moment().add(36, 'days').calendar()
		 	$http.post('/dateend', $scope.hole[index]).then(function (response){})

		 	if ($scope.totalHole[index].status === false) {
		 		console.log('first')
		 		$scope.hole[index].status = true
		 		$scope.hole[index].end =  moment().add(36, 'days').calendar()
		 		var cur  = $scope.totalHole.findIndex(i => i.hole === hole)

		 		if (cur >= 0) {
		 			console.log('th')
		 			// $http.put('/dateend/' +  $scope.totalHole[cur]._id, $scope.totalHole[cur]).then(res => {})
		 			$http.put('/dateend/' +  $scope.totalHole[cur]._id, $scope.hole[index]).then(res => {
		 				// console.log('th' +res)
		 				$scope.totalHole[index].status =  res.data.status
		 			})
		 		} else if (cur === -1) {
		 			console.log('sec')
		 			$http.post('/dateend', $scope.hole[index]).then(function (response){})
		 		}else {
		 			$http.post('/dateend', $scope.hole[index]).then(function (response){})
		 		}
		 		getHole()
		 	}else {
		 		console.log('four')
		 		var _id = ''
		 		$scope.hole[index].end =  moment().add(36, 'days').calendar()
		 		$scope.hole[index].status = false
		 		$http.get('/dateend').then(res => {
		 			$scope.dateEndDate = res.data
		 			res.data.findIndex(i => {
		 				if (i.hole === hole)  {
		 					_id =  i._id
		 				}
		 			})
		 		}).then(() => {
		 			$scope.hole[index].status = false
		 			$scope.hole[index].end =  moment().add(36, 'days').calendar()
		 			$http.put('/dateend/' + _id, $scope.hole[index]).then(res => {
		 				$scope.totalHole[index].status =  res.data.status
		 			})
		 		})

		 	}//else
		 }//function

		$scope.reday = function (list) {
				console.log('list : ' + list)
			$http.get('/dateend').then(res => {
				console.log('hole : '+res.data[list].hole)

				$scope.hole[list].status = false
		 		$scope.hole[list].end =  moment().add(36, 'days').calendar()
				$http.put('/dateend/' + $scope.totalHole[list]._id, $scope.hole[list]).then(res => {
		 				$scope.totalHole[list].status =  res.data.status
		 			})
			})

		 }//function

		$scope.getdataeat = function(){
			$http.get('/dateend').then(function (response){

				$scope.dateEndDate1 = response.data[0].end
				$scope.dateEndDate2 = response.data[1].end
				$scope.dateEndDate3 = response.data[2].end
				$scope.dateEndDate4 = response.data[3].end
				$scope.dateEndDate5 = response.data[4].end
				$scope.dateEndDate6 = response.data[5].end
				$scope.dateEndDate7 = response.data[6].end
				$scope.dateEndDate8 = response.data[7].end
				$scope.dateEndDate9 = response.data[8].end
				$scope.dateEndDate10 = response.data[9].end
				$scope.dateEndDate11 = response.data[10].end
				$scope.dateEndDate12 = response.data[11].end
				$scope.dateEndDate13 = response.data[12].end
				$scope.dateEndDate14 = response.data[13].end
				$scope.dateEndDate15 = response.data[14].end
				$scope.dateEndDate16 = response.data[15].end
				$scope.dateEndDate17 = response.data[16].end
				$scope.dateEndDate18 = response.data[17].end
				$scope.dateEndDate19 = response.data[18].end
				$scope.dateEndDate20 = response.data[19].end
				$scope.dateEndDate21 = response.data[20].end
				$scope.dateEndDate22 = response.data[21].end
				$scope.dateEndDate23 = response.data[22].end
				$scope.dateEndDate24 = response.data[23].end
				$scope.dateEndDate25 = response.data[24].end
				$scope.dateEndDate26 = response.data[25].end
				$scope.dateEndDate27 = response.data[26].end
				$scope.dateEndDate28 = response.data[27].end
				$scope.dateEndDate29 = response.data[28].end
				$scope.dateEndDate30 = response.data[29].end
				$scope.dateEndDate31 = response.data[30].end
				$scope.dateEndDate32 = response.data[31].end
				$scope.dateEndDate33 = response.data[32].end
				$scope.dateEndDate34 = response.data[33].end
				$scope.dateEndDate35 = response.data[34].end
				$scope.dateEndDate36 = response.data[35].end

				var start = moment()
				var dayend1 = moment($scope.dateEndDate1)
				var dayend2 = moment($scope.dateEndDate2)
				var dayend3 = moment($scope.dateEndDate3)
				var dayend4 = moment($scope.dateEndDate4)
				var dayend5 = moment($scope.dateEndDate5)
				var dayend6 = moment($scope.dateEndDate6)
				var dayend7 = moment($scope.dateEndDate7)
				var dayend8 = moment($scope.dateEndDate8)
				var dayend9 = moment($scope.dateEndDate9)
				var dayend10 = moment($scope.dateEndDate10)
				var dayend11 = moment($scope.dateEndDate11)
				var dayend12 = moment($scope.dateEndDate12)
				var dayend13 = moment($scope.dateEndDate13)
				var dayend14 = moment($scope.dateEndDate14)
				var dayend15 = moment($scope.dateEndDate15)
				var dayend16 = moment($scope.dateEndDate16)
				var dayend17 = moment($scope.dateEndDate17)
				var dayend18 = moment($scope.dateEndDate18)
				var dayend19 = moment($scope.dateEndDate19)
				var dayend20 = moment($scope.dateEndDate20)
				var dayend21 = moment($scope.dateEndDate21)
				var dayend22 = moment($scope.dateEndDate22)
				var dayend23 = moment($scope.dateEndDate23)
				var dayend24 = moment($scope.dateEndDate24)
				var dayend25 = moment($scope.dateEndDate25)
				var dayend26 = moment($scope.dateEndDate26)
				var dayend27 = moment($scope.dateEndDate27)
				var dayend28 = moment($scope.dateEndDate28)
				var dayend29 = moment($scope.dateEndDate29)
				var dayend30 = moment($scope.dateEndDate30)
				var dayend31 = moment($scope.dateEndDate31)
				var dayend32 = moment($scope.dateEndDate32)
				var dayend33 = moment($scope.dateEndDate33)
				var dayend34 = moment($scope.dateEndDate34)
				var dayend35 = moment($scope.dateEndDate35)
				var dayend36 = moment($scope.dateEndDate36)

				$scope.calday1 = dayend1.diff(start, 'days')
				$scope.calday2 = dayend2.diff(start, 'days')
				$scope.calday3 = dayend3.diff(start, 'days')
				$scope.calday4 = dayend4.diff(start, 'days')
				$scope.calday5 = dayend5.diff(start, 'days')
				$scope.calday6 = dayend6.diff(start, 'days')
				$scope.calday7 = dayend7.diff(start, 'days')
				$scope.calday8 = dayend8.diff(start, 'days')
				$scope.calday9 = dayend9.diff(start, 'days')
				$scope.calday10 = dayend10.diff(start, 'days')
				$scope.calday11 = dayend11.diff(start, 'days')
				$scope.calday12 = dayend12.diff(start, 'days')
				$scope.calday13 = dayend13.diff(start, 'days')
				$scope.calday14 = dayend14.diff(start, 'days')
				$scope.calday15 = dayend15.diff(start, 'days')
				$scope.calday16 = dayend16.diff(start, 'days')
				$scope.calday17 = dayend17.diff(start, 'days')
				$scope.calday18 = dayend18.diff(start, 'days')
				$scope.calday19 = dayend19.diff(start, 'days')
				$scope.calday20 = dayend20.diff(start, 'days')
				$scope.calday21 = dayend21.diff(start, 'days')
				$scope.calday22 = dayend22.diff(start, 'days')
				$scope.calday23 = dayend23.diff(start, 'days')
				$scope.calday24 = dayend24.diff(start, 'days')
				$scope.calday25 = dayend25.diff(start, 'days')
				$scope.calday26 = dayend26.diff(start, 'days')
				$scope.calday27 = dayend27.diff(start, 'days')
				$scope.calday28 = dayend28.diff(start, 'days')
				$scope.calday29 = dayend29.diff(start, 'days')
				$scope.calday30 = dayend30.diff(start, 'days')
				$scope.calday31 = dayend31.diff(start, 'days')
				$scope.calday32 = dayend32.diff(start, 'days')
				$scope.calday33 = dayend33.diff(start, 'days')
				$scope.calday34 = dayend34.diff(start, 'days')
				$scope.calday35 = dayend35.diff(start, 'days')
				$scope.calday36 = dayend36.diff(start, 'days')

			})
		}

		$scope.getdataeat()
		 // // test tak

		}, 1000);

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
