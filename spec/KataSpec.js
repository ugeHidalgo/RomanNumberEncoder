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

    });
});