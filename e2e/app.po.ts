import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getComponentModalButton() {
    return element(by.buttonText('Component inside modal'));
  }

  getComponentHTMLButton() {
    return element(by.buttonText('Raw HTML inside modal'));
  }

  getComponentOutsideClickButton() {
    return element(by.buttonText('Prevent modal to be dismissed when clicking outside it'));
  }

  getModal() {
    return element(by.css('.modal'));
  }

  getModalBody() {
    return element(by.css('.modal-body'));
  }

  getModalBodyText() {
    return element(by.css('.modal-body')).getText();
  }

  getAppModalContent() {
    return element(by.css('app-modal-content'));
  }

  getAppModalContentText() {
    return this.getAppModalContent().getText();
  }

  getCloseButton() {
    return element(by.css('button.close'));
  }
}
