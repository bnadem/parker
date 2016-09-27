import { ParkerPage } from './app.po';

describe('parker App', function() {
  let page: ParkerPage;

  beforeEach(() => {
    page = new ParkerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
