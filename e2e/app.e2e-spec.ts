import { MalcolmUiPage } from './app.po';

describe('malcolm-ui App', () => {
  let page: MalcolmUiPage;

  beforeEach(() => {
    page = new MalcolmUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
