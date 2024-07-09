const url = 'https://my.bizdev.vn/'
const choosingProjectDropdown = '.choose_project .dropdown-toggle';
// const bizFlyMarketingOption = "li[data-name='Dự án 23']";
const bizFlyMarketingOption = "div[class='wrap_left d-flex flex-row align-items-center'] li:nth-child(1)";
const createNewProject = '.create_project';
const selectBizCRM = 'button[data-name="BizCRM"]';
const selectBizMail = 'button[data-name="BizMail"]';
const selectBizflyChat = 'button[data-name="BizflyChat"]';

const buttonStartProject = "button[class='btn btn-primary btn_create_project']";
const toggleBizCRM = "#solutionCheckStatus-1";

export class MainPage {
    get getUrl() {
        return url;
    }

    get getChoosingProjectDropdown() {
        return choosingProjectDropdown;
    }

    get getCreateNewProject() {
        return createNewProject;
    }

    get getSelectBizCRM() {
        return selectBizCRM;
    }

    get getSelectBizMail() {
        return selectBizMail;
    }

    get getSelectBizflyChat() {
        return selectBizflyChat;
    }

    get getButtonStartProject() {
        return buttonStartProject;
    }

    get getBizFlyMarketingOption() {
        return bizFlyMarketingOption;
    }

    get getToggleBizCRM() {
        return toggleBizCRM;
    }
}