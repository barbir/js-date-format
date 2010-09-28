test
(
	'internal methods - date parseFormatted(value, format) - static method',
	function()
	{
		testDate = new Date(2001, 11, 31);
		ok(Date.parseFormatted('31-12-01',		'd-M-yy').toString()		== testDate.toString(),				'parseFormatted(value, \'d-M-yy\') date');
		ok(Date.parseFormatted('31-12-2001',	'dd-MM-yyyy').toString()	== testDate,						'parseFormatted(value, \'dd-MM-yyyy\') date');
		ok(Date.parseFormatted('12-31-01',		'M-d-yy').toString()		== testDate,						'parseFormatted(value, \'M-d-yy\') date');
		ok(Date.parseFormatted('12-31-2001',	'MM-dd-yyyy').toString()	== testDate,						'parseFormatted(value, \'MM-dd-yyyy\') date');
		ok(Date.parseFormatted('01-12-31',		'yy-M-d').toString()		== testDate,						'parseFormatted(value, \'yy-M-d\') date');
		ok(Date.parseFormatted('2001-12-31',	'yyyy-MM-dd').toString()	== testDate,						'parseFormatted(value, \'yyyy-MM-dd\') date');

		testDate = new Date(2011, 0, 3);
		ok(Date.parseFormatted('3-1-11',		'd-M-yy').toString()		== testDate.toString(),				'parseFormatted(value, \'d-M-yy\') date');
		ok(Date.parseFormatted('03-01-2011',	'dd-MM-yyyy').toString()	== testDate,						'parseFormatted(value, \'dd-MM-yyyy\') date');
		ok(Date.parseFormatted('1-3-11',		'M-d-yy').toString()		== testDate,						'parseFormatted(value, \'M-d-yy\') date');
		ok(Date.parseFormatted('01-03-2011',	'MM-dd-yyyy').toString()	== testDate,						'parseFormatted(value, \'MM-dd-yyyy\') date');
		ok(Date.parseFormatted('11-1-3',		'yy-M-d').toString()		== testDate,						'parseFormatted(value, \'yy-M-d\') date');
		ok(Date.parseFormatted('2011-01-03',	'yyyy-MM-dd').toString()	== testDate,						'parseFormatted(value, \'yyyy-MM-dd\') date');

		testDate = new Date(2001, 11, 31, 2, 3, 4, 5);
		ok(Date.parseFormatted('31-12-2001 2:3:4.5',			'dd-MM-yyyy H:m:s.z').toString()		== testDate.toString(),		'parseFormatted(value, \'dd-MM-yyyy H:m:s.z\') string');
		ok(Date.parseFormatted('31-12-2001 02:03:04.005',		'dd-MM-yyyy HH:mm:ss.zzz').toString()	== testDate.toString(),		'parseFormatted(value, \'dd-MM-yyyy HH:mm:ss.zzz\') string');

		testDate = new Date(2001, 11, 31, 0, 3, 4, 5);
		ok(Date.parseFormatted('31-12-2001 12:03:04.005 AM',	'dd-MM-yyyy HH:mm:ss.zzz A').toString()		== testDate.toString(),		'parseFormatted(value, \'dd-MM-yyyy HH:mm:ss.zzz A\') string');
		ok(Date.parseFormatted('31-12-2001 12:03:04.005 am',	'dd-MM-yyyy HH:mm:ss.zzz a').toString()		== testDate.toString(),		'parseFormatted(value, \'dd-MM-yyyy HH:mm:ss.zzz a\') string');
		ok(Date.parseFormatted('31-12-2001 12:03:04.005 AM',	'dd-MM-yyyy HH:mm:ss.zzz AP').toString()	== testDate.toString(),		'parseFormatted(value, \'dd-MM-yyyy HH:mm:ss.zzz AP\') string');
		ok(Date.parseFormatted('31-12-2001 12:03:04.005 am',	'dd-MM-yyyy HH:mm:ss.zzz ap').toString()	== testDate.toString(),		'parseFormatted(value, \'dd-MM-yyyy HH:mm:ss.zzz ap\') string');

		testDate = new Date(2001, 11, 31, 0, 3, 4, 5);
		ok(Date.parseFormatted('31-12-2001 12:03:04.005 AM',	'dd-MM-yyyy HH:mm:ss.zzz A').toString()		== testDate.toString(),		'parseFormatted(value, \'dd-MM-yyyy HH:mm:ss.zzz A\') string');
		ok(Date.parseFormatted('31-12-2001 12:03:04.005 am',	'dd-MM-yyyy HH:mm:ss.zzz a').toString()		== testDate.toString(),		'parseFormatted(value, \'dd-MM-yyyy HH:mm:ss.zzz a\') string');
		ok(Date.parseFormatted('31-12-2001 12:03:04.005 AM',	'dd-MM-yyyy HH:mm:ss.zzz AP').toString()	== testDate.toString(),		'parseFormatted(value, \'dd-MM-yyyy HH:mm:ss.zzz AP\') string');
		ok(Date.parseFormatted('31-12-2001 12:03:04.005 am',	'dd-MM-yyyy HH:mm:ss.zzz ap').toString()	== testDate.toString(),		'parseFormatted(value, \'dd-MM-yyyy HH:mm:ss.zzz ap\') string');

		testDate = new Date(2001, 11, 31, 12, 3, 4, 5);
		ok(Date.parseFormatted('31-12-2001 12:03:04.005 PM',	'dd-MM-yyyy HH:mm:ss.zzz A').toString()		== testDate.toString(),		'parseFormatted(value, \'dd-MM-yyyy HH:mm:ss.zzz A\') string');
		ok(Date.parseFormatted('31-12-2001 12:03:04.005 pm',	'dd-MM-yyyy HH:mm:ss.zzz a').toString()		== testDate.toString(),		'parseFormatted(value, \'dd-MM-yyyy HH:mm:ss.zzz a\') string');
		ok(Date.parseFormatted('31-12-2001 12:03:04.005 PM',	'dd-MM-yyyy HH:mm:ss.zzz AP').toString()	== testDate.toString(),		'parseFormatted(value, \'dd-MM-yyyy HH:mm:ss.zzz AP\') string');
		ok(Date.parseFormatted('31-12-2001 12:03:04.005 pm',	'dd-MM-yyyy HH:mm:ss.zzz ap').toString()	== testDate.toString(),		'parseFormatted(value, \'dd-MM-yyyy HH:mm:ss.zzz ap\') string');

		testDate = new Date(2001, 11, 31, 12, 3, 4, 5);
		ok(Date.parseFormatted('31-12-2001 12:03:04.005 PM',	'dd-MM-yyyy HH:mm:ss.zzz A').toString()		== testDate.toString(),		'parseFormatted(value, \'dd-MM-yyyy HH:mm:ss.zzz A\') string');
		ok(Date.parseFormatted('31-12-2001 12:03:04.005 pm',	'dd-MM-yyyy HH:mm:ss.zzz a').toString()		== testDate.toString(),		'parseFormatted(value, \'dd-MM-yyyy HH:mm:ss.zzz a\') string');
		ok(Date.parseFormatted('31-12-2001 12:03:04.005 PM',	'dd-MM-yyyy HH:mm:ss.zzz AP').toString()	== testDate.toString(),		'parseFormatted(value, \'dd-MM-yyyy HH:mm:ss.zzz AP\') string');
		ok(Date.parseFormatted('31-12-2001 12:03:04.005 pm',	'dd-MM-yyyy HH:mm:ss.zzz ap').toString()	== testDate.toString(),		'parseFormatted(value, \'dd-MM-yyyy HH:mm:ss.zzz ap\') string');
	}
);

test
(
	'internal methods - date fromFormattedString(value, format) - member method',
	function()
	{
		testDate = new Date(2001, 11, 31);
		formatDate = new Date();
		formatDate.fromFormattedString('31-12-01', 'd-M-yy');
		ok(formatDate.toString() == testDate.toString(), 'fromFormattedString(value, \'d-M-yy\') date');

		testDate = new Date(2011, 0, 3);
		formatDate = new Date();
		formatDate.fromFormattedString('2011-01-03', 'yyyy-MM-dd');
		ok(formatDate.toString() == testDate.toString(), 'fromFormattedString(value, \'yyyy-MM-dd\') date');

		testDate = new Date(2001, 11, 31, 2, 3, 4, 5);
		formatDate = new Date();
		formatDate.fromFormattedString('31-12-2001 2:3:4.5', 'dd-MM-yyyy H:m:s.z');
		ok(formatDate.toString() == testDate.toString(), 'fromFormattedString(value, \'dd-MM-yyyy H:m:s.z\') date');

		testDate = new Date(2001, 11, 31, 2, 3, 4, 5);
		formatDate = new Date();
		formatDate.fromFormattedString('31-12-2001 02:03:04.005', 'dd-MM-yyyy HH:mm:ss.zzz');
		ok(formatDate.toString() == testDate.toString(), 'fromFormattedString(value, \'dd-MM-yyyy HH:mm:ss.zzz\') date');

		testDate = new Date(2001, 11, 31, 0, 3, 4, 5);
		formatDate = new Date();
		formatDate.fromFormattedString('31-12-2001 12:03:04.005 AM', 'dd-MM-yyyy HH:mm:ss.zzz A');
		ok(formatDate.toString() == testDate.toString(), 'fromFormattedString(value, \'dd-MM-yyyy HH:mm:ss.zzz A\') date');

		testDate = new Date(2001, 11, 31, 12, 3, 4, 5);
		formatDate = new Date();
		formatDate.fromFormattedString('31-12-2001 12:03:04.005 PM', 'dd-MM-yyyy HH:mm:ss.zzz A');
		ok(formatDate.toString() == testDate.toString(), 'fromFormattedString(value, \'dd-MM-yyyy HH:mm:ss.zzz A\') date');
	}
);

test
(
	'internal methods - string parseLogic.unpad(value)',
	function()
	{
		ok(Date.parseLogic.unpad("123")			== '123',			'unpad("123")');
		ok(Date.parseLogic.unpad("0123")		== '123',			'unpad("0123")');
		ok(Date.parseLogic.unpad("00123")		== '123',			'unpad("00123")');
		ok(Date.parseLogic.unpad("000123")		== '123',			'unpad("000123")');
		ok(Date.parseLogic.unpad("0000123")		== '123',			'unpad("0000123")');
		ok(Date.parseLogic.unpad("1")			== '1',				'unpad("1")');
		ok(Date.parseLogic.unpad("01")			== '1',				'unpad("01")');
		ok(Date.parseLogic.unpad("001")			== '1',				'unpad("001")');
		ok(Date.parseLogic.unpad("0001")		== '1',				'unpad("0001")');
		ok(Date.parseLogic.unpad("00001")		== '1',				'unpad("00001")');
		ok(Date.parseLogic.unpad("0")			== '0',				'unpad("0")');
		ok(Date.parseLogic.unpad("00")			== '0',				'unpad("00")');
		ok(Date.parseLogic.unpad("000")			== '0',				'unpad("000")');
		ok(Date.parseLogic.unpad("0000")		== '0',				'unpad("0000")');
		ok(Date.parseLogic.unpad("00000")		== '0',				'unpad("00000")');
	}
);

test
(
	'internal methods - int parseLogic.parseInt(value)',
	function()
	{
		ok(Date.parseLogic.parseInt("123")			== 123,			'parseInt("123")');
		ok(Date.parseLogic.parseInt("0123")			== 123,			'parseInt("0123")');
		ok(Date.parseLogic.parseInt("00123")		== 123,			'parseInt("00123")');
		ok(Date.parseLogic.parseInt("000123")		== 123,			'parseInt("000123")');
		ok(Date.parseLogic.parseInt("0000123")		== 123,			'parseInt("0000123")');
		ok(Date.parseLogic.parseInt("1")			== 1,			'parseInt("1")');
		ok(Date.parseLogic.parseInt("01")			== 1,			'parseInt("01")');
		ok(Date.parseLogic.parseInt("001")			== 1,			'parseInt("001")');
		ok(Date.parseLogic.parseInt("0001")			== 1,			'parseInt("0001")');
		ok(Date.parseLogic.parseInt("00001")		== 1,			'parseInt("00001")');
		ok(Date.parseLogic.parseInt("0")			== 0,			'parseInt("0")');
		ok(Date.parseLogic.parseInt("00")			== 0,			'parseInt("00")');
		ok(Date.parseLogic.parseInt("000")			== 0,			'parseInt("000")');
		ok(Date.parseLogic.parseInt("0000")			== 0,			'parseInt("0000")');
		ok(Date.parseLogic.parseInt("00000")		== 0,			'parseInt("00000")');
	}
);
