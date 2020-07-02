/* Top level wrapper function */
function emTime(input_time) {
	// Quick input validation
	if (!standard_24h_time_validp(input_time)) {
		return null; // Do nothing if input string is not in correct format
	}

	// For now, assume input_time in format hh:mm:ss
	//                                      01234567
	// Should be 24 hr time.
	return em_time_from_percent_through_day(
		standard_24h_time_percent_through_day(input_time)
	);
};

// ez hax--->take c code convert to js

/* Helper functions */
function standard_24h_time_validp() {
	// TODO do validation for realizies---use regexp?
	return true;
};

function standard_24h_time_percent_through_day(input_time) {
	// Convert input_time string (hh:mm:ss) into seconds
	//                            01234567 <-- helps me count index :D
	// Assumes that input_time is valid time/format
	const hours = input_time[0] + input_time[1];
	const minutes = input_time[3] + input_time[4];
	const seconds = input_time[6] + input_time[7];

	const total_seconds_numerator =
		parseInt(hours) * 60 * 60
		+ parseInt(minutes) * 60
		+ parseInt(seconds);
	const total_seconds_denominator =
		24   // 24 hours
		* 60 // 60 minutes per hour
		* 60; // 60 seconds per minute

	return total_seconds_numerator / total_seconds_denominator;
};

function em_time_from_percent_through_day(percent_through_day) {
	// Assume percent_through_day is 0 <= n <= 1.
	// Use regular base-10 displayed JavaScript numbers to do math...
	// ...then use helper function to convert to correct representation.

	// Iterative solution... subtract form "seconds remaining",
	// biggest units to smallest units.
	const total_emSeconds_in_emDay = 36 * 36 * 36;
	const emSeconds_input =
		Math.floor(total_emSeconds_in_emDay * percent_through_day);

	const emHours = Math.floor(emSeconds_input / (36 * 36));
	const emMinutes = Math.floor((emSeconds_input - (emHours * (36 * 36))) / 36);
	const emSeconds = (emSeconds_input % 36);

	return [emHours, emMinutes, emSeconds]
		.map(x => {
			// Convert to base 6; better way is probably to use JS standard toString(base)
			let converted = base_six_string_from_number(x);
			if (("" + converted).length == 1) { // eww implicit conversion
				return "0" + converted; // Add extra zero to single digits
			} else {
				return converted;
			}
		})
		.join(':');
}

function base_six_string_from_number(n) {
	// Assume n is an int, >= 0
	let remainder = n;

	// Iteratively build up array, combine to string when returning
	let to_return_array = [];

	// Find maximum exponent needed...
	let max_power = 0;
	while (Math.pow(6, max_power) <= n) {
		max_power++;
	}

	for (let i = 0; i < max_power; i++) {
		let to_push = Math.floor(n / Math.pow(6, i)) % 6;
		remainder -= to_push;
		to_return_array.push(to_push);
	}

	let to_return_string = to_return_array
		.reverse()
		.filter(x => x !== ',') // delete commas
		.join('');

	if (to_return_string === '') {
		return 0;
	} else {
		return to_return_string;
	}
}

// module export stuff; used with jest test
exports.emTime = emTime;
exports.standard_24h_time_validp = standard_24h_time_validp;
exports.standard_24h_time_percent_through_day = standard_24h_time_percent_through_day;
exports.em_time_from_percent_through_day = em_time_from_percent_through_day;
