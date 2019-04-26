var expect = require('chai').expect;
var ShmotBot = require('../lib/ShmotBot.js');


describe('getSynonyms()', function() {
	it('we should have at least shmot', function() {
		var bot = new ShmotBot();
		expect(bot.getSynonyms()).to.include("shmot");
	});
	it('we should have at least shmotbot', function() {
		var bot = new ShmotBot();
		expect(bot.getSynonyms()).to.include("shmotbot");
	});
	it('we should have at least shmotty', function() {
		var bot = new ShmotBot();
		expect(bot.getSynonyms()).to.include("shmotty");
	});
});


describe('shouldReactTo()', function() {
	it('should react to shmot', function() {
		var bot = new ShmotBot();
		expect(bot.shouldReactTo("shmot")).to.be.true;
		expect(bot.shouldReactTo("SHMOT")).to.be.true;
	});
	it('should react to shmotbot', function() {
		var bot = new ShmotBot();
		expect(bot.shouldReactTo("shmotbot")).to.be.true;
		expect(bot.shouldReactTo("ShmotBot")).to.be.true;
	});
	it('should react to shmotty', function() {
		var bot = new ShmotBot();
		expect(bot.shouldReactTo("shmotty")).to.be.true;
		expect(bot.shouldReactTo("ShMotTy")).to.be.true;
	});
	it('should not react to these', function() {
		var bot = new ShmotBot();
		expect(bot.shouldReactTo("schmot")).to.be.false;
		expect(bot.shouldReactTo("bot")).to.be.false;
		expect(bot.shouldReactTo("blob")).to.be.false;
		expect(bot.shouldReactTo("mob")).to.be.false;
	});
});


describe('getReactionTo()', function() {
	var namePrefix = "shmotty ";
	
	it('test reaction', function() {
		var bot = new ShmotBot();
		expect(bot.getReactionTo(namePrefix + "Apple")).to.equal("Apple-Shmapple");
	});
	it('test reaction', function() {
		var bot = new ShmotBot();
		expect(bot.getReactionTo(namePrefix + "Banana")).to.equal("Banana-Shmanana");
	});
	it('test reaction', function() {
		var bot = new ShmotBot();
		expect(bot.getReactionTo(namePrefix + "clown")).to.equal("Clown-Shmown");
	});
	it('test reaction', function() {
		var bot = new ShmotBot();
		expect(bot.getReactionTo(namePrefix + "DOG")).to.equal("Dog-Shmog");
	});
	it('test reaction', function() {
		var bot = new ShmotBot();
		expect(bot.getReactionTo(namePrefix + "ear")).to.equal("Ear-Shmear");
	});
	it('test reaction', function() {
		var bot = new ShmotBot();
		expect(bot.getReactionTo(namePrefix + "a")).to.equal("A-Shma");
	});
	it('test reaction', function() {
		var bot = new ShmotBot();
		expect(bot.getReactionTo(namePrefix + "b")).to.equal("...");
	});
	it('test reaction', function() {
		var bot = new ShmotBot();
		expect(bot.getReactionTo(namePrefix)).to.equal("...");
	});
	it('test reaction', function() {
		var bot = new ShmotBot();
		expect(bot.getReactionTo(namePrefix + "a!")).to.equal("A-Shma");
	});
	it('test reaction', function() {
		var bot = new ShmotBot();
		expect(bot.getReactionTo(namePrefix + "b?")).to.equal("...");
	});
	it('test reaction', function() {
		var bot = new ShmotBot();
		expect(bot.getReactionTo(namePrefix + "c.")).to.equal("...");
	});
	it('test reaction', function() {
		var bot = new ShmotBot();
		expect(bot.getReactionTo(namePrefix + "d+")).to.equal("...");
	});
});


describe('shmofy()', function() {
	it('test reaction', function() {
		var bot = new ShmotBot();
		expect(bot.shmofy("Apple")).to.equal("Shmapple");
	});
	it('test reaction', function() {
		var bot = new ShmotBot();
		expect(bot.shmofy("Banana")).to.equal("Shmanana");
	});
	it('test reaction', function() {
		var bot = new ShmotBot();
		expect(bot.shmofy("clown")).to.equal("Shmown");
	});
	it('test reaction', function() {
		var bot = new ShmotBot();
		expect(bot.shmofy("DOG")).to.equal("Shmog");
	});
	it('test reaction', function() {
		var bot = new ShmotBot();
		expect(bot.shmofy("ear")).to.equal("Shmear");
	});
	
	// additional tests for all the edge cases
	
	it('test reaction', function() {
		var bot = new ShmotBot();
		expect(bot.shmofy("BCD")).to.equal("Bcd");
	});
	it('test reaction', function() {
		var bot = new ShmotBot();
		expect(bot.shmofy("A")).to.equal("Shma");
	});
	it('test reaction', function() {
		var bot = new ShmotBot();
		expect(bot.shmofy("B")).to.equal("B");
	});
	it('test reaction', function() {
		var bot = new ShmotBot();
		expect(bot.shmofy(".")).to.equal(".");
	});
});


describe('toFirstUpperCaseLetter()', function() {
	it('test result', function() {
		var bot = new ShmotBot();
		expect(bot.toFirstUpperCaseLetter("apple")).to.equal("Apple");
	});
	it('test result', function() {
		var bot = new ShmotBot();
		expect(bot.toFirstUpperCaseLetter("BANANA")).to.equal("Banana");
	});
	it('test result', function() {
		var bot = new ShmotBot();
		expect(bot.toFirstUpperCaseLetter("ClOwN")).to.equal("Clown");
	});
	it('test result', function() {
		var bot = new ShmotBot();
		expect(bot.toFirstUpperCaseLetter("D")).to.equal("D");
	});
});