// newFunction();
// function newFunction() {
//     alert("Let's Do this!");
// }

//  creating  item with jquery & html

$(document).ready(function(){
    $('#create-item').on('click', function(){
        let name = $('#input-create-item').val();
        $('#input-create-item').val();

        let html = '';
        html +='<div class="item">';
        html +='<div class="name">' + name + '</div>';
        html +='<img id="shirt" src="asset/shirt.jpg" alt="shirt">';
        html +='<div class="description">Lorem ipsum dolor sit amet.</div>';
        html += '<div class="price">670</div>';
        html += '<button class="itemAdd">Add to Cart</button>';
        html += '<button class="itemRemove">Remove</button>';
        
        html +='<br>';
        html +='<a class="more" href="#">More Info</a>';
        html +='<div class="moreInfo"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, perspiciatis.</div>';
        html +='</div>';

        $('.container').prepend(html);
    });

    // remove card using event delegation
        $('.container').on('click', '.itemRemove',   function(){
            // console.log('Hi there!');
            $(this).parent().remove();
        });

        // toggling visiblilty
        $('.container').on('click', '.more', function(event){
            event.preventDefault();
            // console.log('I  Will Suceed');

            // add animation using fadeToggle or fadeToggle and slow or fast as an argument
            $(this).parent().find('.moreInfo').slideToggle('slow');

            // adding animation, making our button bump to the left and back
            $(this)
            .animate({"opacity": 0.2, "margin-left": 10}, 'fast')
            .animate({"opacity": 1, "margin-left": 0}, 'slow');

        });
});