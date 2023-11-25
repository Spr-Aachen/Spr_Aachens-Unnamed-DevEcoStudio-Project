import promptAction from '@ohos.promptAction';
import router from '@ohos.router';
export default {
    data: {
        stars: 5,
        ratewidth: '300px',
        rateheight: '60px',
        step: 0.5,
        rate: 0
    },
    onInit(){
    },
    setnumstars(e) {
        this.stars = e.progress
        this.ratewidth = 60 * parseInt(this.stars) + 'px'
    },
    setstep(e) {
        this.step = e.progress
    },
    setrating(e){
        this.rate = e.progress
    },
    showrating(e) {
        promptAction.showToast({
            message: '当前评分' + e.rating
        })
    },
    launch_back() {
        router.back();
    }
}