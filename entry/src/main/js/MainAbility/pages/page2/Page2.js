import promptAction from '@ohos.promptAction';
import router from '@ohos.router';
export default {
    data: {
        label_1:{
            nextLabel: 'Start',
            status: 'normal'
        },
        label_2:{
            prevLabel: 'Back',
            nextLabel: 'Next',
            status: 'normal'
        },
        label_3:{
            prevLabel: 'Back',
            nextLabel: 'End',
            status: 'disabled'
        },
        index: 0,
        list:[
            {src: 'pages/images/1.png'},
            {src: 'pages/images/2.png'},
            {src: 'pages/images/3.png'},
        ],
        imageTo(index){
            this.index = index;
            this.$element('swiper').swipeTo({index: index});
        },
        change(e){
            this.index = e.index;
        },
        Bool:'No',
        BoolRange:['Yes', 'No'],
        lineData: [
            {
                strokeColor: '#0081ff',
                fillColor: '#cce5ff',
                data: [763, 550, 551, 554, 731, 654, 525, 696, 595, 628, 791, 505, 613, 575, 475, 553, 491, 680, 657, 716],
                gradient: true,
            }
        ],
        lineOps: {
            xAxis: {
                min: 0,
                max: 20,
                display: false,
            },
            yAxis: {
                min: 0,
                max: 1000,
                display: false,
            },
            series:{
                lineStyle: {
                    width: "5px",
                    smooth: true,
                },
                headPoint: {
                    shape:"circle",
                    size: 20,
                    strokeWidth: 5,
                    fillColor: '#ffffff',
                    strokeColor: '#007aff',
                    display: true,
                },
                loop:{
                    margin: 2,
                    gradient: true
                }
            },
        },
    },
    onInit() {
    },
    BtnClicked(e) {
        promptAction.showToast({
            message:'Status changed!'
        })
    },
    SetBool(e) {
        this.Bool = e.newValue
    },
    switchChange(e){
        if(e.checked){
            promptAction.showToast({
                message: "on"
            });
        }else{
            promptAction.showToast({
                message: "off"
            });
        }
    },
    launch_back() {
        promptAction.showToast({
            message: 'Quit.'
        })
        router.back();
    },
    launch_push() {
        promptAction.showToast({
            message: 'Confirmed.'
        })
        router.push ({
            url: 'pages/page3/Page3',
        });
    },
}