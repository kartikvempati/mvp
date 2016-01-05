angular.module('til.facts', [])

.controller('FactsController', function($scope, $location, Facts) {
	console.log("HELLO")
  $scope.facts = {};
  var body = JSON.parse(Facts.getFacts()).data.children.slice(1);
  $scope.facts.body = 'body';
  // $scope.facts.body = {
  //       "kind": "t3",
  //       "data": {
  //         "domain": "sagevfoods.com",
  //         "banned_by": null,
  //         "media_embed": {},
  //         "subreddit": "todayilearned",
  //         "selftext_html": null,
  //         "selftext": "",
  //         "likes": null,
  //         "suggested_sort": null,
  //         "user_reports": [],
  //         "secure_media": null,
  //         "link_flair_text": null,
  //         "id": "3zgrwr",
  //         "from_kind": null,
  //         "gilded": 0,
  //         "archived": false,
  //         "clicked": false,
  //         "report_reasons": null,
  //         "author": "Triscuits-",
  //         "media": null,
  //         "score": 6390,
  //         "approved_by": null,
  //         "over_18": false,
  //         "hidden": false,
  //         "preview": {
  //           "images": [
  //             {
  //               "source": {
  //                 "url": "https://i.redditmedia.com/5ospkImV5VVs7kOw5ONkMskyLpiUh515ROAOilcj93Y.jpg?s=ba1da4703b4faa992c0ba6d06c8e3f53",
  //                 "width": 296,
  //                 "height": 201
  //               },
  //               "resolutions": [
  //                 {
  //                   "url": "https://i.redditmedia.com/5ospkImV5VVs7kOw5ONkMskyLpiUh515ROAOilcj93Y.jpg?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=108&amp;s=d11b33075f3ac55472338e44bdc05582",
  //                   "width": 108,
  //                   "height": 73
  //                 },
  //                 {
  //                   "url": "https://i.redditmedia.com/5ospkImV5VVs7kOw5ONkMskyLpiUh515ROAOilcj93Y.jpg?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=216&amp;s=2b4bfff4772306f7077b86f501709fd9",
  //                   "width": 216,
  //                   "height": 146
  //                 }
  //               ],
  //               "variants": {},
  //               "id": "C1gne4tsUq77Mkc3P-EXxHEiCOkCcZ6b4XvGf46Mcy4"
  //             }
  //           ]
  //         },
  //         "num_comments": 792,
  //         "thumbnail": "http://b.thumbs.redditmedia.com/HvYaV8EHhCf-6XsknemoPtthMG0FnHxPD3JxCyXQATw.jpg",
  //         "subreddit_id": "t5_2qqjc",
  //         "hide_score": false,
  //         "edited": false,
  //         "link_flair_css_class": null,
  //         "author_flair_css_class": null,
  //         "downs": 0,
  //         "secure_media_embed": {},
  //         "saved": false,
  //         "removal_reason": null,
  //         "post_hint": "link",
  //         "stickied": false,
  //         "from": null,
  //         "is_self": false,
  //         "from_id": null,
  //         "permalink": "/r/todayilearned/comments/3zgrwr/til_rice_does_not_need_to_grow_in_water_but_since/",
  //         "locked": false,
  //         "name": "t3_3zgrwr",
  //         "created": 1451971879,
  //         "url": "http://www.sagevfoods.com/MainPages/Rice101/Production2.htm",
  //         "author_flair_text": null,
  //         "quarantine": false,
  //         "title": "TIL: Rice does not need to grow in water, but since it can survive it, is done so to control weeds and other pests- creating higher yields.",
  //         "created_utc": 1451943079,
  //         "distinguished": null,
  //         "mod_reports": [],
  //         "visited": false,
  //         "num_reports": null,
  //         "ups": 6390
  //       }
  //     }
});