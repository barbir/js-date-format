/*
 * ----------------------------------------------------------------------------
 * Package:     JS Date Format Patch
 * Version:     0.9.11
 * Date:        2012-04-12
 * Description: In lack of decent formatting ability of Javascript Date object,
 *              I have created this "patch" for the Date object which will add
 *              "Date.format(dateObject, format)" static function, and the
 *              "dateObject.toFormattedString(format)" member function.
 *              Along with the formatting abilities, I have also added the
 *              following functions for parsing dates:
 *              "Date.parseFormatted(value, format)" - static function
 *              "dateObject.fromFormattedString(value, format)" - member
 *              function
 * Author:      Miljenko Barbir
 * Author URL:  http://miljenkobarbir.com/
 * Repository:  http://github.com/barbir/js-date-format
 * ----------------------------------------------------------------------------
 * Copyright (c) 2010 Miljenko Barbir
 * Dual licensed under the MIT and GPL licenses.
 * ----------------------------------------------------------------------------
 */
(function() {
    // extend the Javascript Date class with the "format" static function which will format
    // the provided date object using the provided format string
    Date.format = function (date, format)
    {
        if(!(date instanceof Date)) {
            format = date;
            date = this;
            if(!(date instanceof Date)) throw 'Invalid use of format';
        }

        // get the helper functions object
        var formatLogic = Date.formatLogic;

        // check if the AM/PM option is used
        var isAmPm		= format.toLowerCase().indexOf("a") !== -1;

        // prepare all the parts of the date that can be used in the format
        var parts		= {};
        parts['d']		= date.getDate();
        parts['dd']		= formatLogic.pad(parts['d'], 2);
        parts['ddd']	= formatLogic.i18n.shortDayNames[date.getDay()];
        parts['dddd']	= formatLogic.i18n.dayNames[date.getDay()];
        parts['M']		= date.getMonth() + 1;
        parts['MM']		= formatLogic.pad(parts['M'], 2);
        parts['MMM']	= formatLogic.i18n.shortMonthNames[parts['M'] - 1];
        parts['MMMM']	= formatLogic.i18n.monthNames[parts['M'] - 1];
        parts['yyyy']	= date.getFullYear();
        parts['yyy']	= formatLogic.pad(parts['yyyy'], 2) + 'y';
        parts['yy']		= formatLogic.pad(parts['yyyy'], 2);
        parts['y']		= 'y';
        parts['H']		= date.getHours();
        parts['hh']		= formatLogic.pad(isAmPm ? formatLogic.convertTo12Hour(parts['H']) : parts['H'], 2);
        parts['h']		= isAmPm ? formatLogic.convertTo12Hour(parts['H']) : parts['H'];
        parts['HH']		= formatLogic.pad(parts['H'], 2);
        parts['m']		= date.getMinutes();
        parts['mm']		= formatLogic.pad(parts['m'], 2);
        parts['s']		= date.getSeconds();
        parts['ss']		= formatLogic.pad(parts['s'], 2);
        parts['z']		= date.getMilliseconds();
        parts['zz']		= parts['z'] + 'z';
        parts['zzz']	= formatLogic.pad(parts['z'], 3);
        parts['ap']		= parts['H'] < 12 ? 'am' : 'pm';
        parts['a']		= parts['H'] < 12 ? 'am' : 'pm';
        parts['AP']		= parts['H'] < 12 ? 'AM' : 'PM';
        parts['A']		= parts['H'] < 12 ? 'AM' : 'PM';

        // parse the input format, char by char
        var output = "";
        var token = "";
        for(var i = 0; i < format.length; i++)
        {
            token = format.charAt(i);

            while((i + 1 < format.length) && parts[token + format.charAt(i + 1)] !== undefined)
            {
                token += format.charAt(++i);
            }

            if (parts[token] !== undefined)
            {
                output += parts[token];
            }
            else
            {
                output += token;
            }
        }

        // return the parsed result
        return output;
    };

    // this is the format logic helper object that contains the helper functions
    // and the internationalization settings that can be overridden
    Date.formatLogic =
    {
        // left-pad the provided number with zeros
        pad: function (value, digits)
        {
            var max = 1;
            var zeros = "";

            if(digits < 1) return "";

            for(var i = 0; i < digits; i++)
            {
                max *= 10;
                zeros += "0";
            }

            var output = value;

            output = zeros + value;
            output = output.substring(output.length - digits);

            return output;
        },

        // convert the 24 hour style value to a 12 hour style value
        convertTo12Hour: function (value)
        {
            return value % 12 === 0 ? 12 : value % 12;
        },

        // internationalization settings
        i18n:
        {
            dayNames:			['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            shortDayNames:		['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            monthNames:			['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            shortMonthNames:	['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
    };

    // add a member "format" function which will return the string representation
    // of the current object formatted using the provided format string
    Date.prototype.toFormattedString = Date.format; // Deprecated
    Date.prototype.format = Date.format;

    // extend the Javascript Date class with the "parseFormatted" static function which
    // will parse the provided string, using the provided format into a valid date object
    Date.parseFormatted = function (value, format)
    {
    	var output		= new Date(2000, 0, 1);
    	var parts		= {
            'd':    '([0-9][0-9]?)',
            'dd':   '([0-9][0-9])',
//          'ddd':  'NOT SUPPORTED',
//          'dddd': 'NOT SUPPORTED',
            'M':    '([0-9][0-9]?)',
            'MM':   '([0-9][0-9])',
//          'MMM':  'NOT SUPPORTED',
//          'MMMM': 'NOT SUPPORTED',
            'yyyy': '([0-9][0-9][0-9][0-9])',
            'yyy':  '([0-9][0-9])[y]',
            'yy':   '([0-9][0-9])',
            'H':    '([0-9][0-9]?)',
            'hh':   '([0-9][0-9])',
            'h':    '([0-9][0-9]?)',
            'HH':   '([0-9][0-9])',
            'm':    '([0-9][0-9]?)',
            'mm':   '([0-9][0-9])',
            's':    '([0-9][0-9]?)',
            'ss':   '([0-9][0-9])',
            'z':    '([0-9][0-9]?[0-9]?)',
            'zz':   '([0-9][0-9]?[0-9]?)[z]',
            'zzz':  '([0-9][0-9][0-9])',
            'ap':   '([ap][m])',
            'a':    '([ap][m])',
            'AP':   '([AP][M])',
            'A':    '([AP][M])'
        };

        function toInt(v) { return parseInt(v, 10); }

    	// parse the input format, char by char
    	var regex = "";
    	var outputs = [];
    	var token = "";

    	// parse the format to get the extraction regex
    	for (var i=0; i < format.length; i++)
    	{
    		token = format.charAt(i);
    		while((i + 1 < format.length) && parts[token + format.charAt(i + 1)] !== undefined)
    		{
    			token += format.charAt(++i);
    		}

    		if (parts[token])
    		{
    			regex += parts[token];
    			outputs.push(token);
    		}
    		else
    		{
    			regex += token;
    		}
    	}

    	// extract matches
    	var r = new RegExp(regex);
    	var matches = value.match(r);
        //Remove first match that is equals value
        matches.shift();

    	if(!matches || matches.length !== outputs.length)
            throw 'Matches length exception';

    	// parse each match and update the output date object
    	for(i = 0; i < outputs.length; i++)
    	{
			switch(outputs[i])
			{
				case 'yyyy':
				case 'yyy':
					output.setYear(toInt(matches[i]));
					break;

				case 'yy':
					output.setYear(2000 + toInt(matches[i]));
					break;

				case 'MM':
				case 'M':
					output.setMonth(toInt(matches[i]) - 1);
					break;

				case 'dd':
				case 'd':
					output.setDate(toInt(matches[i]));
					break;

				case 'hh':
				case 'h':
				case 'HH':
				case 'H':
					output.setHours(toInt(matches[i]));
					break;

				case 'mm':
				case 'm':
					output.setMinutes(toInt(matches[i]));
					break;

				case 'ss':
				case 's':
					output.setSeconds(toInt(matches[i]));
					break;

				case 'zzz':
				case 'zz':
				case 'z':
					output.setMilliseconds(toInt(matches[i]));
					break;

				case 'AP':
				case 'A':
				case 'ap':
				case 'a':
					if((matches[i].toLowerCase() === 'pm') && (output.getHours() < 12))
					{
						output.setHours(output.getHours() + 12);
					}

					if((matches[i].toLowerCase() === 'am') && (output.getHours() === 12))
					{
						output.setHours(0);
					}
					break;
			}
    	}

    	return output;
    };

    // add a member "from" function which will return the date object, created
    // from the provided string and the format
    Date.prototype.fromFormattedString = function(value, format)
    {
    	this.setTime(Date.parseFormatted(value, format).getTime());
    	return this;
    };

})();
