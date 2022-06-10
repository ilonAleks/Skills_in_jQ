$(function () {
	$(".p1").click(function () {
		$(".div1").fadeToggle(1000);
	});
	$(".p1").click(function () {
		$(".p1, .div1").animate({ width: '250px' }, 1000);
	});
});//the disappearing text below

$(function () {
	$(".p2").click(function () {
		$(".div2").toggle(1500);
	});
	$(".p2").click(function () {
		$(".p2, .div2").animate({ width: '300px' }, 1500);
	});
});//the text is folded from below

$(function () {
	$(".p3").dblclick(function () {
		$(".div3").slideToggle(1000);
	});
});//text is hides upstairs

$(function () {
	$("h2").addClass("zag zag2");
});//added two classes to the title

$(function () {
	$("h2").removeClass("zag2");
});//deleted one of the previously added classes

$(function () {
	$(".zag").html("This is changed title");
	$(".zag").css("textAlign", "center");
});//changed the title, put it in the center

$(function () {
	$("sup:first").text("    (sup:first) in jQ     ");
});//In the first superstructure text replaced the text

$(function () {
	$("a").attr("href", "http://jquery.com/");
});//changed the transition to another site

$(function () {
	$("a").text("Replaced link");
});//Changed the signature of the link

$(function () {
	var val = $("a").attr("href");
	alert("Now outside this window you see the original view of the page, which was changed using " + val);
});//Derived a pop -up window with text

$(function () {
	$("ol").removeAttr("start");
});//deleted the start of the list of the list from the number 22

$(function () {
	$("h2").before("<b>This text</b> is added using a function (before) <br> before the heading<br><br>");
});//I inserted the text before the heading

$(function () {
	var zag1 = $("<h1></h1>").text("This is the training of my first skills with the library jQ");
	$("h2").before(zag1);
});//I inserted a larger title with the text before the existing

$(function () {
	$("h2").addClass("h2");
});//I assigned the class heading

$(function () {
	var but = $("<button></button>").text("Toggle class at the Title");
	$("h2").after(but);
	but.css("align", "center")
});//I inserted the button under the heading, defended

$(function () {
	$("button").click(function () {
		$("h2").toggleClass("green");
	});
});//I was assigned the button for the change of classes for the heading.Now it changes color

$(function () {
	$("a").css("text-align", "right");
});//placed the link to the right side

$(function () {
	$(".block").css("backgroundImage", "url(https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)");
});//Replaced the background pattern


$(function () {
	var items = $("ol").children();
	items.css("color", "yellow");
});//For children of the list, I made a font color yellow

$(function () {
	$("ol").children().eq(1).css("color", "white");
});//For the second child, the list changed the color of the font to white

$(function () {
	$("#add").on("click", function () {
		var val = $("input").val();
		if (val !== '') {
			var elem = $("<li></li>").text(val);
			$(elem).append("<button class='rem'>X</button>");
			$("#mylist").append(elem);
			$("input").val("");
			$(".rem").on("click", function () {
				$(this).parent().remove();
			})
		}
	});
});//a list has been created, buttons to add values and remove them from the list


// $(function () {
// 	var div = $("div4");
// 	div.animate({ opacity: 1 });
// 	div.animate({ height: '+=100px', width: '+=100px', top: '+=100px' }, 500);
// 	div.animate({ height: '-=100px', width: '-=100px', left: '+=100px' }, 500);
// 	div.animate({ height: '+=100px', width: '+=100px', top: '-=100px' }, 500);
// 	div.animate({ height: '-=100px', width: '-=100px', left: '-=100px' }, 500);
// 	div.animate({ opacity: 0.5 });
// });//Animation of the orange ball

// $(function () {
// 	var date = $("p").text("Click me to see the day and time");
// 	$('div').prepend(date);
// 	date.addClass('demo');
// 	date.css('color', 'orange')
// });//added text, appropriated class and color

// $(function () {
// 	$(".demo").click(function () {
// 		$('.demo').html(Date());
// 		$('.demo').css('color', 'green');
// 	});
// });//I appointed to show the current date and time for the text