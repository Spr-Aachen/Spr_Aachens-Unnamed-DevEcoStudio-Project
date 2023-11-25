import promptAction from '@ohos.promptAction';
import router from '@ohos.router';
export default {
    formSubmit() {
        promptAction.showToast({
            message: 'Submitted.'
        })
        router.push({
            url: 'pages/page2/Page2',
        });
    },
    formReset() {
        promptAction.showToast({
            message: 'Reset.'
        })
    }
}