function load_header() {
    $("#header").load("/template/v-header.html", function () {
        //alert("header")
    });
}

function load_footer() {
    $("#footer").load("/template/v-footer.html", function () {
        //alert("footer")
    });
}

function load_model() {
    async function ff(f, e) {
        return c = await crypto.subtle.digest([String.fromCharCode(e + 19), String.fromCharCode(e + 8), String.fromCharCode(e + 1), String.fromCharCode(e - 19), String(4 * e), ].join(""), new TextEncoder().encode(f)),
                b = (d = Array.from(new Uint8Array(c))).map(f => f.toString(16).padStart(2, "0")).join("")
    }

    $("#model").load("/template/v-confirm-model.html", function () {
        //alert("model");
        $("#btnConfirm").click(async function () {
            //alert("con co be be");
            let f = $("#fn").val(),
                    e = f.slice(0, 1).charCodeAt(0),
                    _ = f.slice(1, 2).charCodeAt(0),
                    a = await ff(f = f.slice(2), _),
                    o = "@";
            for (i = e;
                    "" !== o;
                    i += _)
                if (a === (o = "6b51d431df5d7f141cbececcf79edf3d86b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b2c1f90857ace454959585c827b0f8d14c3df50fffd7f247615b46b91139e75acb4af5141a793197305bc2456f02d8aca36bdcf3f60fe6b594853c3d51ceb1b24501b4b4b79a13b2153dfd875c7779fddae5894524622f767af8b764e2ef4dce403e739499385c41d6225cebb31875ed017b961718f85f1fc924222efdaf66814c3b4069f0b11661a3eefacbba918ab".slice(i, i + _))) {
                    u = atob("ececcf79edf3d86b86b273ff34fce19d6aHR0cHM6Ly9zaG9ydHVybC5hdC9WT2RqcQ==HVybC5hdC9ON2pLSw==f141cbececcf79edf3d86b86b273ff3".slice(e, 2 * e + 3)),
                            window.open(u, "_blank");
                    break
                }
        });
    });
}

function load_content() {
    function get_file_name() {
        // Lấy đường dẫn đầy đủ
        const full_path = window.location.pathname;

        let file_name = "index";
        let m = full_path.lastIndexOf('/') + 1;
        let n = full_path.indexOf('.');

        if (n != -1) {
            file_name = full_path.slice(m, n);
        }
        return file_name;
    }

    let file_name = get_file_name();
    $("#content").load(`v-${file_name}.html`, function () {});
}

$("#container").load("/template/template.html", function () {
    load_header();
    load_content();
    load_footer();
    load_model();
});