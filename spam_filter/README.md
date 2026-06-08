# Spam Filter

Regular expressions, often shortened to **"regex"** or "regexp", are patterns that help programmers match, search, and replace text. Regular expressions are powerful, but can be difficult to understand because they use so many special characters.

In this spam filter project, you'll learn about capture groups, positive lookaheads, negative lookaheads, and other techniques to match any text you want.

Regular expressions can take flags to modify their behavior. For instance, the *i* flag can be used to make the expression ignore case, causing it to match hello, HELLO, and Hello for the expression /hello/.

Strings have a **.match()** method, which accepts a regular expression as an argument and determines if the string matches that expression.

The *alternate sequence* **|** can be used to match either the text on the left or the text on the right of the |. For example, the regular expression /yes|no/ will match either yes or no.

Arrays have a **.some()** method. Like the .filter() method, .some() accepts a callback function which should take an element of the array as the argument. The .some() method will return true if the callback function returns true for at least one element in the array.

A **capture group** is a way to define a part of the expression that should be captured and saved for later reference. You can define a capture group by wrapping a part of your expression in parentheses. For example, **/h(i|ey) camper/** would match either *hi camper* or *hey camper*, and would capture i or ey in a group.