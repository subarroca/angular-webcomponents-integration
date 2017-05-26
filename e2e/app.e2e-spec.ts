import { AngularWebcomponentsIntegrationPage } from './app.po';

describe('angular-webcomponents-integration App', () => {
  let page: AngularWebcomponentsIntegrationPage;

  beforeEach(() => {
    page = new AngularWebcomponentsIntegrationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
