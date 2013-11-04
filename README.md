Javascript Date Format Patch 0.9.12
================================================================================================

About
------------------------------------------------------------------------------------------------

In lack of decent formatting ability of Javascript Date object, I have created this "patch" for
the Date object which will add the following functions:

 * Date.format(dateObject, format)
 * dateObject.toFormattedString(format)
 * Date.parseFormatted(value, format)
 * dateObject.fromFormattedString(value, format)

First two will allow you to convert dates to strings in your desired format.
The other two will allow you to parse a date from a string in a desired format.

Licence
------------------------------------------------------------------------------------------------

Copyright (c) 2010 Miljenko Barbir
Dual licensed under the MIT (http://en.wikipedia.org/wiki/MIT_License) and GPL 
(http://en.wikipedia.org/wiki/GNU_General_Public_License) licenses.

Usage
------------------------------------------------------------------------------------------------

    var d = new Date(2001, 1, 3, 4, 5, 6, 7);
    
    // Date object static function call
    Date.format(d, 'dd.MM.yyyy. HH:mm:ss.zzz');    // "03.02.2001. 04:05:06.007"
    
    // Date object member function call
    d.toFormattedString('yyyy-MM-dd');             // "2001-02-03"
    
    // Date object static function call - will return a valid Date object
    d = Date.parseFormatted('03.02.2001. 04:05:06.007', 'dd.MM.yyyy. HH:mm:ss.zzz');
    
    // Date object member function call - will update the calling object with the
    //                                    provided value
    d.fromFormattedString('2001-02-03', 'yyyy-MM-dd');
