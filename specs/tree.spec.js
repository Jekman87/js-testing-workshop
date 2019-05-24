var Node = require('../src/Node');
var Tree = require('../src/Tree');

describe('Tree', function () {
    describe('#constructor', function () {
		var tree = new Tree();

		it('assigns null to this.root', function () {
			expect(tree.root).to.equal(null);
		});
	});

	describe('#insert', function () {
        var tree = new Tree();

        it('stores specified value in tree using key', function () {
			tree.insert(5, 55);

            expect(tree.root.key).to.equal(null);
            expect(tree.root.value).to.equal(55);
        });

        it('insert more nodes', function () {
            tree.insert(5, 55);
            tree.insert(3, 12);
            tree.insert(9, 44);

            expect(tree.root.key).to.equal(null);
            expect(tree.root.value).to.equal(55);
        });
    });

    describe('#delete', function () {
        var tree = new Tree();

        it('removes node from tree by provided key', function () {
            tree.insert(11, 55);
            tree.delete(11);

            expect(tree.root).to.equal(null);
        });
    });

    describe('#search', function () {
        var tree = new Tree();
        
        it('looking for stored data in tree using key', function () {
            tree.insert(6, 76);
            tree.insert(8, 14);
            tree.insert(2, 19);
            var res1 = tree.search(8);
            var res2 = tree.search(2);

            expect(res1).to.equal(14);
            expect(res2).to.equal(19);
        });
    });

    describe('#contains', function () {
        var tree = new Tree();
        
        it('returns whether tree contains such value or not', function () {
            tree.insert(5, 55);
            var res1 = tree.contains(55);
            var res2 = tree.contains(11);

            expect(res1).to.equal(true);
            expect(res2).to.equal(true);
        });
    });

});
