// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Lucas Osmond
// Created on: March 2023
// This file contains the JS functions for index.html

function calculate () {
  // input
  const length = parseFloat(document.getElementById('length-of-rectangle').value)
  const width = parseFloat(document.getElementById('width-of-rectangle').value)

  // process
  const area = (length * width)

  // output
  document.getElementById('area').innerHTML = 'area is: ' + area + 'cm²'
}
