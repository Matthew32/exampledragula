


$( document ).ready(function() {
    $(".removeall").click(function () {
        $(this).parent().children('div').remove();
    });

});

var drake = dragula([document.getElementById("remove"),document.getElementById("copy-target"), document.getElementById("drag-elements-2"), document.getElementById("drag-elements-1")], {
    removeOnSpill: true,

    copy: function (el, source) {
        return source === document.getElementById("copy-target")
    },
    accepts: function (el, target) {
        return target !== document.getElementById("copy-target")
    },
    remove: function (el, source) {
        return source === document.getElementById("remove")
    }
});

drake.on('drop', function(el, target, source, sibling) {
    var elementId = el.id;

    $(".removeone").click(function () {

        $(this).parent().remove();
    });
});


