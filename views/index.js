var listFood = [
	{
		url: "https://i.imgur.com/0uKoa9K.png",
		name: "mì"
	},
	{
		url: "https://i.imgur.com/6PDJ9dw.png",
		name: "Bánh mì"
	},
	{
		url: "https://i.imgur.com/i4P3dUG.png",
		name: "Xúc xích nướng"
	},
	{
		url: "https://i.imgur.com/5Hy2oy0.png",
		name: "Bánh bao"
	}];

		var strFood = "";

	for(let i = 0; i < listFood.length; i++) {
		strFood += '<div class="carousel-item active"><img src="' 
		+ listFood[i].url + '"class="d-block w-80"></div>';
	}

	console.log(strFood);