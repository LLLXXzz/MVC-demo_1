import $ from 'jquery'
import './app1.css'
const $button1 = $('#add1')
const $button2 = $('#minus1')
const $button3 = $('#mul2')
const $button4 = $('#divide2')
const $number = $('#number')
//初始化 读取 要是n不存在就写入100
let n = localStorage.getItem('num')
$number.text(n || 100)
//加
$button1.on('click', () => {
    //读取
    let n = parseInt($number.text())
    n += 1
    //把n储存起来 下次刷新时n不变
    localStorage.setItem('num', n)
    //写入
    $number.text(n)
})
//减
$button2.on('click', () => {
    let n = parseInt($number.text())
    n -= 1
    localStorage.setItem('num', n)
    $number.text(n)
})
//×
$button3.on('click', () => {
    let n = parseInt($number.text())
    n = n * 2
    localStorage.setItem('num', n)
    $number.text(n)
})
//除
$button4.on('click', () => {
    let n = parseInt($number.text())
    n = n / 2
    localStorage.setItem('num', n)
    $number.text(n)
})