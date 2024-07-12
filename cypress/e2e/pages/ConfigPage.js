const buttonConfig =
  "body > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)";
const buttonRemoveProject = ".btn_remove_project";
const buttonSubmitRemoveProject = ".btn-delete-user.submit_remove_project";
const buttonEditName = ".edit_name";
const inputNameProject = "#nameProject";
const buttonSubmitNameProject = ".btn.btn-submit-invite.submit_name";
const textNameProject = ".w_name.project_name";
const buttonEditDesc = ".edit_desc";
const inputProjectDesc = "#projectDesc";
const buttonSubmitDesc = ".btn.btn-submit-invite.submit_desc";
const textProjectDesc = "div[class='wrap_desc'] div[class='desc']";

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

  get getButtonEditName() {
    return buttonEditName;
  }

  get getInputNameProject() {
    return inputNameProject;
  }

  get getButtonSubmitNameProject() {
    return buttonSubmitNameProject;
  }

  get getTextNameProject() {
    return textNameProject;
  }

  get getButtonEditDesc() {
    return buttonEditDesc;
  }

  get getInputProjectDesc() {
    return inputProjectDesc;
  }

  get getButtonSubmitDesc() {
    return buttonSubmitDesc;
  }

  get getTextProjectDesc() {
    return textProjectDesc;
  }
}
