// ==UserScript==
// @name         proxer-responsive.js
// @namespace    http://tampermonkey.net/
// @version      0.3
// @updateURL    https://raw.githubusercontent.com/LuceusXylian/proxer-responsive/main/proxer-responsive.js
// @downloadURL  https://raw.githubusercontent.com/LuceusXylian/proxer-responsive/main/proxer-responsive.js
// @description  Force proxer.me to be responsive
// @author       Xylian
// @match        https://proxer.me/**
// @grant 		 GM_setValue
// @grant 		 GM_getValue
// ==/UserScript==

(function() {
	// inject importent meta tags for responsive design
	document.head.insertAdjacentHTML('beforeend', `<meta http-equiv="X-UA-Compatible" content="IE=edge">`);
	document.head.insertAdjacentHTML('beforeend', `<meta name="viewport" content="width=device-width, initial-scale=1">`);

	// inject Stylesheet
	document.head.insertAdjacentHTML('beforeend',
		`<style>
			* { max-width: 100%; }
            html { width: 100vw; overflow: hidden auto; }

            #nav, #innerNav, #outerNav, #panel { position: unset !important; min-width: 300px; max-width: 100%; height: auto; clear: both; }
			#rightNav { display: block; width: 100%; }
			#nav li.borderLeft { border-left: 0; }
			#wrapper { min-width: 300px; max-width: 100%; background: unset; }
			#top { position: unset; margin: 0; }
			#main { min-width: 300px; margin: 0; border: 0; border-radius: 0; }
            #loginBubble { z-index: 100; }

			#headSection { display: none; }
			.inner { min-width: 300px; width: 100%; max-width: 100%; margin: 0; padding: 0 }
			table, tbody, theader, tfooter, tr { display: block; width: 100%; }
			td { display: block; width: 100%; }
			.proxerSlider { display: none !important; }
			#simple-navi { border-radius: 0; }
			#simple-navi, #simple-navi-wiki, #simple-navi li, ul#simple-navi-wiki li { position: unset; float: unset; }
			ul#simple-navi li, ul#simple-navi-wiki li { float: unset; display: inline-block; margin: 2px; }
			ul#simple-navi li a, ul#simple-navi-wiki li a { border-radius: 10px; }

            .infocell { float: none; height: auto; }

			#box-table-a tr { height: auto !important; }
            #box-table-a tr, #box-table-a td { background: #000; }
            #box-table-a tr:first-child, #box-table-a th { background: #8A0E0E; }
            #box-table-a tr:not(:first-child):hover { background: #FFF !important; color: #000 !important; }
			#box-table-a th, #box-table-a td { display: inline-block; border-bottom: 0; width: calc(25% - 20px); }

			table.details td { display: table-cell; min-width: 50%; width: 1000px; max-width: 100%; }
			table.details td div { width: 100% !important; }

			#panel #navigation { display: none; }
			#readers { position: unset !important; }
			#readers .menu { width: 40px; min-height: 40px; }
			#readers > a { width: 25px; padding: 0; text-align: center; }
			#reader img { pointer-events: none; cursor: default; max-width: 100%; height: auto;}
		</style>`
	);

	// Manga Reader Stuff
	var reader = document.getElementById("reader");
	if (reader !== null) {
		var nextChapterButton = reader.appendChild(
			document.createElement("a")
		);
		nextChapterButton.id = "nextChapterButton";
		nextChapterButton.className = "menu";
		nextChapterButton.innerText = "Nächstes Kapitel";
		nextChapterButton.style.width = "80%";
		nextChapterButton.style.margin = "10px 0";

		nextChapterButton.addEventListener("click", function() {
			document.getElementById("chapterImage0").click();
		});

	}
})();
