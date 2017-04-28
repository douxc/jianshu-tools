/**
 * 创建sideBar、操作sideBar
 * Created by xinchao.dou on 2017/4/28.
 */
const app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);
new Vue({
    el: '#app',
    data() {
        return {
            isShowNavBar: false
        }
    },
    render (h){
        const _this = this;
        return (<nav class={`jianshu-tools-sidebar ${_this.isShowNavBar ? 'open' : ''}`}>
            <div class="jianshu-tools-sidebar__switch" onClick={() => {
                _this.isShowNavBar = !_this.isShowNavBar
            }}/>
            <div class="jianshu-tools-sidebar__content">
                content
            </div>
        </nav>);
    }
});