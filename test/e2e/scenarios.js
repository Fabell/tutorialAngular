 it('should be possible to control phone order via the drop down select box',
        function() {
      //let's narrow the dataset to make the test assertions shorter
      input('query').enter('tablet');
 
      expect(repeater('.phones li', 'Phone List').column('phone.name')).
          toEqual(["Motorola XOOM\u2122 with Wi-Fi",
                   "MOTOROLA XOOM\u2122"]);
 
      select('orderProp').option('Alphabetical');
 
      expect(repeater('.phones li', 'Phone List').column('phone.name')).
          toEqual(["MOTOROLA XOOM\u2122",
                   "Motorola XOOM\u2122 with Wi-Fi"]);
    });