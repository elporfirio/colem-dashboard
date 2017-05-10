import { ColemDashboardPage } from './app.po';

describe('colem-dashboard App', () => {
  let page: ColemDashboardPage;

  beforeEach(() => {
    page = new ColemDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
