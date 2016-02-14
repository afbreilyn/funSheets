funSheets = angular.module('funSheets',[
])
.controller( 'mainController', ['$scope', function( $scope ) {
    $scope.test = "hello world"

    $scope.skills = [
      { name: 'Appraise',                                 untrained: 'Yes', key: 'Int',  value: 0, armor: false },
      { name: 'Balance',                                  untrained: 'Yes', key: 'Dex',  value: 0, armor: true },
      { name: 'Bluff',                                    untrained: 'Yes', key: 'Cha',  value: 0, armor: false },
      { name: 'Climb',                                    untrained: 'Yes', key: 'Str',  value: 0, armor: true },
      { name: 'Concentration',                            untrained: 'Yes', key: 'Con',  value: 0, armor: false },
      { name: 'Craft',                                    untrained: 'Yes', key: 'Int',  value: 0, armor: false },
      { name: 'Decipher Script',                          untrained: 'No',  key: 'Int',  value: 0, armor: false },
      { name: 'Diplomacy',                                untrained: 'Yes', key: 'Cha',  value: 0, armor: false },
      { name: 'Disable Device',                           untrained: 'No',  key: 'Int',  value: 0, armor: false },
      { name: 'Disguise',                                 untrained: 'Yes', key: 'Cha',  value: 0, armor: false },
      { name: 'Escape Artist',                            untrained: 'Yes', key: 'Dex',  value: 0, armor: true },
      { name: 'Forgery',                                  untrained: 'Yes', key: 'Int',  value: 0, armor: false },
      { name: 'Gather Information',                       untrained: 'Yes', key: 'Cha',  value: 0, armor: false },
      { name: 'Handle Animal',                            untrained: 'No',  key: 'Cha',  value: 0, armor: false },
      { name: 'Heal',                                     untrained: 'Yes', key: 'Win',  value: 0, armor: false },
      { name: 'Hide',                                     untrained: 'Yes', key: 'Dex',  value: 0, armor: true },
      { name: 'Intimidate',                               untrained: 'Yes', key: 'Cha',  value: 0, armor: false },
      { name: 'Jump',                                     untrained: 'Yes', key: 'Str',  value: 0, armor: true },
      { name: 'Knowledge (arcana)',                       untrained: 'No',  key: 'Int',  value: 0, armor: false },
      { name: 'Knowledge (architecture and engineering)', untrained: 'No',  key: 'Int',  value: 0, armor: false },
      { name: 'Knowledge (dungeoneering)',                untrained: 'No',  key: 'Int',  value: 0, armor: false },
      { name: 'Knowledge (geography)',                    untrained: 'No',  key: 'Int',  value: 0, armor: false },
      { name: 'Knowledge (history)',                      untrained: 'No',  key: 'Int',  value: 0, armor: false },
      { name: 'Knowledge (local)',                        untrained: 'No',  key: 'Int',  value: 0, armor: false },
      { name: 'Knowledge (nature)',                       untrained: 'No',  key: 'Int',  value: 0, armor: false },
      { name: 'Knowledge (nobility and royalty)',         untrained: 'No',  key: 'Int',  value: 0, armor: false },
      { name: 'Knowledge (religion)',                     untrained: 'No',  key: 'Int',  value: 0, armor: false },
      { name: 'Knowledge (the planes)',                   untrained: 'No',  key: 'Int',  value: 0, armor: false },
      { name: 'Listen',                                   untrained: 'Yes', key: 'Win',  value: 0, armor: false },
      { name: 'Move Silently',                            untrained: 'Yes', key: 'Dex',  value: 0, armor: true },
      { name: 'Open Lock',                                untrained: 'No',  key: 'Dex',  value: 0, armor: false },
      { name: 'Perform',                                  untrained: 'Yes', key: 'Cha',  value: 0, armor: false },
      { name: 'Profession',                               untrained: 'No',  key: 'Wis',  value: 0, armor: false },
      { name: 'Ride',                                     untrained: 'Yes', key: 'Dex',  value: 0, armor: false },
      { name: 'Search',                                   untrained: 'Yes', key: 'Int',  value: 0, armor: false },
      { name: 'Sense Motive',                             untrained: 'Yes', key: 'Wis',  value: 0, armor: false },
      { name: 'Sleight of Hand',                          untrained: 'No',  key: 'Dex',  value: 0, armor: true },
      { name: 'Speak Language',                           untrained: 'No',  key: 'None', value: 0, armor: false },
      { name: 'Spellcraft',                               untrained: 'No',  key: 'Int',  value: 0, armor: false },
      { name: 'Spot',                                     untrained: 'Yes', key: 'Wis',  value: 0, armor: false },
      { name: 'Survival',                                 untrained: 'Yes', key: 'Wis',  value: 0, armor: false },
      { name: 'Swim',                                     untrained: 'Yes', key: 'Str',  value: 0, armor: true },
      { name: 'Tumble',                                   untrained: 'No',  key: 'Dex',  value: 0, armor: true },
      { name: 'Use Magic Device',                         untrained: 'No',  key: 'Cha',  value: 0, armor: false },
      { name: 'Use Rope',                                 untrained: 'Yes', key: 'Dex',  value: 0, armor: false },


    ]

}]);