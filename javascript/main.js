$(document).ready( () => {

    $('.hide').hide();


    $('#header-section h1').on('mouseenter', (event) => {
        $(event.currentTarget).css('color', 'red')
        .on('mouseleave', () => { 
            $(event.currentTarget).css('color', 'black')
        });
    });

    $('#secret-section').on('mouseenter', () => {
        $('.hide').show()
        // .on('mouseleave', () => {
        //     $('.hide').hide();
        // })
    });
    
});
