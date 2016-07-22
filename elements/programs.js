// var page = document.createElement("program-pages");
var programs = [];

function activate()
{
	// defineDOTS();

	// page.program = program[0];
}

function defineDOTS(){
	var dotsWorkshops = [

	new Workshop (
		"Kids 9 - 14 years old.",
		"Our first program!! Exploring robotics using LEGO®'s Mindstorm EV3 kit (put link here).  [kids] will be in teams of five (per robot kit) and presented with a series of challenges they have to solve by building robots. Each challenge is harder than the last, so no child, no matter how old, will be bored! The curriculum was developed and tested by the Robostangs (link), FIRST® Robotics team in Northville, MI.",
		"TBD",
		"TBD",
		"FREEEEEEEEEEEEEEEEEEEEEEEEEEEEE~"
		)

	];

	programs.push(
		new Program (
			"DOTS",
			"D.O.T.S.",
			"Detroit Outreach Teaching Services",
			dotsWorkshops,
			"ROBO"
			)
		);
}

function Workshop (who, what, where, when, cost){
	this.who = who;
	this.what = what;
	this.where = where;
	this.when = when;
	this.cost = cost;
		// pictures?
	}

function Program(nameCd, name, description, workshops, subjectCd) {
	this.nameCd = nameCd;
	this.name = name;
	this.description = description;
	this.workshops	= workshops;
	this.subjectCd = subjectCd;
	// this.what = what; //still figuring out if we need this in the future state.
	// pictures
}

function returnProgram(nameCode)
{
	switch(nameCode)
	{
		case 'DOTS': defineDOTS(); break;
	}

	return programs[0];

}