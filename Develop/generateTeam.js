function generateTeam(answers) {
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
		<div class="col-md-4 col-sm-4 col-xs-12">
			<div class="row section-success ourTeam-box text-center">
				<div class="col-md-12 section1">
					<img src="./meet01.png">
				</div>
				<div class="col-md-12 section2">
					<p>Name</p><br>
					<h1><img id="social_icons" src="./manager.png" alt="manager" width="22px" height="20px" >MANAGER</h1><br>
				</div>
				<div class="col-md-12 section3">
					<p>
						Office ID:${answers.managerid}<br>
                        Email :${answers.manageremail}<br>
                        Office Phone:${answers.managerphone}
					</p>
				</div>
				<div class="col-md-12 section4">
					<i class="fa fa-facebook-official" aria-hidden="true"></i>
					<i class="fa fa-twitter" aria-hidden="true"></i>
					<i class="fa fa-google-plus" aria-hidden="true"></i>
					<i class="fa fa-envelope" aria-hidden="true"></i>
				</div>
			</div>
		</div>
`
htmlArray.push(htmlBeginning);
for (let i=0; i<teamArray.length; i++){
    let object =`
    <div class="col-md-4 col-sm-4 col-xs-12">
			<div class="row section-info ourTeam-box text-center">
				<div class="col-md-12 section1">
					<img src="./meet02.png">
				</div>
				<div class="col-md-12 section2">
					<p>${teamArray[i].name}</p><br>
					<h1><img id="social_icons" src="./${teamArray[i].title}.png" alt="manager" width="22px" height="20px" >${finalTeamArray[i].title}</h1><br>
				</div>
				<div class="col-md-12 section3">
					<p>Office ID:${fteamArray[i].id}<p>
                    <p>Email :${teamArray[i].email}<p>
    `
    if (teamArray[i].github){
        object+=`
        <p>Github Username: <a href="https://github.com/${teamArray[i].github}">${fteamArray[i].github}</a><p>
        `
    }        
	if (teamArray[i].school){
        object+=`
        <p>School: ${teamArray[i].school}</p>
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
};

    
module.exports = generateTeam;