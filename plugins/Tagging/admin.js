jQuery(document).ready(function($) {
   
   $('a.TagName').popup({
      onUnload: function() {
         $('#Content').load(gdn.combinePaths(gdn.definition('WebRoot', ''), 'index.php?p=/dashboard/settings/tagging&DeliveryType=VIEW'));
      }
   });
   
   // Confirm deletes before performing them
   $('a.Delete').popup({
      confirm: true,
      followConfirm: false,
      afterConfirm: function(json, sender) {
         $('#Content:first').load(gdn.combinePaths(gdn.definition('WebRoot', ''), 'index.php?p=/dashboard/settings/tagging&DeliveryType=VIEW'));
      }
   });

});