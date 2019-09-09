$('.vizew-nav-tab > li > a').click(function(event){
    event.preventDefault();
    let elementId=$(event.currentTarget).attr('href');
    $('.tab-pane').removeClass('active').removeClass('show');
    $(elementId).addClass('active').addClass('show');
    $('.vizew-nav-tab  a.active' ).removeClass('active');
    $(event.currentTarget).addClass('active');
    

    console.log();
});