// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Lucas Osmond
// Created on: March 2023
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area of rectangle.
 */
function calculate () {
  // input
  const length = parseInt(document.getElementById('length-of-rectangle').value)
  const width = parseInt(document.getElementById('width-of-rectangle').value)

  // process
  const area = length * width

  // output
  document.getElementById('area-of-rectangle').innerHTML = 'Area is: ' + area + ' cm²'
}
