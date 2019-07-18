$('.coll').hide();
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
      console.log(x.length);
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  x[slideIndex-1].style.backgroundImage = 'url(./images/ORU-WEB-COVER' + slideIndex + '.jpg)'
  setTimeout(carousel, 4000); 
}

// function toggleIcon(e) {
//     $(e.target)
//         .prev('.collapse')
//         .find(".fas")
//         .toggleClass('fa-plus fa-minus');
// }
// $('.panel-group').on('hidden.bs.collapse', toggleIcon);
// $('.panel-group').on('shown.bs.collapse', toggleIcon);
// $('.coll').show();

$('.facMember').click(function(e){
    console.log("clicked");
    PageToShow = $(this).attr('id');
    console.log(PageToShow);
    $('.btn').hide();
    $(this).parent().parent().parent().hide();
    $(this).parent().parent().parent().parent().siblings('.content').hide();
    $('div #'+PageToShow).show();

    $('button').click(function(e){
        e.preventDefault();
        console.log("try close");
        $('.coll').hide();
        $('.btn').show();
        $(this).parent().parent().parent().parent().siblings().show();
        $(this).parent().parent().parent().siblings('.collapse').show();
    })
    e.preventDefault();
})

$('.expand').click(function(){
    $('.collapse').collapse('show')
    $(this).text("Close All -");
    $(this).removeClass('expand');
    $(this).addClass('closeAll');

    $('.closeAll').click(function(){
        $('.collapse').collapse('hide')
        $(this).text("Open All +");
        $(this).removeClass('closeAll');
        $(this).addClass('expand');
    
    });
});

