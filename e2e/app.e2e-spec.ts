import { TestAuthPage } from './app.po';

describe('test-auth App', () => {
  let page: TestAuthPage;

  beforeEach(() => {
    page = new TestAuthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
