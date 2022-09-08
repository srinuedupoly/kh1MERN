import puppeteer from "puppeteer";
describe("App.js", () => {
    let browser;
    let page;
  
    beforeAll(async () => {
      browser = await puppeteer.launch();
      page = await browser.newPage();
    });
  
    it("navigates to the about page", async () => {
      await page.goto("http://localhost:3000");
      await page.waitForSelector(".myhome");
      await page.click("#employee");
      await page.waitForSelector("#welcometext");
      const text = await page.$eval("#welcometext", (e) => e.textContent);
      expect(text).toContain("My Employee");
    });
    
    afterAll(() => browser.close());
});