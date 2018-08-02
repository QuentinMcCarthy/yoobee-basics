
//
// function loadData(key,query,fromDate,toDate,page){
// 	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// 		params = ["?"];
//
// 	if(query){
// 		params.push("q="+query+"&");
// 	}
// 	if(fromDate){
// 		fromDate = fromDate.split("-");
// 		fromDate = fromDate[0]+fromDate[1]+fromDate[2];
//
// 		params.push("begin_date="+fromDate+"&");
// 	}
// 	if(toDate){
// 		toDate = toDate.split("-");
// 		toDate = toDate[0]+toDate[1]+toDate[2];
//
// 		params.push("end_date="+toDate+"&");
// 	}
// 	if(page){
// 		params.push("page="+page+"&");
// 	}
//
// 	params.push("api-key="+key);
//
// 	for(var i = 0; i < params.length; i++){
// 		url+= params[i];
// 	}
//
// 	$.ajax({
// 		type: "GET",
// 		url: url,
// 		dataType: "json",
// 		success: function(data){
// 			console.log(data);
//
// 			var copyright = $("#copyright").text();
//
// 			if(!copyright){
// 				$("#copyright").text(data.copyright);
// 			}
//
// 			$("#articleData").html("");
//
// 			for(var i = 0; i < data.response.docs.length; i++){
// 				$("#articleData").append(
// 					$("<div class='article-"+i+"'>").append(
// 						$("<h3 class='article-title'>").append(
// 							$("<a href='"+data.response.docs[i].web_url+"'>").text(data.response.docs[i].headline.main)
// 						)
// 					).append(
// 						$("<h4 class='article-subtitle'>").text(data.response.docs[i].snippet)
// 					)
// 				);
// 			}
// 		},
// 		error: function(err){
// 			console.log("Error "+err.status);
// 			console.log(err);
// 		}
// 	});
// }
// (function(){
// 	$.ajax({
// 		type: "GET",
// 		url: "config.json",
// 		dataType: "json",
// 		success: function(data){
// 			loadData(data[0].api_key);
//
// 			$("#searchQueries").submit(function(){
// 				event.preventDefault();
//
// 				var query = $("input[name='searchQuery']").val()
// 					fromDate = $("input[name='fromDate']").val()
// 					toDate = $("input[name='toDate']").val()
// 					page = $("input[name='pageNum']").val()-1;
//
// 				loadData(data[0].api_key, query, fromDate, toDate, page);
// 			})
// 		},
// 		error: function(err){
// 			console.log("Error "+err.status);
// 			console.log(err);
// 		}
// 	});
// }());

(function(){
	$.ajax({
		type: "GET",
		url: "config.json",
		dataType: "json",
		success: function(data){
			loadData(data[0].api_key, "search", 10);

			$("#query").submit(function(){
				event.preventDefault();

				var query = $("input[name='searchQuery']").val();
					type = $("input[name='searchType']").val();
					maxResults = $("input[name='maxResults']").val();

				loadData(data[0].api_key, "search", maxResults, type, query);
			})
		},
		error: function(err){
			console.log("Error "+err.status);
			console.log(err);
		}
	});
}());

function loadData(key,call,maxResults,type,query){
	if(call){
		var url = "https://www.googleapis.com/youtube/v3/"+call;
			params = ["?part=snippet&"];

		if(maxResults){
			params.push("maxResults="+maxResults+"&");
		}
		if(type){
			params.push("type="+type+"&");
		}
		if(query){
			params.push("q="+query+"&");
		}

		params.push("key="+key);

		for(var i = 0; i < params.length; i++){
			url+= params[i];
		}

		console.log(url);

		$.ajax({
			type: "GET",
			url: url,
			dataType: "json",
			success: function(data){
				console.log(data);

				$("#responseData").html("")

				var items = data.items

				for(var i = 0; i < items.length; i++){
					var responseUrl
						snippet = items[i].snippet
						thumbnail = snippet.thumbnails.medium;

					if(items[i].id.kind == "youtube#video"){
						responseUrl = "https://www.youtube.com/watch?v="+items[i].id.videoId;
					}

					$("#responseData").append(
						$("<div class='response'>").append(
							$("<div class='response-left'>").append(
								$("<a>").attr({
									"href": responseUrl,
									"target": "_blank",
									"title": snippet.title
								}).append(
									$("<img>").attr({
										"src": thumbnail.url,
										"height": thumbnail.height,
										"width": thumbnail.width
									})
								)
							).append(
								$("<h3>").append(
									$("<a>").attr({
										"href": responseUrl,
										"target": "_blank",
										"title": snippet.title
									}).text(snippet.title)
								)
							).append(
								$("<h5>").text("By "+snippet.channelTitle)
							)
						).append(
							$("<div class='response-right'>").append(
								$("<p>").text(snippet.description)
							)
						)
					);
				}
			},
			error: function(err){
				console.log("Error "+err.status);
				console.log(err.responseText);
				console.log(err);
			}
		});
	} else{
		console.log("URL needs a call");
	}
}
