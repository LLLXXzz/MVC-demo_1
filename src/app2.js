import $ from 'jquery'
import './app2.css'
const $tabBar = $('#app2 .tab-bar')
const $tabContent = $("#app2 .tab-content")
$tabBar.on('click', 'li', (e) => {
    const $li = $(e.currentTarget)
    $li
        .addClass('selected')
        .siblings()
        .removeClass('selected')
    //查找是第几个元素
    const index = $li.index()
    $tabContent.children()
        .eq(index)
        .addClass('active')    //找到第index个孩子 添加样式
        .siblings()
        .removeClass('active')      //兄弟添加样式siblings() 方法返回被选元素的所有同级元素
})

//默认点击第一个 也可以在css上添加默认的active和selected
$tabBar.children().eq(0).trigger('click')