Online on [Github Pages](https://captainalan.github.io/36-time/).

Prompt
------
write a function, that takes a string of the form "hh:mm:ss" that is
24hour clock, the function returns a string of the form "hh:mm:ss",
where the output is em time, where hh ranges from 0 to 35, but is in
heximal number notation (where digits are 0 to 5 only). Similar for mm
and ss.

```
;; Sample correct values for reference

(emi/sen "00:00:00")
;; "00:00:00"

(emi/sen "00:00:30")
;; "00:00:24"

(emi/sen "00:01:00")
;; "00:00:52"

(emi/sen "00:30:00")
;; "00:43:00"

(emi/sen "01:00:00")
 ;; "01:30:00"

(emi/sen "12:00:00")
;; "30:00:00"

(emi/sen "13:00:00")
;; "31:30:00"

(emi/sen "13:14:15")
;; "31:50:45"

(emi/sen "16:00:00")
;; "40:00:00"
```

Running tests
-------------

You'll need `npm`. After installing the `jest` testing library by
doing `npm install`, do `npm run test` from this directory.

Emily's implementation tips
---------------------------

I followed this general approach

> the general technique that I use to do the
> conversion is work out as a percentage how far through the day we
> are in the input of 24 hours - then convert that percentage into
> EmTime - so 24H->day%->EmTime this is implemented in my elisp code
> above

Things I learned
----------------
- just found you can use `Number.toString(base)`... aiyaaa wrote this myself here for 6
- ^ woops turns out I needed that for a quick fix
