import { HarmoneyPage } from './app.po';

describe('harmoney App', () => {
  let page: HarmoneyPage;

  beforeEach(() => {
    page = new HarmoneyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
