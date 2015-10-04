'use strict';

var ko = require('knockout');

function WebmailViewModel() {
    // Data
    var self = this;
    self.folders = ['One', 'Two', 'Three', 'Four'];
    self.chosenFolderId = ko.observable();

    // Behaviours
    self.goToFolder = function(folder) { self.chosenFolderId(folder); };
    self.ok = function() {
      console.log('OK!');
    }
};

ko.applyBindings(new WebmailViewModel());
