import $ from 'jquery'
import './app4.css'
const $circle = $('#app4 .circle')
//监听鼠标进入 和 离开
$circle.on('mouseenter', () => {
    $circle.addClass('active')
        .on('mouseleave', () => {
            $circle.removeClass('active')
        })
})