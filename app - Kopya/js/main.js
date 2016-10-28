String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

window.onload = function() {
    document.querySelector(".menu").addEventListener("click", toggleMenu);
    document.querySelector(".back").addEventListener("click", function() {
        var reader = document.getElementById("readerCarrier");
        //reader.style.display = "none";
        reader.className = "readerCarrierClosed";
    });
    document.getElementById("sideMenu").addEventListener("click", toggleMenu);
}

var menuStatus = 0;

function toggleMenu() {
    if (menuStatus === 0) {
        document.getElementById("sideMenu").className = "sideMenuOpen";
        menuStatus = 1;
    } else {
        document.getElementById("sideMenu").className = "";
        menuStatus = 0;

    }
}
if (!localStorage.doneArray) {
    localStorage.doneArray = JSON.stringify([]);
}

function syncDoneArray(index, value) {
    var doneArrayUpdated = JSON.parse(localStorage.doneArray);
    doneArrayUpdated[index] = value;
    localStorage.doneArray = JSON.stringify(doneArrayUpdated);
}


var uygulama = angular.module("ngUygulamam", []);
uygulama.controller("ngKontrol", function($scope, $http, $sce) {
    $scope.mainTab = "chapter";
    $scope.chapterList = [];
    $scope.currentContentObj = {};

    $http.get("content/data.json").then(function(resp) {
        $scope.appTitle = resp.data.app_title;
        $scope.courseTitle = resp.data.course_title;
        $scope.description = resp.data.description;
        $scope.creator = resp.data.creator;
        $scope.creatorEmail = resp.data.creator_email;

    });
    $http.get("content/content.md").then(function(respContent) {
        $scope.doneArray = JSON.parse(localStorage.doneArray);
        respContent.data.split("#").forEach(function(t) {
            if (t) {
                $scope.doneArray.push(false);
                var tSplitCache = t.split("//");
                var tSplitNCache = tSplitCache[1].split("\n");
                var readM = parseInt(tSplitNCache[0]);

                var chapterObj = {
                    title: tSplitCache[0],
                    read: readM,
                    content: tSplitNCache
                };
                $scope.chapterList.push(chapterObj);
            }
        });
    });

    $scope.openChapter = function(index) {
        var reader = document.getElementById("readerCarrier");
        //reader.style.display = "block";
        reader.className = "";
        $scope.currentChapter = index;
        $scope.currentContentObj = $scope.chapterList[index];
        var readerScroller = document.getElementById("readerContentScroller");
        readerScroller.scrollTop = 0;
    }
    $scope.completeCurrent = function() {
        var reader = document.getElementById("readerCarrier");
        reader.className = "readerCarrierClosed";
        $scope.toggleChapterComplete($scope.currentChapter, true);
    }

    $scope.toggleChapterComplete = function(index, status) {
        if (status == true) {
            $scope.doneArray[index] = true;
            syncDoneArray(index, true);
        } else {
            var currentStatus = $scope.doneArray[index];
            $scope.doneArray[index] = !currentStatus;
            syncDoneArray(index, !currentStatus);
        }
    }
    $scope.parse = function(contentLine) {
        if (contentLine.length < 4) {
            if (!isNaN(parseInt(contentLine))) {
                contentLine = "<span class='subText'>" + contentLine + " min read time</span>";
            }
        }
        contentLine = contentLine.replaceAll(/\*\*([^*]*)\*\*/g, "<b>$1</b>");
        contentLine = contentLine.replaceAll(/\*([^*]*)\*/g, "<em>$1</em>");
        if (contentLine.substr(0, 2) == "!>") {
            let explain = contentLine.split("-")[3];
            contentLine = "<img src='content/img/c" + parseInt($scope.currentChapter + 1) + "/" + contentLine.split("-")[1] + "." + contentLine.split("-")[2] + "'/>";
            if (explain) {
                contentLine += "<span class='imageTitle'>" + explain + "</span>";
            }
        }
        //Codes;
        contentLine = contentLine.replaceAll(/\`([^`]*)\`/g, "<pre>$1</pre>");
        contentLine = contentLine.replaceAll(/\&\&([^&]*)\&\&/g, "<h4>$1</h4>");

        return contentLine;
    }



    $scope.to_trusted = function(html_code) {
        return $sce.trustAsHtml(html_code);
    }
});
