/* global bootstrap: false */
(function () {
  'use strict'
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })
})()
// Sidebar caret up down
$(document).on('click', '.btn-toggle', function() {
  $(this).children('.fas.float-end').toggleClass('fa-angle-up fa-angle-down');
})
$(document).on('dblclick', '.btn-toggle', function() {
  $(this).children('.fas.float-end').toggleClass('fa-angle-up fa-angle-down');
})
