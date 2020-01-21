/* ... */

/* Image Gallery List */
if (page.type === "images" && page.page === false) {
    function set_img(that) {
        var url = $(that).attr("src");
        var data_path = $(that).attr("data-path");
        $("#file_viewer img").attr("src", url);
        $("ul.files.list.num_0 > li").hide();
        $("ul.files.list.num_0").find("[data-path='" + data_path + "']").parent("li").show();
    }

    $(".files.list.num_1 img").click(function() {
        set_img(this);
    });
    set_img($(".files.list.num_1 img")[0]);
}
