function SorterCard(data) {
  var that = this;
  that.trip = [];
  that.cards = [];
  that.hashTable = {};

  if (data) {
	that.importCards(data);
  }
  return that;
}

SorterCard.prototype.buildHashTable = function() {
  var that = this;
  that.cards.forEach(function(card, i) {
	that.hashTable[card.origin.name] = i;
  });
};