import { test } from '@playwright/test';
import { SamplePom } from '../Pages/samplepom';

test('Search Flipkart for iPhone 17 Pro and print its price', async ({ page }) => {
  const samplePom = new SamplePom(page);
  await samplePom.completeMobileSearch('iPhone 17 Pro');
});