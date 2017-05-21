import { AngularTictactoePage } from './app.po';

describe('angular-tictactoe App', () => {
  let page: AngularTictactoePage;

  beforeEach(() => {
    page = new AngularTictactoePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
