const buttonConfig = "body > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)";
const buttonRemoveProject = ".btn_remove_project";
const buttonSubmitRemoveProject = ".btn-delete-user.submit_remove_project";

export class ConfigPage {
    get getButtonConfig() {
        return buttonConfig;
    }

    get getButtonRemoveProject() {
        return buttonRemoveProject;
    }

    get getButtonSubmitRemoveProject() {
        return buttonSubmitRemoveProject;
    }
}