// 	const response_data = JSON.parse('${e://Field/response_data}');
	const question_refs = {
		QID13: { type: "form", sub_type: "10 fields", questions: { 9: "c0q5-16_9", 10: "c0q5-16_10" } },
		QID321: { type: "date", sub_type: "date", questions: ["c4q24_month", "c4q24_year"] },
		QID375: { type: "date", sub_type: "date", questions: ["c4q24_month", "c4q24_year"] },
		QID23: { type: "mc", sub_type: "radio", questions: ["c4q26"] },
		QID27: { type: "mc", sub_type: "radio", questions: ["c4q28"] },
		QID26: { type: "mc", sub_type: "checkbox", questions: ["c4q27"] },
		QID28: { type: "mc", sub_type: "radio", questions: ["c4q29", "c4q29_text"] },
		QID42: { type: "te", sub_type: "single line", questions: ["c4q30"] },
		QID29: { type: "mc", sub_type: "radio", questions: ["c4q601"] },
		QID30: { type: "mc", sub_type: "checkbox", questions: ["c4q602"] },
		QID32: { type: "mc", sub_type: "radio", questions: ["c4q35_text", "c4q35"] },
		QID43: { type: "mc", sub_type: "radio", questions: ["c2q501"] },
		QID53: { type: "mc", sub_type: "radio", questions: ["c2q601"] },
		QID52: { type: "mc", sub_type: "radio", questions: ["c2q301"] },
		QID54: { type: "mc", sub_type: "radio", questions: ["c2q602"] },
		QID55: { type: "mc", sub_type: "checkbox", questions: ["c2q603"] },
		QID56: { type: "mc", sub_type: "checkbox", questions: ["c2numa", "c2numa_text"] },
		QID81: { type: "mc", sub_type: "checkbox", questions: ["m6q602", "m6q602_text"] },
		QID82: { type: "mc", sub_type: "checkbox", questions: ["m6q203_text", "m6q203"] },
		QID359: { type: "matrix", sub_type: "checkbox", questions: { 1: "c6iz_1", 2: "c6iz_2" } },
		QID361: {
			type: "matrix",
			sub_type: "checkbox",
			questions: {
				1: "c6screen_1",
				2: "c6screen_2",
				3: "c6screen_3",
				4: "c6screen_4",
				5: "c6screen_5",
				6: "c6screen_6",
				7: "c6screen_7",
				8: "c6screen_8",
			},
		},
		QID363: { type: "matrix", sub_type: "checkbox", questions: { 1: "c6treat_1", 2: "c6treat_2", 3: "c6treat_3" } },
		QID365: {
			type: "matrix",
			sub_type: "checkbox",
			questions: { 1: "c6mch_1", 2: "c6mch_2", 3: "c6mch_3", 4: "c6mch_4" },
		},
		QID367: {
			type: "matrix",
			sub_type: "checkbox",
			questions: { 1: "c6health_1", 2: "c6health_2", 3: "c6health_3", 4: "c6health_4", 5: "c6health_5" },
		},
		QID369: {
			type: "matrix",
			sub_type: "checkbox",
			questions: { 1: "c6epi_1", 2: "c6epi_2", 3: "c6epi_3", 4: "c6epi_4", 5: "c6epi_5", 6: "c6epi_6", 7: "c6epi_7" },
		},
		QID370: {
			type: "matrix",
			sub_type: "checkbox",
			questions: {
				1: "c6prev_1",
				2: "c6prev_2",
				3: "c6prev_3",
				4: "c6prev_4",
				5: "c6prev_5",
				6: "c6prev_6",
				7: "c6prev_7",
				8: "c6prev_8",
			},
		},
		QID371: {
			type: "matrix",
			sub_type: "checkbox",
			questions: {
				1: "c6inspect_1",
				2: "c6inspect_2",
				3: "c6inspect_3",
				4: "c6inspect_4",
				5: "c6inspect_5",
				6: "c6inspect_6",
				7: "c6inspect_7",
				8: "c6inspect_8",
				9: "c6inspect_9",
				10: "c6inspect_10",
				11: "c6inspect_11",
				12: "c6inspect_12",
				13: "c6inspect_13",
				14: "c6inspect_14",
				15: "c6inspect_15",
				16: "c6inspect_16",
			},
		},
		QID372: {
			type: "matrix",
			sub_type: "checkbox",
			questions: {
				1: "c6eh_1",
				2: "c6eh_2",
				3: "c6eh_3",
				4: "c6eh_4",
				5: "c6eh_5",
				6: "c6eh_6",
				7: "c6eh_7",
				8: "c6eh_8",
				9: "c6eh_9",
			},
		},
		QID373: {
			type: "matrix",
			sub_type: "checkbox",
			questions: { 1: "c6other_1", 2: "c6other_2", 3: "c6other_3", 4: "c6other_4", 5: "c6other_5" },
		},
		QID122: { type: "mc", sub_type: "radio", questions: ["c7q147"] },
		QID124: { type: "mc", sub_type: "radio", questions: ["c7q149"] },
		QID128: {
			type: "matrix",
			sub_type: "checkbox",
			questions: { 2: "c7q601_2", 4: "c7q601_4", 5: "c7q601_5", 6: "c7q601_6" },
			text_answers: { 5: "c7q601_5_text", 6: "c7q601_6_text" },
		},
		QID131: { type: "mc", sub_type: "checkbox", questions: ["m9q503"] },
		QID134: { type: "mc", sub_type: "radio", questions: ["c13q401"] },
		QID136: { type: "mc", sub_type: "checkbox", questions: ["c13q403"] },
		QID169: {
			type: "matrix",
			sub_type: "checkbox",
			questions: {
				1: "m13orgs1_1",
				2: "m13orgs1_2",
				3: "m13orgs1_3",
				4: "m13orgs1_4",
				5: "m13orgs1_5",
				6: "m13orgs1_6",
				7: "m13orgs1_7",
				8: "m13orgs1_8",
				9: "m13orgs1_9",
				10: "m13orgs1_10",
				11: "m13orgs1_11",
			},
		},
		QID170: {
			type: "matrix",
			sub_type: "checkbox",
			questions: {
				1: "m13orgs2_1",
				2: "m13orgs2_2",
				3: "m13orgs2_3",
				4: "m13orgs2_4",
				5: "m13orgs2_5",
				6: "m13orgs2_6",
				7: "m13orgs2_7",
				8: "m13orgs2_8",
				9: "m13orgs2_9",
				10: "m13orgs2_10",
				11: "m13orgs2_11",
			},
		},
		QID175: { type: "mc", sub_type: "radio", questions: ["m8q219"] },
		QID177: {
			type: "matrix",
			sub_type: "checkbox",
			questions: {
				1: "m8sharetype_1",
				2: "m8sharetype_2",
				3: "m8sharetype_3",
				4: "m8sharetype_4",
				5: "m8sharetype_5",
				6: "m8sharetype_6",
			},
		},
		QID203: { type: "mc", sub_type: "checkbox", questions: ["m15q312", "m15q312_text"] },
		QID204: { type: "mc", sub_type: "radio", questions: ["m15q313", "m15q313_text"] },
		QID184: { type: "mc", sub_type: "radio", questions: ["m1q301"] },
		QID186: { type: "mc", sub_type: "checkbox", questions: ["m1q401"] },
		QID187: {
			type: "matrix",
			sub_type: "radio",
			questions: { 2: "m4it_2", 3: "m4it_3", 4: "m4it_4", 5: "m4it_5", 6: "m4it_6" },
		},
		QID190: {
			type: "matrix",
			sub_type: "checkbox",
			questions: {
				1: "m4q223_1",
				2: "m4q223_2",
				3: "m4q223_3",
				4: "m4q223_4",
				5: "m4q223_5",
				6: "m4q223_6",
				7: "m4q223_7",
			},
		},
		QID191: { type: "mc", sub_type: "checkbox", questions: ["m4_soc1"] },
		QID192: { type: "matrix", sub_type: "checkbox", questions: {} },
		QID149: {
			type: "form",
			sub_type: "4 fields",
			questions: { 1: "fwinfo_1", 2: "fwinfo_2", 3: "fwinfo_3", 4: "fwinfo_4" },
		},
	};
	Qualtrics.SurveyEngine.addOnload(function () {
		const page_questions = Object.keys(Qualtrics.SurveyEngine.Page._questionRenderers);
		const answered_questions = "${e://Field/answered_questions}".split(",");
		const working_questions = page_questions.filter((q) => answered_questions.indexOf(q) == -1);
		working_questions.forEach((qid) => {
			const question_object = question_refs[qid];
			if (question_object) {
				const { type, sub_type } = question_object;
				if (type == "mc") {
					mc_question(qid, sub_type);
				} else if (type == "matrix") {
					matrix_question(qid, sub_type);
				} else if (type == "form") {
					mc_question(qid);
				} else if (type == "date") {
					date_question(qid);
				}
				answered_questions.push(qid);
			}
		});
		Qualtrics.SurveyEngine.setEmbeddedData("answered_questions", answered_questions.join(","));
	});

	function create_buttons(qc) {
		qc.insertAdjacentHTML(
			"beforebegin",
			'<div class="btn_holder"><a href="#" class="square_btn">Clear</a><a href="#" class="square_btn">Pre-Populate</a></div>'
		);
	}

	function mc_question(qid, type) {
		window.Q_CustomJSContextQID = qid;
		Qualtrics.SurveyEngine.addOnload(function () {
			const qc = this.questionContainer;
			qc.style.opacity = "0%";
			create_buttons(qc);
		});
		Qualtrics.SurveyEngine.addOnReady(function () {
			const quest = this;
			const qc = quest.questionContainer;
			const all_text_boxes = qc.querySelectorAll(".InputText");
			const choice_array = quest.getChoices();

			const question_list = question_refs[qid]["questions"];
			const text_ref = question_list.filter((a) => a.includes("text"));
			const answer_ref = question_list.filter((a) => text_ref.indexOf(a) == -1);

			const text_answers = text_ref.map((a) => response_data[a].trim());
			const click_answers = answer_ref.map((a) => response_data[a]);

			click_answers.forEach((button_ref) => {
				const answer_array = button_ref.split("_").map((a) => parseInt(a));
				answer_array.forEach((selector, index) => {
					const choice = type == "checkbox" ? choice_array[index] : selector;
					quest.setChoiceValue(choice, selector);
				});
			});

			text_answers.forEach((text, index) => {
				if (text) {
					all_text_boxes[index].value = text;
				}
			});
			qc.style.opacity = "100%";
		});
		delete window.Q_CustomJSContextQID;
	}

	function matrix_question(qid, type) {
		window.Q_CustomJSContextQID = qid;
		Qualtrics.SurveyEngine.addOnload(function () {
			const qc = this.questionContainer;
			create_buttons(qc);
			qc.style.opacity = "0%";
		});
		Qualtrics.SurveyEngine.addOnReady(function () {
			const quest = this;
			const qc = quest.questionContainer;
			const all_rows = qc.querySelectorAll("tr.ChoiceRow");

			const question_list = question_refs[qid]["questions"];
			if (question_list) {
				const click_answers = {};
				Object.keys(question_list).forEach((row) => {
					const ref = question_list[row];
					click_answers[row] = response_data[ref];
				});

				Object.keys(click_answers).forEach((row) => {
					console.log(row);
					const ref_row = all_rows[parseInt(row) - 1];
					const answer_array = click_answers[row].split("_").map((a) => parseInt(a));
					const choice_array = Array.from(ref_row.querySelectorAll("input:not(.InputText)")).map((a) => a.id);

					answer_array.forEach((answer, index) => {
						const selector = type === "checkbox" ? index : answer - 1;
						const choice_refs = choice_array[selector].split("~");
						const row_ref = choice_refs[2];
						const col_ref = choice_refs[3];
						quest.setChoiceValue(row_ref, col_ref, answer);
					});
				});
			}

			const text_list = question_refs[qid]["text_answers"];
			if (text_list) {
				const text_answers = {};
				Object.keys(text_list).forEach((row) => {
					const ref = text_list[row];
					text_answers[row] = response_data[ref];
				});
				Object.keys(text_answers).forEach((row) => {
					const ref_row = all_rows[parseInt(row) - 1];
					ref_row.querySelector(".InputText").value = text_answers[row];
				});
			}
			qc.style.opacity = "100%";
		});
		delete window.Q_CustomJSContextQID;
	}

	function form_question(qid) {
		window.Q_CustomJSContextQID = qid;
		Qualtrics.SurveyEngine.addOnload(function () {
			const qc = this.questionContainer;
			create_buttons(qc);
			qc.style.opacity = "0%";
		});
		Qualtrics.SurveyEngine.addOnReady(function () {
			const quest = this;
			const qc = quest.questionContainer;
			const all_fields = qc.querySelectorAll(".InputText");
			const question_list = question_refs[qid]["questions"];

			Object.keys(question_list).forEach((row) => {
				const field = all_fields[parseInt(row) - 1];
				field.value = response_data[question_list[row]];
			});
			qc.style.opacity = "100%";
		});
		delete window.Q_CustomJSContextQID;
	}

	function date_question(qid) {
		window.Q_CustomJSContextQID = qid;
		Qualtrics.SurveyEngine.addOnload(function () {
			const qc = this.questionContainer;
			create_buttons(qc);
			qc.style.opacity = "0%";

			const fp = document.createElement("link");
			fp.rel = "stylesheet";
			fp.href =
				"https://cdn.jsdelivr.net/combine/npm/flatpickr@4.6.9/dist/plugins/monthSelect/style.min.css,npm/flatpickr@4.6.9/dist/flatpickr.min.css";
			document.querySelector(".Skin").insertAdjacentElement("afterend", fp);
		});
		Qualtrics.SurveyEngine.addOnReady(function () {
			const qc = this.questionContainer;
			const date_element = qc.querySelector(".InputText");
			jQuery
				.getScript(
					"https://cdn.jsdelivr.net/combine/npm/flatpickr@4.6.9/dist/flatpickr.min.js,npm/flatpickr@4.6.9/dist/plugins/monthSelect/index.min.js"
				)
				.done(() => {
					const ref_date = response_data.c4q24_month + "-" + response_data.c4q24_year;
					const date_field = flatpickr(date_element, {
						defaultDate: flatpickr.parseDate(ref_date),
						plugins: [
							new monthSelectPlugin({
								shorthand: true,
							}),
						],
					});
				});
		});
		delete window.Q_CustomJSContextQID;
	}
