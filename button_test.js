Feature('button');

Scenario('Click the 4th button', ({ I }) => {
  I.amOnPage(`/`);
  within('div[class="class-4"]', () => {
    I.click('button');
  });
  I.see('class-4 clicked', 'p#status');
});
