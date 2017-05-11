describe('Square', () =>  {
  describe('new Square()', () =>  {
    it('takes argument for a length of a side', () =>  {
      let square = new Square(5);

      expect(square).toBeDefined();
      expect(square.length).toEqual(5);
    });

    it('takes optional argument for the center point', () =>  {
      let square = new Square(5, 1, 2);

      expect(square).toBeDefined();
      expect(square.length).toEqual(5);
      expect(square.l).toEqual(1);
      expect(square.w).toEqual(2);
    });

    it('defaults (l,w) to (0,0) if not provided', () =>  {
      let square = new Square(5);

      expect(square).toBeDefined();
      expect(square.l).toBe(0);
      expect(square.w).toBe(0);
    });
  });

  describe('area()', () =>  {
    it('returns the area of the square', () =>  {
      let square = new Square(5);

      expect(square).toBeDefined();
      expect(square.area()).toEqual(25);
    });
  });

  describe('perimeter()', () =>  {
    it('returns the perimeter of the square', () =>  {
      let square = new Square(4, 5);

      expect(square).toBeDefined();
      expect(square.perimeter()).toEqual(16);
    });
  });

  describe('contains()', () =>  {
    it('returns true for a point given inside of the square\'s perimeter', () => {
      let square = new Square(6);

      expect(square).toBeDefined();
      expect(square.contains(6, 6)).toBe(true);
      expect(square.contains(3.5, 7)).toBe(true);
      expect(square.contains(3, 9)).toBe(true);
    });

    it('returns false for a point given outside of the square\'s perimeter', () => {
      let square = new Square(12);

      expect(square).toBeDefined();
      expect(square.contains(2, 12)).toBe(false);
      expect(square.contains(5, 12)).toBe(false);
      expect(square.contains(4, 7)).toBe(false);
      expect(square.contains(12, 20)).toBe(false);
    });
  });
});
