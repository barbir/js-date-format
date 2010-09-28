test
(
	'internal methods - string toFormattedString(format) - member method (date part)',
	function()
	{
		testDate = new Date(2001, 1, 3);

		ok(testDate.toFormattedString('d')						== '3',								'toFormattedString(\'d\') string');
		ok(testDate.toFormattedString('M')						== '2',								'toFormattedString(\'M\') string');
		ok(testDate.toFormattedString('yy')						== '01',							'toFormattedString(\'yy\') string');

		ok(testDate.toFormattedString('d.M.yy.')				== '3.2.01.',						'toFormattedString(\'d.M.yy.\') string');
		ok(testDate.toFormattedString('dd.MM.yyyy.')			== '03.02.2001.',					'toFormattedString(\'dd.MM.yyyy.\') string');
		ok(testDate.toFormattedString('ddd, MMM. d. yyyy.')		== 'Sat, Feb. 3. 2001.',			'toFormattedString(\'ddd, MMM. d. yyyy.\') string');
		ok(testDate.toFormattedString('dddd, MMMM d. yyyy.')	== 'Saturday, February 3. 2001.',	'toFormattedString(\'dddd, MMMM d. yyyy.\') string');
	}
);

test
(
	'internal methods - string toFormattedString(format) - member method (time part)',
	function()
	{
		testAmDate = new Date(2001, 2, 3, 4, 5, 6, 7);
		testPmDate = new Date(2001, 2, 3, 14, 5, 6, 7);

		ok(testAmDate.toFormattedString('h:m:s.z')			== '4:5:6.7',			'toFormattedString(\'h:m:s.z\') string');
		ok(testAmDate.toFormattedString('H:m:s.z')			== '4:5:6.7',			'toFormattedString(\'H:m:s.z\') string');
		ok(testAmDate.toFormattedString('h:m:s.z a')		== '4:5:6.7 am',		'toFormattedString(\'h:m:s.z a\') string');
		ok(testAmDate.toFormattedString('H:m:s.z a')		== '4:5:6.7 am',		'toFormattedString(\'H:m:s.z a\') string');
		ok(testAmDate.toFormattedString('h:m:s.z A')		== '4:5:6.7 AM',		'toFormattedString(\'h:m:s.z A\') string');
		ok(testAmDate.toFormattedString('H:m:s.z A')		== '4:5:6.7 AM',		'toFormattedString(\'H:m:s.z A\') string');
		ok(testAmDate.toFormattedString('hh:mm:ss.zzz')		== '04:05:06.007',		'toFormattedString(\'hh:mm:ss.zzz\') string');
		ok(testAmDate.toFormattedString('HH:mm:ss.zzz')		== '04:05:06.007',		'toFormattedString(\'HH:mm:ss.zzz\') string');
		ok(testAmDate.toFormattedString('hh:mm:ss.zzz a')	== '04:05:06.007 am',	'toFormattedString(\'hh:mm:ss.zzz a\') string');
		ok(testAmDate.toFormattedString('HH:mm:ss.zzz A')	== '04:05:06.007 AM',	'toFormattedString(\'HH:mm:ss.zzz A\') string');
		ok(testAmDate.toFormattedString('hh:mm:ss.zzz ap')	== '04:05:06.007 am',	'toFormattedString(\'hh:mm:ss.zzz ap\') string');
		ok(testAmDate.toFormattedString('HH:mm:ss.zzz AP')	== '04:05:06.007 AM',	'toFormattedString(\'HH:mm:ss.zzz AP\') string');

		ok(testPmDate.toFormattedString('h:m:s.z')			== '14:5:6.7',			'toFormattedString(\'h:m:s.z\') string');
		ok(testPmDate.toFormattedString('H:m:s.z')			== '14:5:6.7',			'toFormattedString(\'H:m:s.z\') string');
		ok(testPmDate.toFormattedString('h:m:s.z a')		== '2:5:6.7 pm',		'toFormattedString(\'h:m:s.z a\') string');
		ok(testPmDate.toFormattedString('H:m:s.z a')		== '14:5:6.7 pm',		'toFormattedString(\'H:m:s.z a\') string');
		ok(testPmDate.toFormattedString('h:m:s.z A')		== '2:5:6.7 PM',		'toFormattedString(\'h:m:s.z A\') string');
		ok(testPmDate.toFormattedString('H:m:s.z A')		== '14:5:6.7 PM',		'toFormattedString(\'H:m:s.z A\') string');
		ok(testPmDate.toFormattedString('hh:mm:ss.zzz')		== '14:05:06.007',		'toFormattedString(\'hh:mm:ss.zzz\') string');
		ok(testPmDate.toFormattedString('HH:mm:ss.zzz')		== '14:05:06.007',		'toFormattedString(\'HH:mm:ss.zzz\') string');
		ok(testPmDate.toFormattedString('hh:mm:ss.zzz a')	== '02:05:06.007 pm',	'toFormattedString(\'hh:mm:ss.zzz a\') string');
		ok(testPmDate.toFormattedString('HH:mm:ss.zzz A')	== '14:05:06.007 PM',	'toFormattedString(\'HH:mm:ss.zzz A\') string');
	}
);

test
(
	'internal methods - string format(date, format) - static method - (date part)',
	function()
	{
		testDate = new Date(2001, 1, 3);

		ok(Date.format(testDate, 'd')						== '3',								'format(testDate, \'d\') string');
		ok(Date.format(testDate, 'M')						== '2',								'format(testDate, \'M\') string');
		ok(Date.format(testDate, 'yy')						== '01',							'format(testDate, \'yy\') string');

		ok(Date.format(testDate, 'd.M.yy.')					== '3.2.01.',						'format(testDate, \'d.M.yy.\') string');
		ok(Date.format(testDate, 'dd.MM.yyyy.')				== '03.02.2001.',					'format(testDate, \'dd.MM.yyyy.\') string');
		ok(Date.format(testDate, 'ddd, MMM. d. yyyy.')		== 'Sat, Feb. 3. 2001.',			'format(testDate, \'ddd, MMM. d. yyyy.\') string');
		ok(Date.format(testDate, 'dddd, MMMM d. yyyy.')		== 'Saturday, February 3. 2001.',	'format(testDate, \'dddd, MMMM d. yyyy.\') string');
	}
);

test
(
	'internal methods - string format(date, format) - static method - (time part)',
	function()
	{
		testAmDate = new Date(2001, 2, 3, 4, 5, 6, 7);
		testPmDate = new Date(2001, 2, 3, 14, 5, 6, 7);
	
		ok(Date.format(testAmDate, 'h:m:s.z')			== '4:5:6.7',			'format(testAmDate, \'h:m:s.z\') string');
		ok(Date.format(testAmDate, 'H:m:s.z')			== '4:5:6.7',			'format(testAmDate, \'H:m:s.z\') string');
		ok(Date.format(testAmDate, 'h:m:s.z a')			== '4:5:6.7 am',		'format(testAmDate, \'h:m:s.z a\') string');
		ok(Date.format(testAmDate, 'H:m:s.z a')			== '4:5:6.7 am',		'format(testAmDate, \'H:m:s.z a\') string');
		ok(Date.format(testAmDate, 'h:m:s.z A')			== '4:5:6.7 AM',		'format(testAmDate, \'h:m:s.z A\') string');
		ok(Date.format(testAmDate, 'H:m:s.z A')			== '4:5:6.7 AM',		'format(testAmDate, \'H:m:s.z A\') string');
		ok(Date.format(testAmDate, 'hh:mm:ss.zzz')		== '04:05:06.007',		'format(testAmDate, \'hh:mm:ss.zzz\') string');
		ok(Date.format(testAmDate, 'HH:mm:ss.zzz')		== '04:05:06.007',		'format(testAmDate, \'HH:mm:ss.zzz\') string');
		ok(Date.format(testAmDate, 'hh:mm:ss.zzz a')	== '04:05:06.007 am',	'format(testAmDate, \'hh:mm:ss.zzz a\') string');
		ok(Date.format(testAmDate, 'HH:mm:ss.zzz A')	== '04:05:06.007 AM',	'format(testAmDate, \'HH:mm:ss.zzz A\') string');
		ok(Date.format(testAmDate, 'hh:mm:ss.zzz ap')	== '04:05:06.007 am',	'format(testAmDate, \'hh:mm:ss.zzz ap\') string');
		ok(Date.format(testAmDate, 'HH:mm:ss.zzz AP')	== '04:05:06.007 AM',	'format(testAmDate, \'HH:mm:ss.zzz AP\') string');

		ok(Date.format(testPmDate, 'h:m:s.z')			== '14:5:6.7',			'format(testPmDate, \'h:m:s.z\') string');
		ok(Date.format(testPmDate, 'H:m:s.z')			== '14:5:6.7',			'format(testPmDate, \'H:m:s.z\') string');
		ok(Date.format(testPmDate, 'h:m:s.z a')			== '2:5:6.7 pm',		'format(testPmDate, \'h:m:s.z a\') string');
		ok(Date.format(testPmDate, 'H:m:s.z a')			== '14:5:6.7 pm',		'format(testPmDate, \'H:m:s.z a\') string');
		ok(Date.format(testPmDate, 'h:m:s.z A')			== '2:5:6.7 PM',		'format(testPmDate, \'h:m:s.z A\') string');
		ok(Date.format(testPmDate, 'H:m:s.z A')			== '14:5:6.7 PM',		'format(testPmDate, \'H:m:s.z A\') string');
		ok(Date.format(testPmDate, 'hh:mm:ss.zzz')		== '14:05:06.007',		'format(testPmDate, \'hh:mm:ss.zzz\') string');
		ok(Date.format(testPmDate, 'HH:mm:ss.zzz')		== '14:05:06.007',		'format(testPmDate, \'HH:mm:ss.zzz\') string');
		ok(Date.format(testPmDate, 'hh:mm:ss.zzz a')	== '02:05:06.007 pm',	'format(testPmDate, \'hh:mm:ss.zzz a\') string');
		ok(Date.format(testPmDate, 'HH:mm:ss.zzz A')	== '14:05:06.007 PM',	'format(testPmDate, \'HH:mm:ss.zzz A\') string');
	}
);

test
(
	'internal methods - string formatLogic.pad(value, digits)',
	function()
	{

		ok(Date.formatLogic.pad(123, 5)		== '00123',			'pad(123, 5) string');
		ok(Date.formatLogic.pad(123, 4)		== '0123',			'pad(123, 4) string');
		ok(Date.formatLogic.pad(123, 3)		== '123',			'pad(123, 3) string');
		ok(Date.formatLogic.pad(123, 2)		== '23',			'pad(123, 2) string');
		ok(Date.formatLogic.pad(123, 1)		== '3',				'pad(123, 1) string');
		ok(Date.formatLogic.pad(123, 0)		== '',				'pad(123, 0) string');
		ok(Date.formatLogic.pad(0, 3)		== '000',			'pad(0, 3) string');
		ok(Date.formatLogic.pad(0, 2)		== '00',			'pad(0, 2) string');
		ok(Date.formatLogic.pad(0, 1)		== '0',				'pad(0, 1) string');
		ok(Date.formatLogic.pad(0, 0)		== '',				'pad(0, 0) string');
	}
);

test
(
	'internal methods - int formatLogic.convertTo12Hour(value)',
	function()
	{
		ok(Date.formatLogic.convertTo12Hour(0)	== 12,			'convertTo12Hour(0) string');
		ok(Date.formatLogic.convertTo12Hour(1)	== 1,			'convertTo12Hour(1) string');
		ok(Date.formatLogic.convertTo12Hour(2)	== 2,			'convertTo12Hour(2) string');
		ok(Date.formatLogic.convertTo12Hour(3)	== 3,			'convertTo12Hour(3) string');
		ok(Date.formatLogic.convertTo12Hour(4)	== 4,			'convertTo12Hour(4) string');
		ok(Date.formatLogic.convertTo12Hour(5)	== 5,			'convertTo12Hour(5) string');
		ok(Date.formatLogic.convertTo12Hour(6)	== 6,			'convertTo12Hour(6) string');
		ok(Date.formatLogic.convertTo12Hour(7)	== 7,			'convertTo12Hour(7) string');
		ok(Date.formatLogic.convertTo12Hour(8)	== 8,			'convertTo12Hour(8) string');
		ok(Date.formatLogic.convertTo12Hour(9)	== 9,			'convertTo12Hour(9) string');
		ok(Date.formatLogic.convertTo12Hour(10)	== 10,			'convertTo12Hour(10) string');
		ok(Date.formatLogic.convertTo12Hour(11)	== 11,			'convertTo12Hour(11) string');
		ok(Date.formatLogic.convertTo12Hour(12)	== 12,			'convertTo12Hour(12) string');
		ok(Date.formatLogic.convertTo12Hour(13)	== 1,			'convertTo12Hour(13) string');
		ok(Date.formatLogic.convertTo12Hour(14)	== 2,			'convertTo12Hour(14) string');
		ok(Date.formatLogic.convertTo12Hour(15)	== 3,			'convertTo12Hour(15) string');
		ok(Date.formatLogic.convertTo12Hour(16)	== 4,			'convertTo12Hour(16) string');
		ok(Date.formatLogic.convertTo12Hour(17)	== 5,			'convertTo12Hour(17) string');
		ok(Date.formatLogic.convertTo12Hour(18)	== 6,			'convertTo12Hour(18) string');
		ok(Date.formatLogic.convertTo12Hour(19)	== 7,			'convertTo12Hour(19) string');
		ok(Date.formatLogic.convertTo12Hour(20)	== 8,			'convertTo12Hour(20) string');
		ok(Date.formatLogic.convertTo12Hour(21)	== 9,			'convertTo12Hour(21) string');
		ok(Date.formatLogic.convertTo12Hour(22)	== 10,			'convertTo12Hour(22) string');
		ok(Date.formatLogic.convertTo12Hour(23)	== 11,			'convertTo12Hour(23) string');
		ok(Date.formatLogic.convertTo12Hour(24)	== 12,			'convertTo12Hour(24) string');
	}
);
