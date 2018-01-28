import { browser, protractor } from 'protractor';

import { AppPage } from './app.po';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display app name', () => {
    expect(page.getTitleText()).toContain('angular-custom-modal');
  });

  it('should display the component inside modal', () => {
    page.getComponentModalButton().click();
    expect(page.getAppModalContentText()).toContain('I\'m <app-modal-content>');
  });

  it('should display the raw html inside modal', () => {
    page.getComponentHTMLButton().click();
    expect(page.getModalBodyText()).toContain('I\'m HTML');
  });

  it('should close on close button click', () => {
    page.getComponentModalButton().click();
    page.getCloseButton().click();
    expect(page.getAppModalContent().isPresent()).toBe(false);
  });

  it('should close when clicking outside modal', () => {
    page.getComponentModalButton().click();
    // page.getModal().click();
    browser.executeScript('document.querySelector(\'.modal\').click()');
    expect(page.getAppModalContent().isPresent()).toBe(false);
  });

  it('should close when clicking the escape key', () => {
    page.getComponentModalButton().click();
    browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
    expect(page.getAppModalContent().isPresent()).toBe(false);
  });
});
