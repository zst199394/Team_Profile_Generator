function generateTeam(teamArray) {
const htmlArray = []
const htmlBeginning =`
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href=https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css>
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="./style.css">
</head>
<body>
<div class="container section-ourTeam">
	<div class="row">
		<div class="col-md-12 col-sm-12 col-xs-12 ourTeam-hedding text-center">
			<h1>Meet Our Team</h1>
		</div>
	</div>
	<div class="row">
		
`
htmlArray.push(htmlBeginning);
for (let i=0; i<teamArray.length; i++){
    let object =`
    <div class="col-md-4 col-sm-4 col-xs-12">
	`
	if (teamArray[i].title === "Manager"){
		object+=`
			<div class="row section-success ourTeam-box text-center">
				`
	}
	if (teamArray[i].title === "Engineer"){
		object+=`
			<div class="row section-info ourTeam-box text-center">
				`
	}
	if (teamArray[i].title === "Intern"){
		object+=`
			<div class="row section-danger ourTeam-box text-center">
				`
	}
	   object+=`
				<div class="col-md-12 section1">
					<img src="./img/${teamArray[i].title}01.png">
				</div>
				<div class="col-md-12 section2">
					<p>${teamArray[i].name}</p><br>
					<h1><img id="social_icons" src="./img/${teamArray[i].title}.png" alt="manager" width="22px" height="20px" >${teamArray[i].title}</h1><br>
				</div>
				<div class="col-md-12 section3">
					<p>Office ID:${teamArray[i].id}<p>
                    <p>Email:${teamArray[i].email}<p>
    `
	if (teamArray[i].phone){
        object+=`
        <p>Office Phone: ${teamArray[i].phone}</a></p>
        `
    }     
    if (teamArray[i].github){
        object+=`
        <p>Github: <a href="https://github.com/${teamArray[i].github}">${teamArray[i].github}</a></p>
        `
    }        
	if (teamArray[i].school){
        object+=`
        <p>Graduate School: ${teamArray[i].school}</p>

        `
    }

    object+= `
    </div>
		<div class="col-md-12 section4">
					<i class="fa fa-facebook-official" aria-hidden="true"></i>
					<i class="fa fa-twitter" aria-hidden="true"></i>
					<i class="fa fa-google-plus" aria-hidden="true"></i>
					<i class="fa fa-envelope" aria-hidden="true"></i>
				</div>
			</div>
		</div>   `
   htmlArray.push(object)
}

const htmlEnd =`	
  </div>

</div>
</body>
</html>`
htmlArray.push(htmlEnd);
let html = htmlArray.join("")
return(html)
};

    
module.exports = generateTeam;