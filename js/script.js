$(document).ready(function() {
    if (document.getElementById('tags')!==null) { 
        $('#tags').tagtacular({
            entityId: 101,
            systemTags: ['JS', 'Symfony', 'Php'],
            configShowAddButton: false,
            configShowSwitchButton: false,
            configSortTags: false,
            configRenderFlashMessageSpan: false,
            configDeleteSymbol: '<img width="10" src="images/cancel.svg"/>',
            validationPattern: /^[a-zA-Z0-9А-Яа-я.]+$/,
        })
    }

    $(".folder-action").click(function() {
        $("form").slideToggle("fast");
    });

    $(".btn").click(function() {
        event.preventDefault();
        $("#show-card").show();
    });

    $('select').each(function() {
        let $this = $(this),
            numberOfOptions = $(this).children('option').length;

        $this.addClass('s-hidden');

        $this.wrap('<div class="select"></div>');

        $this.after('<div class="styledSelect"></div>');

        const $styledSelect = $this.next('div.styledSelect');

        $styledSelect.text($this.children('option').eq(0).text());

        const $list = $('<ul />', {
            'class': 'options'
        }).insertAfter($styledSelect);

        for (let i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        var $listItems = $list.children('li');

        $styledSelect.click(function(e) {
            e.stopPropagation();
            $(this).toggleClass('active').next('ul.options').slideToggle(100);
        });

        $listItems.click(function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
        });

        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });

    $(".card-selected").click(function() {
        $(this).toggleClass("active")
    });

    $('.card-selected').on('click', function() {
        if ($(this).attr('data-click-state') == 1) {
            $(this).attr('data-click-state', 0)
            $(this).children("svg").children('path').css("fill", "#f0f0f0");
        } else {
            $(this).attr('data-click-state', 1)
            $(this).children("svg").children('path').css("fill", "#dac600");
        }
    });

    $(".card-message").each(function() {
        $(this).on("click", function() {
            $(this).parent().find(".card-comment-block").toggle('slide', {
                direction: 'right'
            }, 150)
        });
    });

    $(".ui-widget").slideToggle(100);
});
