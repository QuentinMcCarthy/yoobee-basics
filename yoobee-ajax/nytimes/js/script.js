(function(){
	$.ajax({
		type: "GET",
		url: "config.json",
		dataType: "json",
		success: function(data){
			loadData(data[0].api_key);

			$("#searchQueries").submit(function(){
				event.preventDefault();

				var query = $("input[name='searchQuery']").val()
					fromDate = $("input[name='fromDate']").val()
					toDate = $("input[name='toDate']").val()
					page = $("input[name='pageNum']").val()-1;

				loadData(data[0].api_key, query, fromDate, toDate, page);
			})
		},
		error: function(err){
			console.log("Error "+err.status);
			console.log(err);
		}
	});
}());

function loadData(key,query,fromDate,toDate,page){
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		params = ["?"];

	if(query){
		params.push("q="+query+"&");
	}
	if(fromDate){
		fromDate = fromDate.split("-");
		fromDate = fromDate[0]+fromDate[1]+fromDate[2];

		params.push("begin_date="+fromDate+"&");
	}
	if(toDate){
		toDate = toDate.split("-");
		toDate = toDate[0]+toDate[1]+toDate[2];

		params.push("end_date="+toDate+"&");
	}
	if(page){
		params.push("page="+page+"&");
	}

	params.push("api-key="+key);

	for(var i = 0; i < params.length; i++){
		url+= params[i];
	}

	$.ajax({
		type: "GET",
		url: url,
		dataType: "json",
		success: function(data){
			console.log(data);

			var copyright = $("#copyright").text();

			if(!copyright){
				$("#copyright").text(data.copyright);
			}

			$("#articleData").html("");

			for(var i = 0; i < data.response.docs.length; i++){
				$("#articleData").append(
					$("<div class='article-"+i+"'>").append(
						$("<h3 class='article-title'>").append(
							$("<a href='"+data.response.docs[i].web_url+"'>").text(data.response.docs[i].headline.main)
						)
					).append(
						$("<h4 class='article-subtitle'>").text(data.response.docs[i].snippet)
					)
				);
			}
		},
		error: function(err){
			console.log("Error "+err.status);
			console.log(err);
		}
	});
}
