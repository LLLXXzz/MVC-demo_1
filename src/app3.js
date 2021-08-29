import $ from 'jquery'
import './app3.css'

const $square = $('#app3 .square')
$square.on('click', () => {
    //toggleClass() 有了就删除  没有就添加
    $square.toggleClass('active')
})