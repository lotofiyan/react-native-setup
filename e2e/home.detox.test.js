/* global device, element, by, waitFor */
async function dismissDevMenuIfPresent() {
  // The big paragraph text in the sheet
  const devMenuText = element(
    by.text(
      "This is the developer menu. It gives you access to useful tools in your development builds."
    )
  );
  const continueButton = element(by.text("Continue"));

  try {
    // If the dev menu shows up, this text should exist
    await waitFor(devMenuText).toExist().withTimeout(6000);

    // First try the Continue button
    try {
      await continueButton.tap();
    } catch {
      // If tapping the button fails for any reason, fall back to tapping outside
      // (near the top-middle of the window, above the white sheet).
      try {
        await element(by.type("UIWindow")).tapAtPoint({ x: 200, y: 100 });
      } catch {
        // If UIWindow fails, try the main React root view instead
        await element(by.type("RCTRootView")).tapAtPoint({ x: 200, y: 100 });
      }
    }

    // Wait until the sheet disappears (or at least the text)
    await waitFor(devMenuText).not.toBeVisible().withTimeout(5000);
  } catch (e) {
    // If that dev-menu text never appears, there's nothing to dismiss – just continue.
  }
}

/* global device, element, by, waitFor */

describe("Home flow (simulator)", () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });

    const devServerUrl = "http://localhost:8081";
    const devClientUrl = `exp+test-app://expo-development-client/?url=${encodeURIComponent(
      devServerUrl
    )}`;

    await device.openURL({ url: devClientUrl });
  });

  it("navigates from Home to Explore and fills the form", async () => {
    const snap = async (name) => {
      await device.takeScreenshot(name);
    };

    const homeTitle = element(by.id("home-title"));
    const authChip = element(by.id("cta-go-to-auth"));
    const homeScrollMatcher = by.id("home-scroll");

    // STEP 0: kill the Expo dev menu if it’s there
    await dismissDevMenuIfPresent();
    await snap("step-0-after-dev-menu");

    // STEP 1: home screen is visible
    await waitFor(homeTitle).toBeVisible().withTimeout(10000);
    await snap("step-1-home-visible");

    // STEP 2: scroll until the Auth flows chip is visible
    await waitFor(authChip)
      .toBeVisible()
      .whileElement(homeScrollMatcher)
      .scroll(200, "down");

    await new Promise((r) => setTimeout(r, 300));
    await snap("step-2-auth-chip-visible");

    // STEP 3: go to auth + submit form
    await authChip.tap();

    await expect(element(by.text("Welcome back"))).toBeVisible();
    await snap("step-3-login-screen");

    const email = element(by.id("input-email"));
    await email.replaceText("qa@example.com");
    await snap("step-4-email-filled");

    const loginCta = element(by.id("sign-in"));
    await waitFor(loginCta).toBeVisible().withTimeout(10000);
    await loginCta.tap();

    // Final snapshot after submission
  });
});
