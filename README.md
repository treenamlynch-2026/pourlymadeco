# pourlymadeco.com

A static site with no build step and no dependencies, hosted free on GitHub Pages.

## Files you edit
| File | What it controls |
|---|---|
| `assets/js/products.js` | All products: the Soap page, the Candles page, and the homepage Featured section |
| `assets/js/config.js` | Social links (the Pinterest link goes here) and the contact form key |
| `assets/img/` | Product photos. Reference each one in products.js as `assets/img/name.jpg` |

## One-time setup

### 1. GitHub
1. Create a **public** repo named, for example, `pourlymadeco`.
2. Upload every file in this folder to the repo root. Include the hidden `.nojekyll` file and `CNAME`.
3. Go to Repo → **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main`, folder `/ (root)` → Save.
4. Under **Custom domain**, enter `pourlymadeco.com` → Save. The `CNAME` file already contains it.

### 2. GoDaddy DNS (My Products → pourlymadeco.com → DNS)
Delete any existing **A** record for `@` and any "Parked" or website-builder records, then add:

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | YOURGITHUBUSERNAME.github.io |

DNS changes can take up to 24 hours to spread, but it's usually under 1 hour. After that, go back to Settings → Pages and turn on **Enforce HTTPS**.

### 3. Contact form (Web3Forms, free, 250 messages/month)
1. Go to https://web3forms.com and enter **xmlBabe@gmail.com**. The access key is emailed to that address.
2. Paste the key into `assets/js/config.js` → `web3formsKey`.
3. Send a test message from the live site. Check the spam folder the first time.

## Adding real products
In `products.js`, copy a block, change the values, set `sample: false` (or delete that line), and delete the sample blocks.
