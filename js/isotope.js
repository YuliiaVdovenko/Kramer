// init Isotope
var $grid = $('.grod').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        getSortData: {
            category: '[data-category]'
        }
    }
);

// bind filter button click
$('#filters').on( 'click', 'span', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    $grid.isotope({ filter: filterValue });
});
