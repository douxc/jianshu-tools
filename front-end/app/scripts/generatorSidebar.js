'use strict';

/**
 * 创建sideBar、操作sideBar
 * Created by xinchao.dou on 2017/4/28.
 */
var app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);
new Vue({
    el: '#app',
    data: function data() {
        return {
            isShowNavBar: false
        };
    },
    render: function render(h) {
        var _this = this;
        return h(
            'nav',
            { 'class': 'jianshu-tools-sidebar ' + (_this.isShowNavBar ? 'open' : '') },
            [h(
                'div',
                { 'class': 'jianshu-tools-sidebar__switch', on: {
                        'click': function click() {
                            _this.isShowNavBar = !_this.isShowNavBar;
                        }
                    }
                },
                []
            ), h(
                'div',
                { 'class': 'jianshu-tools-sidebar__content' },
                ['content']
            )]
        );
    }
});