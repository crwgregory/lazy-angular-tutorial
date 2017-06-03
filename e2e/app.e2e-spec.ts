import { AngularTutorialPage } from './app.po';

describe('angular-tutorial App', () => {
  let page: AngularTutorialPage;

  beforeEach(() => {
    page = new AngularTutorialPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
