
import Vue from 'vue'
import moment from 'moment'

// 评论的时间过滤
Vue.filter('date-format', (val, formatStr = 'YYYY-MM-DD HH:mm:ss') => {
    return moment(val).format(formatStr)
})