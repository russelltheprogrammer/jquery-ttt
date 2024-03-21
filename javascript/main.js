$(document).ready( () => {

    $('#header-section h1').on('mouseenter', (event) => {
        $(event.currentTarget).css('color', 'red')
        .on('mouseleave', () => { 
            $(event.currentTarget).css('color', 'black')
        });
    });

    $('#secret-section').on('mouseenter', (event) => {
        $(event.currentTarget).css('opacity', '1')
        .on('mouseleave', () => {
            $(event.currentTarget).css('opacity', '0')
        })
    });
    
});
