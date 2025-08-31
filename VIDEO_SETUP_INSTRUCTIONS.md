# Immigration Website Hero Video Setup

## Current Status
The website is currently using a placeholder image as the hero background. This needs to be replaced with an actual video.

## Recommended Video Sources

### 1. Mixkit (Highly Recommended)
**URL:** https://mixkit.co/

Search for these terms:
- "airplane landing runway"
- "airport arrival"
- "travel destination"
- "immigration"

### 2. Other Free Sources
- **Pexels Videos:** https://www.pexels.com/videos/
- **Pixabay Videos:** https://pixabay.com/videos/
- **Coverr:** https://coverr.co/

## How to Replace the Placeholder Video

1. **Download a Suitable Video**
   - Visit one of the sources above
   - Search using terms like "airport landing" or "travel destination"
   - Choose a video with good contrast for text overlay
   - Download the 1920x1080 MP4 version

2. **Replace the Current File**
   Save your video as:
   ```
   public/videos/hero.mp4
   ```

## Video Requirements
- **Format:** MP4 (H.264 codec)
- **Resolution:** 1920x1080 (Full HD)
- **Duration:** 15-30 seconds
- **File size:** Under 10MB
- **Loopable content:** Should seamlessly loop
- **Contrast:** Should allow white text to be readable with a dark overlay

## Recommended Video Content
- Commercial airplane landing at an international airport
- Family arriving at their destination
- City skyline from airplane window
- Passport control/checkpoint
- Business professional at airport

## Testing Your Video
After replacing the file, restart the development server:
```bash
npm run dev
```

Then visit http://localhost:3000 to see your video in action.

## Troubleshooting
- If the video doesn't play, check browser console for errors
- Ensure the file is actually MP4 format (not just renamed)
- Verify the file size is reasonable (<10MB)
- Confirm the resolution is 1920x1080 for best results

## Support
If you need help finding or implementing a video, contact the development team.