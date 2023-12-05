document.addEventListener("DOMContentLoaded", function () {
    const formm = document.getElementById("formm");
    const quizz = document.getElementById("quizz");
    const nextbutton = document.getElementById("nextbutton");
    let jelenlegi = 1;
    
    nextbutton.addEventListener("click", function () {
        const jelenlegie = document.getElementById("page" + jelenlegi);
        const kovie = document.getElementById("page" + (jelenlegi + 1));

        if (kovie) {
            jelenlegie.style.display = "none";
            kovie.style.display = "block";
            jelenlegi++;
        } else {
            quiz();
        }
    });

    function quiz() {
        bekert_nev = document.getElementById("neve").value;


        let score = 0;

		const a = document.getElementById("h").checked;
        const b = document.getElementById("p").checked;
        const c = document.getElementById("w").checked;
        const d = document.getElementById("r").checked;
        if (a==1){score = score + 5;}
        if (b==1){score = score + 1;}
        if (c==1){score = score + 4;}
        if (d==1){score = score + 3;}

        const e = document.getElementById("s").checked;
		const f = document.getElementById("j").checked;
		if (e==1){score = score + 1;}
        if (f==1){score = score + 2;}

		const g = document.getElementById("lista").selectedIndex;
        if (g==0) {score = score + 4;}
        if (g==1) {score = score + 1;}
        if (g==2) {score = score + 2;}
        if (g==3) {score = score + 3;}
        if (g==4) {score = score + 5;}

        const h = document.getElementById("yes").checked;
        const i = document.getElementById("maybe").checked;
        const j = document.getElementById("it").checked;
        const k = document.getElementById("probably").checked;
        if (h==1){score = score + 1;}
        if (i==1){score = score + 5;}
        if (j==1){score = score + 3;}
        if (k==1){score = score + 2;}

        const l = document.getElementById("skill").value;
		if (l>=0 && l<=3){score = score + 4;}
        if (l>=4 && l<=7){score = score + 3;}
        if (l>7) {score = score + 2;}

        if (score == 6 || score <= 9){
            document.getElementById("kiiras").innerHTML = "Congrats " + bekert_nev + `!<br>Your lightsaber would be blue!`;
            document.getElementById("eredmeny").src="kepek/sabers/kekquiz.jpg";
        }
        if (score >=10 && score <= 12){
            document.getElementById("kiiras").innerHTML = "Congrats " + bekert_nev + `!<br>Your lightsaber would be green!`;
            document.getElementById("eredmeny").src="kepek/sabers/zoldquiz.jpg";
        }
        if (score >=13 && score <= 15){
            document.getElementById("kiiras").innerHTML = "Congrats " + bekert_nev + `!<br>Your lightsaber would be orange!`;
            document.getElementById("eredmeny").src="kepek/sabers/narancsquiz.jpg";
        }
        if (score >=16 && score <= 18){
            document.getElementById("kiiras").innerHTML = "Congrats " + bekert_nev + `!<br>Your lightsaber would be purple!`;
            document.getElementById("eredmeny").src="kepek/sabers/lilaquiz.jpg";
        }
        if (score >=19 && score <= 21){
            document.getElementById("kiiras").innerHTML = "Congrats " + bekert_nev + `!<br>Your lightsaber would be yellow!`;
            document.getElementById("eredmeny").src="kepek/sabers/sargaquiz.jpg";
        }
        if (score >=22 && score <= 25){
            document.getElementById("kiiras").innerHTML = "Congrats " + bekert_nev + `!<br>Your lightsaber would be silver!`;
            document.getElementById("eredmeny").src="kepek/sabers/ezustquiz.jpg";
        }
        if (score >=26 && score <= 29){
            document.getElementById("kiiras").innerHTML = "Congrats " + bekert_nev + `?<br>Your lightsaber would be red!`;
            document.getElementById("eredmeny").src="kepek/sabers/pirosketto.jpg";
        }
    }
});