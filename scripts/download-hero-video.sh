#!/bin/bash

# Script to download a sample hero video for the immigration website
# This script provides both manual and automated download options

echo "=== Immigration Website Hero Video Downloader ==="
echo ""

# Create directories
mkdir -p public/videos
mkdir -p downloads

echo "IMPORTANT NOTE:"
echo "Most video sites (including Mixkit) use protection mechanisms that"
echo "prevent automated downloads. Manual download is strongly recommended."
echo ""

echo "OPTION 1: MANUAL DOWNLOAD (RECOMMENDED)"
echo "--------------------------------------"
echo "1. Visit one of these URLs:"
echo "   - https://mixkit.co/free-stock-video/airplane-landing-at-airport-1405/"
echo "   - https://mixkit.co/free-stock-video/plane-landing-at-the-airport-1771/"
echo "   - https://mixkit.co/free-stock-video/airplane-landing-in-slow-motion-2093/"
echo ""
echo "2. Click the 'Download' button on the video page"
echo "3. Save the MP4 file as 'public/videos/hero.mp4'"
echo ""
echo "ALTERNATIVE SOURCES:"
echo "- Pexels Videos: https://www.pexels.com/videos/airport/"
echo "- Pixabay Videos: https://pixabay.com/videos/airport-airplane-plane-travel-70009/"
echo ""
echo "VIDEO REQUIREMENTS:"
echo "- Format: MP4 (H.264 codec)"
echo "- Resolution: 1920x1080 (Full HD)"
echo "- Duration: 15-30 seconds"
echo "- File size: Under 10MB"
echo "- Loopable content"
echo ""

echo "OPTION 2: AUTOMATED DOWNLOAD ATTEMPT"
echo "------------------------------------"
echo "Attempting to automatically download a video..."
echo "Note: This will likely fail due to content protection."
echo ""

# Try to download with proper headers
curl -L -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" \
     -H "Referer: https://mixkit.co/" \
     -o downloads/hero-video-temp.mp4 \
     "https://assets.mixkit.co/videos/preview/mixkit-airplane-landing-at-airport-1405-large.mp4" 2>/dev/null

# Check if the download was successful and is actually a video file
if [ $? -eq 0 ] && [ -f downloads/hero-video-temp.mp4 ]; then
    # Check if the file is actually a video (not HTML or XML)
    FILE_TYPE=$(file -b downloads/hero-video-temp.mp4 | cut -d' ' -f1)
    
    if [[ "$FILE_TYPE" == "ISO" ]] || [[ "$FILE_TYPE" == "MPEG" ]] || [[ $(file -b downloads/hero-video-temp.mp4 | grep -c "video") -gt 0 ]]; then
        echo "✓ Download successful!"
        mv downloads/hero-video-temp.mp4 public/videos/hero.mp4
        echo "✓ Video saved to public/videos/hero.mp4"
        echo ""
        echo "SUCCESS: Your hero video has been downloaded and installed!"
    else
        echo "✗ Download completed but file is not a valid video (received $FILE_TYPE)"
        echo "  This is likely due to content protection mechanisms."
        echo ""
        echo "FALLBACK SOLUTION:"
        echo "------------------"
        echo "Using placeholder image as temporary solution..."
        cp public/images/hero/placeholder.jpg public/videos/hero.mp4 2>/dev/null
        echo "✓ Placeholder copied to public/videos/hero.mp4"
        echo ""
        echo "IMPORTANT: Please manually download a real video using OPTION 1 above."
    fi
else
    echo "✗ Automated download failed (likely due to server protections)"
    echo ""
    echo "FALLBACK SOLUTION:"
    echo "------------------"
    echo "Using placeholder image as temporary solution..."
    cp public/images/hero/placeholder.jpg public/videos/hero.mp4 2>/dev/null
    echo "✓ Placeholder copied to public/videos/hero.mp4"
    echo ""
    echo "IMPORTANT: Please manually download a real video using OPTION 1 above."
fi

echo ""
echo "=== Download Process Complete ==="
echo ""
echo "To test your video, restart the development server:"
echo "npm run dev"