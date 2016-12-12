describe('Kata', function() {    
    beforeEach(function() { 
    });

    it('should be able to test', function() {
      expect(true).toBeTruthy();
    });

    describe ('numbers between 1 and 9',function () {

        it('should convert 1', function() {
          expect(solution(1)).toBe('I','1 should be I');
        });

        it('should convert 2', function() {
          expect(solution(2)).toBe('II','2 should be II');
        });

        it('should convert 3', function() {
          expect(solution(3)).toBe('III','2 should be III');
        });

        it('should convert 4', function() {
          expect(solution(4)).toBe('IV','4 should be IV');
        });

        it('should convert 5', function() {
          expect(solution(5)).toBe('V','5 should be V');
        });

        it('should convert 6', function() {
          expect(solution(6)).toBe('VI','6 should be VI');
        });

        it('should convert 7', function() {
          expect(solution(7)).toBe('VII','7 should be VII');
        });

        it('should convert 8', function() {
          expect(solution(8)).toBe('VIII','8 should be VIII');
        });

        it('should convert 9', function() {
          expect(solution(9)).toBe('IX','9 should be IX');
        });
    });

    describe ('for two digits number',function () {
        it('should convert 10', function() {
          expect(solution(10)).toBe('X','10 should be X');
        });        

        it('should convert 13', function() {
          expect(solution(13)).toBe('XIII','13 should be XIII');
        });

        it('should convert 14', function() {
          expect(solution(14)).toBe('XIV','14 should be XIV');
        });

        it('should convert 15', function() {
          expect(solution(15)).toBe('XV','15 should be XV');
        });        

        it('should convert 18', function() {
          expect(solution(18)).toBe('XVIII','18 should be XVIII');
        });

        it('should convert 19', function() {
          expect(solution(19)).toBe('XIX','19 should be XIX');
        });

        it('should convert 20', function() {
          expect(solution(20)).toBe('XX','20 should be XX');
        });

        it('should convert 23', function() {
          expect(solution(23)).toBe('XXIII','23 should be XXIII');
        });

        it('should convert 24', function() {
          expect(solution(24)).toBe('XXIV','24 should be XXIV');
        });

        it('should convert 25', function() {
          expect(solution(25)).toBe('XXV','25 should be XXV');
        });

        it('should convert 28', function() {
          expect(solution(28)).toBe('XXVIII','28 should be XXVIII');
        });

        it('should convert 29', function() {
          expect(solution(29)).toBe('XXIX','29 should be XXIX');
        });

        it('should convert 30', function() {
          expect(solution(30)).toBe('XXX','30 should be XXX');
        });

        it('should convert 40', function() {
          expect(solution(40)).toBe('XL','40 should be XL');
        });

        it('should convert 43', function() {
          expect(solution(43)).toBe('XLIII','43 should be XLIII');
        });

        it('should convert 44', function() {
          expect(solution(44)).toBe('XLIV','44 should be XLIV');
        });

        it('should convert 45', function() {
          expect(solution(45)).toBe('XLV','45 should be XLV');
        });

        it('should convert 46', function() {
          expect(solution(46)).toBe('XLVI','46 should be XLVI');
        });

        it('should convert 49', function() {
          expect(solution(49)).toBe('XLIX','49 should be XLIX');
        });

        it('should convert 50', function() {
          expect(solution(50)).toBe('L','50 should be L');
        });
        
        it('should convert 55', function() {
          expect(solution(55)).toBe('LV','55 should be LV');
        });

        it('should convert 59', function() {
          expect(solution(59)).toBe('LIX','55 should be LIX');
        });

        it('should convert 60', function() {
          expect(solution(60)).toBe('LX','60 should be LX');
        });

        it('should convert 65', function() {
          expect(solution(65)).toBe('LXV','65 should be LXV');
        });

        it('should convert 69', function() {
          expect(solution(69)).toBe('LXIX','69 should be LXIX');
        });

        it('should convert 80', function() {
          expect(solution(80)).toBe('LXXX','80 should be LXXX');
        });

        it('should convert 89', function() {
          expect(solution(89)).toBe('LXXXIX','89 should be LXXXIX');
        });

        it('should convert 90', function() {
          expect(solution(90)).toBe('XC','90 should be XC');
        });

        it('should convert 94', function() {
          expect(solution(94)).toBe('XCIV','94 should be XCIV');
        });

        it('should convert 99', function() {
          expect(solution(99)).toBe('XCIX','99 should be XCIX');
        });
    });

    describe ('for three digits number',function () {
        it('should convert 100', function() {
          expect(solution(100)).toBe('C','100 should be C');
        });

        it('should convert 300', function() {
          expect(solution(300)).toBe('CCC','200 should be CCC');
        });

        it('should convert 399', function() {
          expect(solution(399)).toBe('CCCXCIX','399 should be CCCXCIX');
        });

        it('should convert 400', function() {
          expect(solution(400)).toBe('CD','400 should be CD');
        });

        it('should convert 499', function() {
          expect(solution(499)).toBe('CDXCIX','499 should be CDXCIX');
        });

        it('should convert 500', function() {
          expect(solution(500)).toBe('D','500 should be D');
        });

        it('should convert 800', function() {
          expect(solution(800)).toBe('DCCC','800 should be DCC');
        });

        it('should convert 899', function() {
          expect(solution(899)).toBe('DCCCXCIX','899 should be DCCXCIX');
        });

        it('should convert 900', function() {
          expect(solution(900)).toBe('CM','900 should be CM');
        });

        it('should convert 999', function() {
          expect(solution(999)).toBe('CMXCIX','999 should be CMXCIX');
        });
    });

    describe ('for four digits number',function () {
        it('should convert 1000', function() {
          expect(solution('1000')).toBe('M','1000 should be M');
        });

        it('should convert 1666', function() {
          expect(solution('1666')).toBe('MDCLXVI','1666 should be MDCLXVI');
        });
    
        it('should convert 1999', function() {
          expect(solution('1999')).toBe('MCMXCIX','1999 should be MCMXCIX');
        });
    });
});