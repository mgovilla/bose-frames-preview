var Bose=Bose||{};Bose.BackToTopButton=function(){function a(a){Gridle.isActive("small")&&(b(),i>=h&&(c(),$jq(".bose-backToTop__waypoint").waypoint({handler:function a(b){f.is(":hidden")&&"up"===b&&(f.fadeIn(),setTimeout(function(){f.fadeOut()},m))}}),a||f.on("click",e)))}function b(){f=$jq(".bose-backToTop__button"),g=$jq(window).height(),h=2*g,i=$jq(document).height(),j=i/g,k=1,l=h}function c(){for(;k<=j&&l<=i;)$jq("body").append('<div class="bose-backToTop__waypoint" style="top: '+l+'px">waypoint'+k+"</div>"),k++,l+=g}function d(){Bose.BackToTopButton.init(!0)}function e(a){a.preventDefault(),f.fadeOut(),$jq("html, body").animate({scrollTop:0},100)}var f,g,h,i,j,k,l,m=2500;return{init:a,reCalculate:d}}();
$jq(document).ready(function(){Bose.BackToTopButton.init()});