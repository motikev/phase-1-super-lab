class Tree {
    constructor(species) {
      this.species = species;
    }
  
    static definition() {
      return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
    }
  }
  
  class Deciduous extends Tree {
    constructor(species, name) {
      super(species);
      this.name = name;
    }
  
    static definition() {
      return super.definition() + " Deciduous trees shed their leaves annually.";
    }
  }
  
  class Evergreen extends Tree {
    constructor(species, name) {
      super(species);
      this.name = name;
    }
  
    static definition() {
      return super.definition() + " Evergreens keep their leaves all year round.";
    }
  }
  
  let tree;
  let oak;
  let fir;
  
  describe("Tree", () => {
    beforeEach(() => {
      tree = new Tree("Maple");
    });
  
    it("initializes an instance with one parameter and assigns it to `species`", () => {
      expect(tree.species).to.eql("Maple");
    });
  
    it("has a static method `definition` that returns a sentence on trees", () => {
      expect(Tree.definition()).to.eql(
        "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves."
      );
    });
  });
  
  describe("Deciduous", () => {
    beforeEach(() => {
      oak = new Deciduous("Oak", "Professor");
    });
  
    it("initializes with two parameters, species and name, and uses `super` to set `species`", () => {
      expect(oak.species).to.eql("Oak");
      expect(oak.name).to.eql("Professor");
    });
  
    it("has a static method `definition` that uses `super.definition` and expands on it", () => {
      expect(Deciduous.definition()).to.eql(
        "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Deciduous trees shed their leaves annually."
      );
    });
  });
  
  describe("Evergreen", () => {
    beforeEach(() => {
      fir = new Evergreen("Fir", "Douglas");
    });
  
    it("initializes with two parameters, species and name, and uses `super` to set `species`", () => {
      expect(fir.species).to.eql("Fir");
      expect(fir.name).to.eql("Douglas");
    });
  
    it("has a static method `definition` that uses `super.definition` and expands on it", () => {
      expect(Evergreen.definition()).to.eql(
        "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Evergreens keep their leaves all year round."
      );
    });
  });