const createProgressBar = function (maxLoops) {
	const refEl = document.querySelector("#ProgressBar");

	const baseHTML =
		'<div class="progress-container"><div class="progress" id="progress"></div><div class="circle active">1</div><div class="circle">2</div></div><style>.container{text-align:center}.progress-container{display:flex;justify-content:space-between;position:relative;margin-bottom:30px;max-width:100%;width:770px}.progress-container::before{content:"";background-color:var(--pb-remain);position:absolute;top:50%;left:0;transform:translateY(-50%);height:4px;width:100%;z-index:0}.progress{background-color:var(--pb-complete);position:absolute;top:50%;left:0;transform:translateY(-50%);height:4px;width:0%;z-index:0;transition:.4s ease}.circle{background-color:#fff;color:var(--pb-remain-text);border-radius:50%;height:40px;width:40px;display:flex;align-items:center;justify-content:center;border:3px solid var(--pb-remain);transition:.4s ease;z-index:1}.circle.active{border-color:var(--pb-complete);font-weight:bolder;color:var(--pb-complete-text)}</style>';

	refEl.innerHTML = baseHTML;

	if (maxLoops > 2) {
		const container = refEl.querySelector(".progress-container");
		let currentCount = 2;
		while (currentCount < maxLoops) {
			currentCount++;
			const newHTML = '<div class="circle">' + currentCount + "</div>";
			container.insertAdjacentHTML("beforeend", newHTML);
		}
	}
	updateColors();
};

const finder = function (el, text = "__Progress_Bar__") {
	const babies = el.descendants();
	let refEl;
	babies.forEach((item) => {
		if (item.innerHTML.includes(text)) {
			refEl = item;
		}
	});
	return refEl;
};

const updateColors = function () {
	const completeCircleColor = "${e://Field/completeCircleColor}" || "#3498db";
	const completeTextColor = "${e://Field/completeTextColor}" || "#3498db";
	const remainCircleColor = "${e://Field/remainCircleColor}" || "#e0e0e0";
	const remainTextColor = "${e://Field/remainTextColor}" || "grey";

	const newStyles = document.createElement("style");
	newStyles.innerHTML = ":root{--pb-complete:"
		.concat(completeCircleColor, ";--pb-complete-text:")
		.concat(completeTextColor, ";--pb-remain:")
		.concat(remainCircleColor, ";--pb-remain-text:")
		.concat(remainTextColor, "}");

	document.body.insertAdjacentElement("beforeend", newStyles);
};

const updateProgress = function (currentLoop) {
	const progress = document.getElementById("progress");
	const circles = document.querySelectorAll(".circle");
	circles.forEach((circle, index) => {
		if (index < currentLoop) circle.classList.add("active");
		else circle.classList.remove("active");
	});
	const actives = document.querySelectorAll(".active");
	progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
};

const currentLoop = parseInt("${lm://CurrentLoopNumber}");
const maxLoops = parseInt("${lm://TotalLoops}");

if (isNaN(currentLoop)) {
	alert("This is not a loop and merge block. \n This progress bar is only for loop and merge blocks.");
}

if (maxLoops < 2) {
	alert("You need atleast 2 loops for this progress bar.");
}
if (!isNaN(currentLoop) && maxLoops >= 2) {
	createProgressBar(maxLoops);
	updateProgress(currentLoop);
}
