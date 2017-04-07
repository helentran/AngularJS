/*
* @Author: Helen Tran
* @Date:   2017-04-07 11:54:19
*/

var app = angular.module('gemStore',[]);
 var gem = {
    name: 'Azurite',
    price: 110.50,
    canPurchase: false,
    soldOut: true
  };
var gems = [
    { name: 'Azurite', price: 2.95 },
    { name: 'Bloodstone', price: 5.95 },
    { name: 'Zircon', price: 3.95 }
  ];
  app.controller('StoreController',function(){
    this.product = gem;
    this.products = gems;
  });