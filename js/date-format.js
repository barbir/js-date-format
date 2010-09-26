/*
 * ----------------------------------------------------------------------------
 * Package:     Date Format Patch
 * Version:     0.9.0
 * Date:        2010-09-26
 * Description: In lack of decent formatting ability of Javascript Date object,
 *              I have created this "patch" for the Date object which will add 
 *              "Date.format(dateObject, format)" static function, and the 
 *              "dateObject.toFormattedString(format)" member function.
 * Author:      Miljenko Barbir
 * Author URL:  http://miljenkobarbir.com/
 * Repository:  http://github.com/barbir/void
 * ----------------------------------------------------------------------------
 * Copyright (c) 2010 Miljenko Barbir
 * Dual licensed under the MIT and GPL licenses.
 * ----------------------------------------------------------------------------
 */

// extend the Javascript Date class with the "format" static function which will format
// the provided date object using the provided format string
Date.format = function (date, format)
{
	// get the helper functions object
	var formatLogic = Date.formatLogic;

	// check if the AM/PM option is used
	var isAmPm		= (format.indexOf("a") != -1) || (format.indexOf("A") != -1);

	// prepare all the parts of the date that can be used in the format
	var parts		= new Array();
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
	var i = 0;
	var output = "";
	while (i < format.length)
	{
		token = format.charAt(i);
		while((i + 1 < format.length) && parts[token + format.charAt(i + 1)] != null)
			token += format.charAt(++i);

		if (parts[token] != null)
			output += parts[token];
		else
			output += token;

		i++;
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

		if(digits < 1)
			return "";

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
		return value % 12 == 0 ? 12 : value % 12;
	},

	// internationalization settings
	i18n:
	{
		dayNames:			['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		shortDayNames:		['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		monthNames:			['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		shortMonthNames:	['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	}
}

// add a member "format" function which will return the string representation
// of the current object formatted using the provided format string
Date.prototype.toFormattedString = function (format)
{
	return Date.format(this, format);
}