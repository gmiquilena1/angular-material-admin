import { AngularMaterialAdminPage } from './app.po';

describe('angular-material-admin App', () => {
  let page: AngularMaterialAdminPage;

  beforeEach(() => {
    page = new AngularMaterialAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
