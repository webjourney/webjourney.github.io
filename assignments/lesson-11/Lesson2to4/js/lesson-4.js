


/*Lesson 4-5: Iterating Over Collections*/
/*fruitBasketBegin.htm page*/

$(function(){
		// Array containing Objects with Fruit names & quantities
		var fruitBasket = [	{title:'Apples', quantity:20},
							{title:'Oranges', quantity:25},
							{title:'Kiwis', quantity:50},
							{title:'Strawberries', quantity:45},
							{title:'Bananas', quantity:10},
							{title:'Mangoes', quantity:5},
							{title:'Tomatoes', quantity:30} ];

		// Your jQuery code goes here
$.each( fruitBasket, function( index, element){
        $('.fruits').append('<li>We have' + element.quantity + " " + element.title + '</li>');
    
})
    
$('.fruits > li').each( function(index, element){
    $(element).css('background-color', 'rgb(100,200,0)');
    
})
    
    
	})


/*Lesson 4-4: Slide Effects*/
/*DropDownMenuBegin.htm page*/

$(function(){
		// All jQuery code goes here
    $('.dropdownMenu > li').hover(function(){
            $(this).children("ul").slideToggle(200);
    })
    
	})


/*$(function(){
		// All jQuery code goes here
    $(' .dropdownMenu > li').hover( function(){
        //Mouseover
        $(this).children("ul").slideDown(200);
        
    }, function(){
        //Mouseout
        $(this).children("ul").slideUp(200);
        
    })
})*/

/*Lesson 4-3: Playing with Classes*/
/*toggleButtonBegin.htm page*/
$(function () {
			// jQuery Code goes here

    $('.toggleBtn').click( function(){
      $(this).toggleClass("toggleOn");  
        
    });
    
		})
/*animatedMenuBegin.htm page*/
$(function(){
		// All jQuery code goes here
 $('.navigation > li').hover(function(){
     //This code executes when the mouse pointer is over the list item
    
        $(this).addClass('openSesame');
     
    }, function(){
    //This code executes when the mouse pointer leaves the list item 
        
        $(this).removeClass('openSesame');
     
 });
	})



/*Lesson 4-2: Inserting Content continue...*/
/*insertHTMLBegin.html page*/
$(function(){
    var box1= $('.box1');
    var box2= $('.box2');
    
    function LeftToRight(){
        if (box2.html() == ''){
            //Get content from box1 and put it into box 2
            // Empty out box1
            box2.html(box1.html());
            box1.html('');
        }   
    }
    
    $('#LeftToRight').click( LeftToRight );
    
    function RightToLeft(){
        if(box1.html() == ''){
            //Get content from boxq and put it inot box1
            //Empty out box 2
            box1.html( box2.html() );
            box2.html('');         
        }
    }
    $('#RightToLeft').click( RightToLeft );
    
    })


/*Lesson 4-2: Inserting Content*/
$(function(){

    var nameVal = $('input[name="nameVal"]');
    
    function FillEmpty(){
        if(nameVal.val() == ''){
            nameVal.val('John Doe');
            
        }
    }

    $('#ReqAQuoteBtn').click( FillEmpty );
    
})

/*$(function(){
	$('.coreValues').prepend("<li><strong>This is brand new !!</strong></li>");	
    
    $("<li><strong>This is also great!!</strong></li>").prependTo(".coreValues");
	})
*/
/*$(function(){
	$('.coreValues').append("<li><strong>This is brand new !!</strong></li>");	
    
    $("<li><strong>This is also great!!</strong></li>").appendTo(".coreValues");
	})*/

/*Lesson 4-1:Playing with Styles*/
$(function () {
	
    var toggleStyle = function (){
    var inputFields = $('input[type="text"]');
        
        if( inputFields.css('background-color') === 'rgb(255, 0, 0)' ) {
            // Set background color to white
            inputFields.css('background-color', 'rgb(255, 255, 255)');
        } else {
            //Set background color to red
            inputFields.css('background-color', 'rgb(255, 0, 0)');
        }
    }
    $('#ReqAQuoteBtn').click(toggleStyle);
})

/*$(function () {
		// jQuery Code goes here
    toggleStyle = function (){
        if( $('input[type="text"]').css('background-color') === 'rgb(255, 0, 0)' ) {
            // Set background color to white
            $('input[type="text"]').css('background-color', 'rgb(255, 255, 255)');
        } else {
            //Set background color to red
            $('input[type="text"]').css('background-color', 'rgb(255, 0, 0)');
        }
    }
    $('#ReqAQuoteBtn').click(toggleStyle);
})

/*seeing Console has rgb(255, 255, 255)
$(function(){
		// jQuery Code goes here
    console.log($('input[type="text"]').css('background-color'));
})*/