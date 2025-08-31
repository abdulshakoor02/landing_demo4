#!/bin/bash

# Script to download a free airport/immigration video from Mixkit
# Note: This script provides guidance as direct automated downloads may not work

echo "=== Downloading Immigration Website Hero Video ==="
echo ""

# Create directories
mkdir -p public/videos
mkdir -p downloads

echo "Step 1: Visit Mixkit.co"
echo "Go to: https://mixkit.co/free-stock-video/airplane-landing-at-airport-1405/"
echo ""
echo "Step 2: Manual Download Process"
echo "1. Open the URL above in your browser"
echo "2. Click on the video to view it"
echo "3. Look for the 'Download' button on the video page"
echo "4. Click 'Download' and save the MP4 file to your computer"
echo ""
echo "Step 3: Place the video in the correct location"
echo "Move your downloaded video to: public/videos/hero.mp4"
echo ""
echo "Alternative Videos to Try:"
echo "- https://mixkit.co/free-stock-video/airplane-landing-at-airport-1405/"
echo "- https://mixkit.co/free-stock-video/plane-landing-at-the-airport-1771/"
echo "- https://mixkit.co/free-stock-video/airplane-landing-in-slow-motion-2093/"
echo ""
echo "If you're unable to download from Mixkit, try these alternatives:"
echo "- Pexels: https://www.pexels.com/videos/airport/"
echo "- Pixabay: https://pixabay.com/videos/airport-airplane-plane-travel-70009/"
echo ""
echo "Press Enter to continue with automated download attempt..."
read

echo "Attempting to download video (this may not work due to site protections)..."

# Try to download with proper headers
curl -L -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" \
     -H "Referer: https://mixkit.co/" \
     -o downloads/hero-video-temp.mp4 \
     "https://assets.mixkit.co/videos/preview/mixkit-airplane-landing-at-airport-1405-large.mp4" 2>/dev/null

if [ $? -eq 0 ] && [ -f downloads/hero-video-temp.mp4 ]; then
    echo "Download successful!"
    mv downloads/hero-video-temp.mp4 public/videos/hero.mp4
    echo "Video moved to public/videos/hero.mp4"
else
    echo "Download failed or blocked by server protection."
    echo "Please download manually using the instructions above."
    echo "Using placeholder image as fallback..."
    cp public/images/hero/placeholder.jpg public/videos/hero.mp4 2>/dev/null
fi

echo ""
echo "=== Download Process Complete ==="