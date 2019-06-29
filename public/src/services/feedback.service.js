angular.module("App").factory("FeedbackService", $mdToast => {
  function showToast(message, colorText) {
    $mdToast.show({
      template:
        '<md-toast class="md-toast">' +
        '<div style="color: ' +
        colorText +
        '"><b>' +
        message +
        "</b></div>" +
        "</md-toast>",
      hideDelay: 4000,
      position: "top right"
    });
  }

  return { showToast };
});
