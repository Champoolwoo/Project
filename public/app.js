angular.module('app', [])
	.controller('TodoListController', function($scope,$http) {

		$scope.conLED = true
		$scope.conPump = true
		$scope.item = ''
		$scope.sheets = []
		$scope.status = 44

		$scope.box1 = ''
		$scope.box2 = ''
		$scope.box3 = ''
		$scope.box4 = ''
		$scope.box5 = ''
		$scope.box6 = ''

		setInterval(function(){

			var start  = new Date()
			var end1  = new Date($scope.box1)
			var end2  = new Date($scope.box2)
			var end3  = new Date($scope.box3)
			var end4  = new Date($scope.box4)
			var end5  = new Date($scope.box5)
			var end6  = new Date($scope.box6)

			var diff1 = end1- start
			var diff2 = end2- start
			var diff3 = end3- start
			var diff4 = end4- start
			var diff5 = end5- start
			var diff6 = end6- start

			var dd1  = Math.floor( diff1 / (1000*60*60*24) )
			var hh1 = Math.floor( diff1 / (1000*60*60) )
			var mm1 = Math.floor( diff1 / (1000*60) )
			var ss1 = Math.floor( diff1 / 1000 )
			$scope.day1 = dd1
			$scope.hour1 = hh1 - dd1 * 24
			$scope.min1 = mm1 - hh1 * 60
			$scope.sec1 = ss1 - mm1 * 60

			var dd2  = Math.floor( diff2 / (1000*60*60*24) )
			var hh2 = Math.floor( diff2 / (1000*60*60) )
			var mm2 = Math.floor( diff2 / (1000*60) )
			var ss2 = Math.floor( diff2 / 1000 )
			$scope.day2 = dd2
			$scope.hour2 = hh2 - dd2  * 24
			$scope.min2 = mm2 - hh2 * 60
			$scope.sec2 = ss2 - mm2  * 60

			var dd3  = Math.floor( diff3 / (1000*60*60*24) )
			var hh3 = Math.floor( diff3 / (1000*60*60) )
			var mm3 = Math.floor( diff3 / (1000*60) )
			var ss3 = Math.floor( diff3 / 1000 )
			$scope.day3 = dd3
			$scope.hour3 = hh3 - dd3  * 24
			$scope.min3 = mm3 - hh3 * 60
			$scope.sec3 = ss3 - mm3  * 60

			var dd4  = Math.floor( diff4 / (1000*60*60*24) )
			var hh4 = Math.floor( diff4 / (1000*60*60) )
			var mm4 = Math.floor( diff4 / (1000*60) )
			var ss4 = Math.floor( diff4 / 1000 )
			$scope.day4 = dd4
			$scope.hour4 = hh4 - dd4  * 24
			$scope.min4 = mm4 - hh4 * 60
			$scope.sec4 = ss4 - mm4  * 60

			var dd5  = Math.floor( diff5 / (1000*60*60*24) )
			var hh5 = Math.floor( diff5 / (1000*60*60) )
			var mm5 = Math.floor( diff5 / (1000*60) )
			var ss5 = Math.floor( diff5 / 1000 )
			$scope.day5 = dd5
			$scope.hour5 = hh5 - dd5  * 24
			$scope.min5 = mm5 - hh5 * 60
			$scope.sec5 = ss5 - mm5  * 60

			var dd6  = Math.floor( diff6 / (1000*60*60*24) )
			var hh6 = Math.floor( diff6 / (1000*60*60) )
			var mm6 = Math.floor( diff6 / (1000*60) )
			var ss6 = Math.floor( diff6 / 1000 )
			$scope.day6 = dd6
			$scope.hour6 = hh6 - dd6  * 24
			$scope.min6 = mm6 - hh6 * 60
			$scope.sec6 = ss6 - mm6  * 60

			$scope.$apply()
			// console.log($scope.day1+" Day "+$scope.hour1+" Hours")
			// console.log($scope.day2+" Day "+$scope.hour2+" Hours")
			// console.log($scope.day3+" Day "+$scope.hour3+" Hours")
			// console.log($scope.day4+" Day "+$scope.hour4+" Hours")
			// console.log($scope.day5+" Day "+$scope.hour5+" Hours")
			// console.log($scope.day6+" Day "+$scope.hour6+" Hours")

		 }, 1000)//setInterval

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

  // 	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /*setInterval(function(){
  	// var date.timezone = Asia/Bangkok
  	var a = new Date($scope.box1)
  	var x = new Date()
  	var z = x.getTime()
  	var b = a.getTime()

    var start = moment(Date.now())
    var end1 = moment($scope.box1)
    var end2 = moment($scope.box2)
    var end3 = moment($scope.box3)
    var end4 = moment($scope.box4)
    var end5 = moment($scope.box5)
    var end6 = moment($scope.box6)

    var milisec1 = end1.diff(start)
    var milisec2 = end2.diff(start)
    var milisec3 = end3.diff(start)
    var milisec4 = end4.diff(start)
    var milisec5 = end5.diff(start)
    var milisec6 = end6.diff(start)

    $scope.day1 = moment.duration(milisec1).days()
    $scope.hour1 = moment.duration(milisec1).hours()
    $scope.min1 = moment.duration(milisec1).minutes()
    $scope.sec1 = moment.duration(milisec1).seconds()

    $scope.day2 = moment.duration(milisec2).days()
    $scope.hour2 = moment.duration(milisec2).hours()
    $scope.min2 = moment.duration(milisec2).minutes()
    $scope.sec2 = moment.duration(milisec2).seconds()

    $scope.day3 = moment.duration(milisec3).days()
    $scope.hour3 = moment.duration(milisec3).hours()
    $scope.min3 = moment.duration(milisec3).minutes()
    $scope.sec3 = moment.duration(milisec3).seconds()

    $scope.day4 = moment.duration(milisec4).days()
    $scope.hour4 = moment.duration(milisec4).hours()
    $scope.min4 = moment.duration(milisec4).minutes()
    $scope.sec4 = moment.duration(milisec4).seconds()

    $scope.day5 = moment.duration(milisec5).days()
    $scope.hour5 = moment.duration(milisec5).hours()
    $scope.min5 = moment.duration(milisec5).minutes()
    $scope.sec5 = moment.duration(milisec5).seconds()

    $scope.day6 = moment.duration(milisec6).days()
    $scope.hour6 = moment.duration(milisec6).hours()
    $scope.min6 = moment.duration(milisec6).minutes()
    $scope.sec6 = moment.duration(milisec6).seconds()
    // console.log($scope.box1)
    // console.log($scope.day1 +" "+ $scope.hour1 +" "+  $scope.min1 +" "+ $scope.sec1)
     $scope.$apply()

    // $scope.hour = moment.duration(start).hours()
    // $scope.min = moment.duration(start).minutes()
    // $scope.sec = moment.duration(start).seconds()
     // console.log($scope.box1)
    // console.log(start)
    // console.log($scope.day, $scope.hour, $scope.min, $scope.sec)
  }, 1000)//setInterval*/
  // 	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

		$scope.controlSwitch = function(){
			if($scope.conLED == true){
				console.log("LED On")
				$scope.LED = true
			}else{
				console.log("LED Off")
				$scope.LED = false
			}

			if($scope.conPump == true){
				console.log("Pump On")
			}else{
				console.log("Pump Off")
			}
		}

		$http.get('https://sheetsu.com/apis/v1.0/5eac309ffcdc').then(function(res){
			console.log()
		      $scope.items = res.data[res.data.length - 1]
		      $scope.sheets = res.data
    		})

})

