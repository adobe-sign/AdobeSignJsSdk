(function() {
    var e = 0;
    var t;
    var n = document.getElementById("source-code");
    $(".clearfix").css({'height':($(window).height())+'px'})

    if (n) {
        var i = config.linenums;
        if (i) {
            n = n.getElementsByTagName("ol")[0];
            t = Array.prototype.slice.apply(n.children);
            t = t.map(function(t) {
                e++;
                t.id = "line" + e
            })
        } else {
            n = n.getElementsByTagName("code")[0];
            t = n.innerHTML.split("\n");
            t = t.map(function(t) {
                e++;
                return '<span id="line' + e + '"></span>' + t
            });
            n.innerHTML = t.join("\n")
        }
    }
})();
$(function() {
    $('#search').on('keyup', function (e) {
        var value = $(this).val();
        var $el = $('#mainframe');

        if (value) {
            var regexp = new RegExp(value, 'i');
            $el.find('li, .itemMembers').hide();

            $el.find('.main').each(function (i, v) {
                var $item = $(v);

                if ($item.data('name') && regexp.test($item.data('name'))) {
                    $item.show();
                    $item.closest('.itemMembers').show();
                    $item.closest('.item').show();
                }
            });
        } else {
            $el.find('.item, .itemMembers').show();
        }

        $el.find('.list').scrollTop(0);
    });

    $(".applicationName").click(function(object) {
        $(this).parent().find(".application_list").toggle()
    })
    $(".api_list").click(function(object) {
        $(this).parent().find(".api").toggle()
    })
    $(".model_list").click(function(object) {
        $(this).parent().find(".model").toggle()
    })
    $(".agreement_models").click(function(object) {
        $(this).parent().find(".list_agreement_models").toggle()
    })
    $(".baseuri_models").click(function(object) {
        $(this).parent().find(".list_baseuri_models").toggle()
    })
    $(".group_models").click(function(object) {
        $(this).parent().find(".list_group_models").toggle()
    })
    $(".librarydocument_models").click(function(object) {
        $(this).parent().find(".list_librarydocument_models").toggle()
    })
    $(".megasign_models").click(function(object) {
        $(this).parent().find(".list_megasign_models").toggle()
    })
    $(".oauth_models").click(function(object) {
        $(this).parent().find(".list_oauth_models").toggle()
    })
    $(".reminder_models").click(function(object) {
        $(this).parent().find(".list_reminder_models").toggle()
    })
    $(".search_models").click(function(object) {
        $(this).parent().find(".list_search_models").toggle()
    })
    $(".transientdocuments_models").click(function(object) {
        $(this).parent().find(".list_transientdocuments_models").toggle()
    })
    $(".users_models").click(function(object) {
        $(this).parent().find(".list_users_models").toggle()
    })
    $(".views_models").click(function(object) {
        $(this).parent().find(".list_views_models").toggle()
    })
    $(".widgets_models").click(function(object) {
        $(this).parent().find(".list_widgets_models").toggle()
    })
    $(".workflow_models").click(function(object) {
        $(this).parent().find(".list_workflow_models").toggle()
    })
    var $title = $(".title").click(function(object) {
        if($(this).text().indexOf("AgreementsApi") !== -1) {
            $(this).parent().find(".AgreementsApi").toggle();
            var frame = document.getElementById("mainframe");
            var url="module-"+$(this).text().trim()+".html";
            frame.src=url;
        }

        else if($(this).text().indexOf("BaseUrisApi")!== -1) {
            $(this).parent().find(".BaseUrisApi").toggle();
            var frame = document.getElementById("mainframe");
            var url="module-"+$(this).text().trim()+".html";
            frame.src=url;
        }
        else if($(this).text().indexOf("GroupsApi")!== -1) {
            $(this).parent().find(".GroupsApi").toggle();
            var frame = document.getElementById("mainframe");
            var url="module-"+$(this).text().trim()+".html";
            frame.src=url;
        }
        else if($(this).text().indexOf("LibraryDocumentsApi")!== -1) {
            $(this).parent().find(".LibraryDocumentsApi").toggle()
            var frame = document.getElementById("mainframe");
            var url="module-"+$(this).text().trim()+".html";
            frame.src=url;
        }
        else if($(this).text().indexOf("MegaSignsApi")!== -1) {
            $(this).parent().find(".MegaSignsApi").toggle()
            var frame = document.getElementById("mainframe");
            var url="module-"+$(this).text().trim()+".html";
            frame.src=url;
        }
        else if($(this).text().indexOf("OAuthApi")!== -1) {
            $(this).parent().find(".OAuthApi").toggle()
            var frame = document.getElementById("mainframe");
            var url="module-"+$(this).text().trim()+".html";
            frame.src=url;
        }
        else if($(this).text().indexOf("RemindersApi")!== -1) {
            $(this).parent().find(".RemindersApi").toggle()
            var frame = document.getElementById("mainframe");
            var url="module-"+$(this).text().trim()+".html";
            frame.src=url;
        }
        else if($(this).text().indexOf("SearchApi")!== -1) {
            $(this).parent().find(".SearchApi").toggle()
            var frame = document.getElementById("mainframe");
            var url="module-"+$(this).text().trim()+".html";
            frame.src=url;
        }
        else if($(this).text().indexOf("TransientDocumentsApi")!== -1) {
            $(this).parent().find(".TransientDocumentsApi").toggle()
            var frame = document.getElementById("mainframe");
            var url="module-"+$(this).text().trim()+".html";
            frame.src=url;
        }
        else if($(this).text().indexOf("UsersApi")!== -1) {
            $(this).parent().find(".UsersApi").toggle()
            var frame = document.getElementById("mainframe");
            var url="module-"+$(this).text().trim()+".html";
            frame.src=url;
        }
        else if($(this).text().indexOf("ViewsApi")!== -1) {
            $(this).parent().find(".ViewsApi").toggle()
            var frame = document.getElementById("mainframe");
            var url="module-"+$(this).text().trim()+".html";
            frame.src=url;
        }
        else if($(this).text().indexOf("WidgetsApi")!== -1) {
            $(this).parent().find(".WidgetsApi").toggle()
            var frame = document.getElementById("mainframe");
            var url="module-"+$(this).text().trim()+".html";
            frame.src=url;
        } 
        else if($(this).text().indexOf("WorkflowsApi")!== -1) {
            $(this).parent().find(".WorkflowsApi").toggle()
            var frame = document.getElementById("mainframe");
            var url="module-"+$(this).text().trim()+".html";
            frame.src=url;
        }
        else {
            var method=$(this).text().trim();
            var itemMembers = method+"itemMembers";
            $(this).parent().find("."+method).toggle();
            $(this).parent().find("."+itemMembers).toggle();
            var className = $(this).parent().attr('class');
            var url="";
            if(className.indexOf("agreement") !== -1) {
                url="module-model_agreements_"+method+".html";
            }
            else if(className.indexOf("baseuri") !== -1) {
                url="module-model_baseUris_"+method+".html";
            }
            else if(className.indexOf("groups") !== -1) {
                url="module-model_groups_"+method+".html";
            }
            else if(className.indexOf("librarydocuments") !== -1) {
                url="module-model_libraryDocuments_"+method+".html";
            }
            else if(className.indexOf("megasign") !== -1) {
                url="module-model_megaSigns_"+method+".html";
            }
            else if(className.indexOf("oauth") !== -1) {
                url="module-model_oAuth_"+method+".html";
            }
            else if(className.indexOf("reminder") !== -1) {
                url="module-model_reminders_"+method+".html";
            }
            else if(className.indexOf("search") !== -1) {
                url="module-model_search_"+method+".html";
            }
            else if(className.indexOf("tarnsientdocuments") !== -1) {
                url="module-model_transientDocuments_"+method+".html";
            }
            else if(className.indexOf("users") !== -1) {
                url="module-model_users_"+method+".html";
            }
            else if(className.indexOf("views") !== -1) {
                url="module-model_views_"+method+".html";
            }
            else if(className.indexOf("widgets") !== -1) {
                url="module-model_widgets_"+method+".html";
            }
            else if(className.indexOf("workflow") !== -1) {
                url="module-model_workflows_"+method+".html";
            }


            var frame = document.getElementById("mainframe");
            frame.src=url;
        } 
 

    })
    var $li = $("li").click(function(event) {

        var data = $(event.currentTarget).data('name');
        if(data.indexOf('model') === -1) {
            var splitData = data.split(":");
            var urlFirstPart = (splitData[1].split("#"))[0];
            var urlSecondPart = (splitData[1].split("#"))[1];
            var url = splitData[0]+"-"+urlFirstPart+".html#"+urlSecondPart;
            var frame = document.getElementById("mainframe");
            frame.src=url;
        }
        else {
            var splitData = data.split(":");
            if(splitData[1].indexOf(".") === -1) {
                var urlParts = splitData[1].split("/");
                var urlFirstPart =urlParts[0]+"_"+urlParts[1]+"_"+(urlParts[2].split("#"))[0];
                var urlSecondPart = (urlParts[2].split("#"))[1];
                var url = splitData[0]+"-"+urlFirstPart+".html#"+urlSecondPart;
                var frame = document.getElementById("mainframe");
                frame.src=url;
            }
            else {
                var urlParts = splitData[1].split("/");
                var urlFirstPart =urlParts[0]+"_"+urlParts[1]+"_"+(urlParts[2].split("."))[0];
                var url = splitData[0]+"-"+urlFirstPart+".html";
                var frame = document.getElementById("mainframe");
                frame.src=url;                

            }
        }
        $li.removeClass('selected');
        $(this).addClass('selected');
    })

    var e = $(".page-title").data("filename").replace(/\.[a-z]+$/, "");
    var t = $('.navigation .item[data-name*="' + e + '"]:eq(0)');
    if (t.length) {
        t.remove().prependTo(".navigation .list").show().find(".itemMembers").show()
    }
    var n = function() {
        var e = $(window).height();
        var t = $(".navigation");
        t.height(e).find(".list").height(e - 133)
    };
    $(window).on("resize", n);
    n();
    if (config.disqus) {
        $(window).on("load", function() {
            var e = config.disqus;
            var t = document.createElement("script");
            t.type = "text/javascript";
            t.async = true;
            t.src = "http://" + e + ".disqus.com/embed.js";
            (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(t);
            var n = document.createElement("script");
            n.async = true;
            n.type = "text/javascript";
            n.src = "http://" + e + ".disqus.com/count.js";
            document.getElementsByTagName("BODY")[0].appendChild(n)
        })
        
    }
});