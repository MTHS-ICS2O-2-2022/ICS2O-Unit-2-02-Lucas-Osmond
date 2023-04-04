// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Lucas Osmond
// Created on: March 2023
// This file contains the JS functions for index.html

/**
 * Do basic math.
 */
function doMathClicked() {
  document.getElementById("add-math").innerHTML = "<p>6 + 5 = " + (6 + 5) + "</p>"
  document.getElementById("subtract-math").innerHTML = "<p>7 - 3 =  " + (7 - 3) + "</p>"  
  document.getElementById("multiply-math").innerHTML = "<p>3 + 4 × 2 = " + (3 + 4 * 2) + "</p>" 
  document.getElementById("divide-math").innerHTML = "<p>(4 ÷ 2) + 3 = " + (4 / 2 + 3) + "</p>"
  document.getElementById("exponent-math").innerHTML = "<p>5 + 2³ = " + (5 + 2 ** 3) + "</p>"
}
