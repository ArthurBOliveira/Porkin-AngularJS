import faker from "faker";
import puppeteer from "puppeteer";

const APP = "http://localhost:3000";

const user = {
  email: faker.internet.email(),
  password: faker.internet.password(8)
};

let page;
let browser;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80
  });
  page = await browser.newPage();
});
afterAll(() => {
  browser.close();
});

describe("User Form", () => {
  test(
    "can create a user",
    async () => {
      await page.goto(APP);
      await page.waitForSelector("form[name=userForm]");
      await page.click("input[name=email]");
      await page.type("input[name=email]", user.email);
      await page.click("input[name=password]");
      await page.type("input[name=password]", user.password);
      await page.$('button[disabled]') !== null;
      await page.click("button[name=btnCreateUser]");
    },
    16000
  );
});
