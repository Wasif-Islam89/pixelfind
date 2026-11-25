# 🚀 PixelFind — Media Search App

PixelFind is a modern media search application built with React.js and Redux Toolkit. It allows users to search for photos, videos, and GIFs from multiple media platforms in one place.

Users can explore media, preview original content, and save their favorite items to a personal collection.

## ✨ Features

- 📸 **Photo Search:** Search photos using the Unsplash API.
- 🎬 **Video Search:** Discover videos using the Pixabay API.
- 🎞️ **GIF Search:** Find animated GIFs using the GIPHY API.
- 🔍 **Search Functionality:** Search for different types of media.
- 📂 **Category Tabs:** Switch between Photos, Videos, and GIFs.
- 🖼️ **Media Preview:** View photos, videos, and GIFs.
- 🔗 **Original Media Links:** Open original media in a new browser tab.
- ❤️ **Collection:** Add favorite media to your personal collection.
- 🗑️ **Remove Items:** Remove individual items from your collection.
- 💾 **Local Storage:** Keep saved collection items after refreshing the page.
- 🔔 **Toast Notifications:** Get notifications when adding items to your collection.
- ⚡ **Redux State Management:** Manage search queries, results, loading states, errors, and collection data.

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- Redux Toolkit
- React Redux
- Axios
- Tailwind CSS
- React Toastify
- Vite
- Browser Local Storage

## 🌐 APIs Used

PixelFind uses the following APIs to retrieve media:

| API                                             | Purpose      |
| ----------------------------------------------- | ------------ |
| [Unsplash API](https://unsplash.com/developers) | Photo Search |
| [Pixabay API](https://pixabay.com/api/docs/)    | Video Search |
| [GIPHY API](https://developers.giphy.com/)      | GIF Search   |

## 🔐 Environment Variables & Security

PixelFind requires API keys from Unsplash, Pixabay, and GIPHY.

- Create a `.env` file in the project root.
- Add the required API keys using the variable names shown above.
- Never upload your actual `.env` file to GitHub.
- Make sure `.env` is included in `.gitignore`.
- Create a `.env.example` file with placeholder values to show other developers which variables are required.

Example `.env.example`:

```env
VITE_UNSPLASH_KEY=your_unsplash_api_key
VITE_PIXABAY_KEY=your_pixabay_api_key
VITE_GIPHY_KEY=your_giphy_api_key
```

**Security Note:** Vite variables with the `VITE_` prefix are exposed to browser-side code. Do not store private or sensitive server-side secrets in them.

## 🧠 State Management

Redux Toolkit is used to manage the application's global state.

The application manages:

- Search query
- Active media category
- Search results
- Loading status
- Error handling
- Saved collection items

## 💾 Data Persistence

PixelFind uses browser Local Storage to save collection items.

Saved items remain available even after refreshing the browser.
