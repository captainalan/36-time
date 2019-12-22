Prompt
------
write a function, that takes a string of the form "hh:mm:ss" that is
24hour clock, the function returns a string of the form "hh:mm:ss",
where the output is em time, where hh ranges from 0 to 35, but is in
heximal number notation (where digits are 0 to 5 only). Similar for mm
and ss.

Emily's implementation tips
---------------------------
the general technique that I use to do the
conversion is work out as a percentage how far through the day we
are in the input of 24 hours - then convert that percentage into
EmTime - so 24H->day%->EmTime this is implemented in my elisp code
above

Things I learned
----------------
- just found you can use `Number.toString(base)`... aiyaaa wrote this myself here for 6
