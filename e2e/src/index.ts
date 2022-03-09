import { Selector } from 'testcafe';

fixture`Getting Started` // declare the fixture
  .page`http://localhost:3000`; // specify the start page

test('My first test', async (t) => {
  await t.wait(3000);
  await t
    .click(Selector('a').withText('MyPage'))
    .expect(Selector('h1').innerText)
    .eql('MyPage');
  await t.wait(3000);
});
