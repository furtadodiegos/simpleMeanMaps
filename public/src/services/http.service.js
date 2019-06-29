angular.module("App").factory("HTTPService", ($http, API, FeedbackService) => {
  return { POST: body => $http
        .post(API, body)
        .then(res => {
          FeedbackService.showToast("customers successfully saved", "green");

          return res.data;
        })
        .catch(err =>
          FeedbackService.showToast(err.data, "red")
        ), GET: () => $http
        .get(API)
        .then(res => res.data)
        .catch(err =>
          FeedbackService.showToast(
            err.data || "Could not connect to API",
            "red"
          )
        ), DELETE: () => $http
        .delete(API)
        .then(() =>
          FeedbackService.showToast("Customers successfully removed", "green")
        )
        .catch(err => FeedbackService.showToast(err.data, "red")) };
});
