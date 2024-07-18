const url = 'https://my.bizdev.vn/login';
const iframe = 'iframe[id="embed_login"]';
const inputField = 'input';
const existUser = '//div[@id="enterPasswordForm"]/preceding-sibling::p[1]';
const submitBtn = 'button';

export class LoginPage {

    get getUrl() {
        return cy.visit(url);
    }

    get getIframe() {
        return iframe;
    }

    get getInputField() {
        return inputField;
    }

    get getExistUser() {
        return existUser;
    }

    get getSubmitBtn() {
        return submitBtn;
    }
}
