'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Photo {
  id: number;
  src: string;
  alt: string;
  filename: string;
}

// Counter animation hook
const useCountAnimation = (end: number, duration: number = 2000, isVisible: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(end * easeOutCubic));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return count;
};

export default function Gallery2024() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [displayedPhotos, setDisplayedPhotos] = useState<Photo[]>([]);
  const [photosToShow, setPhotosToShow] = useState(16);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({
    title: false,
    gallery: false,
    stats: false
  });
  const titleRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Animated counters
  const attendeesCount = useCountAnimation(150, 2000, isVisible.stats);
  const photosCount = useCountAnimation(163, 1800, isVisible.stats);
  const speakersCount = useCountAnimation(18, 1500, isVisible.stats);
  const sessionsCount = useCountAnimation(12, 1200, isVisible.stats);

  // All BitConf 2024 photos (auto-generated)
  const allPhotos = [
    {
        "id": 1,
        "src": "/gallery/bitconf-2024/1-0639_resized.jpg",
        "alt": "BitConf 2024 - Photo 1",
        "filename": "1-0639_resized.jpg"
    },
    {
        "id": 2,
        "src": "/gallery/bitconf-2024/1-0643_resized.jpg",
        "alt": "BitConf 2024 - Photo 2",
        "filename": "1-0643_resized.jpg"
    },
    {
        "id": 3,
        "src": "/gallery/bitconf-2024/1-0645_resized.jpg",
        "alt": "BitConf 2024 - Photo 3",
        "filename": "1-0645_resized.jpg"
    },
    {
        "id": 4,
        "src": "/gallery/bitconf-2024/1-0646_resized.jpg",
        "alt": "BitConf 2024 - Photo 4",
        "filename": "1-0646_resized.jpg"
    },
    {
        "id": 5,
        "src": "/gallery/bitconf-2024/1-0647_resized.jpg",
        "alt": "BitConf 2024 - Photo 5",
        "filename": "1-0647_resized.jpg"
    },
    {
        "id": 6,
        "src": "/gallery/bitconf-2024/1-0651_resized.jpg",
        "alt": "BitConf 2024 - Photo 6",
        "filename": "1-0651_resized.jpg"
    },
    {
        "id": 7,
        "src": "/gallery/bitconf-2024/1-0652_resized.jpg",
        "alt": "BitConf 2024 - Photo 7",
        "filename": "1-0652_resized.jpg"
    },
    {
        "id": 8,
        "src": "/gallery/bitconf-2024/1-0653_resized.jpg",
        "alt": "BitConf 2024 - Photo 8",
        "filename": "1-0653_resized.jpg"
    },
    {
        "id": 9,
        "src": "/gallery/bitconf-2024/1-0655_resized.jpg",
        "alt": "BitConf 2024 - Photo 9",
        "filename": "1-0655_resized.jpg"
    },
    {
        "id": 10,
        "src": "/gallery/bitconf-2024/1-0658_resized.jpg",
        "alt": "BitConf 2024 - Photo 10",
        "filename": "1-0658_resized.jpg"
    },
    {
        "id": 11,
        "src": "/gallery/bitconf-2024/1-0662_resized.jpg",
        "alt": "BitConf 2024 - Photo 11",
        "filename": "1-0662_resized.jpg"
    },
    {
        "id": 12,
        "src": "/gallery/bitconf-2024/1-0664_resized.jpg",
        "alt": "BitConf 2024 - Photo 12",
        "filename": "1-0664_resized.jpg"
    },
    {
        "id": 13,
        "src": "/gallery/bitconf-2024/1-0667_resized.jpg",
        "alt": "BitConf 2024 - Photo 13",
        "filename": "1-0667_resized.jpg"
    },
    {
        "id": 14,
        "src": "/gallery/bitconf-2024/1-0672_resized.jpg",
        "alt": "BitConf 2024 - Photo 14",
        "filename": "1-0672_resized.jpg"
    },
    {
        "id": 15,
        "src": "/gallery/bitconf-2024/1-0676_resized.jpg",
        "alt": "BitConf 2024 - Photo 15",
        "filename": "1-0676_resized.jpg"
    },
    {
        "id": 16,
        "src": "/gallery/bitconf-2024/1-0677_resized.jpg",
        "alt": "BitConf 2024 - Photo 16",
        "filename": "1-0677_resized.jpg"
    },
    {
        "id": 17,
        "src": "/gallery/bitconf-2024/1-0680_resized.jpg",
        "alt": "BitConf 2024 - Photo 17",
        "filename": "1-0680_resized.jpg"
    },
    {
        "id": 18,
        "src": "/gallery/bitconf-2024/1-0681_resized.jpg",
        "alt": "BitConf 2024 - Photo 18",
        "filename": "1-0681_resized.jpg"
    },
    {
        "id": 19,
        "src": "/gallery/bitconf-2024/1-0684_resized.jpg",
        "alt": "BitConf 2024 - Photo 19",
        "filename": "1-0684_resized.jpg"
    },
    {
        "id": 20,
        "src": "/gallery/bitconf-2024/1-0685_resized.jpg",
        "alt": "BitConf 2024 - Photo 20",
        "filename": "1-0685_resized.jpg"
    },
    {
        "id": 21,
        "src": "/gallery/bitconf-2024/1-0688_resized.jpg",
        "alt": "BitConf 2024 - Photo 21",
        "filename": "1-0688_resized.jpg"
    },
    {
        "id": 22,
        "src": "/gallery/bitconf-2024/1-0691_resized.jpg",
        "alt": "BitConf 2024 - Photo 22",
        "filename": "1-0691_resized.jpg"
    },
    {
        "id": 23,
        "src": "/gallery/bitconf-2024/1-0692_resized.jpg",
        "alt": "BitConf 2024 - Photo 23",
        "filename": "1-0692_resized.jpg"
    },
    {
        "id": 24,
        "src": "/gallery/bitconf-2024/1-0694_resized.jpg",
        "alt": "BitConf 2024 - Photo 24",
        "filename": "1-0694_resized.jpg"
    },
    {
        "id": 25,
        "src": "/gallery/bitconf-2024/1-0698_resized.jpg",
        "alt": "BitConf 2024 - Photo 25",
        "filename": "1-0698_resized.jpg"
    },
    {
        "id": 26,
        "src": "/gallery/bitconf-2024/1-0699_resized.jpg",
        "alt": "BitConf 2024 - Photo 26",
        "filename": "1-0699_resized.jpg"
    },
    {
        "id": 27,
        "src": "/gallery/bitconf-2024/1-0705_resized.jpg",
        "alt": "BitConf 2024 - Photo 27",
        "filename": "1-0705_resized.jpg"
    },
    {
        "id": 28,
        "src": "/gallery/bitconf-2024/1-0715_resized.jpg",
        "alt": "BitConf 2024 - Photo 28",
        "filename": "1-0715_resized.jpg"
    },
    {
        "id": 29,
        "src": "/gallery/bitconf-2024/1-0716_resized.jpg",
        "alt": "BitConf 2024 - Photo 29",
        "filename": "1-0716_resized.jpg"
    },
    {
        "id": 30,
        "src": "/gallery/bitconf-2024/1-0717_resized.jpg",
        "alt": "BitConf 2024 - Photo 30",
        "filename": "1-0717_resized.jpg"
    },
    {
        "id": 31,
        "src": "/gallery/bitconf-2024/1-0722_resized.jpg",
        "alt": "BitConf 2024 - Photo 31",
        "filename": "1-0722_resized.jpg"
    },
    {
        "id": 32,
        "src": "/gallery/bitconf-2024/1-0723_resized.jpg",
        "alt": "BitConf 2024 - Photo 32",
        "filename": "1-0723_resized.jpg"
    },
    {
        "id": 33,
        "src": "/gallery/bitconf-2024/1-0725_resized.jpg",
        "alt": "BitConf 2024 - Photo 33",
        "filename": "1-0725_resized.jpg"
    },
    {
        "id": 34,
        "src": "/gallery/bitconf-2024/1-0736_resized.jpg",
        "alt": "BitConf 2024 - Photo 34",
        "filename": "1-0736_resized.jpg"
    },
    {
        "id": 35,
        "src": "/gallery/bitconf-2024/1-0744_resized.jpg",
        "alt": "BitConf 2024 - Photo 35",
        "filename": "1-0744_resized.jpg"
    },
    {
        "id": 36,
        "src": "/gallery/bitconf-2024/1-0745_resized.jpg",
        "alt": "BitConf 2024 - Photo 36",
        "filename": "1-0745_resized.jpg"
    },
    {
        "id": 37,
        "src": "/gallery/bitconf-2024/1-0747_resized.jpg",
        "alt": "BitConf 2024 - Photo 37",
        "filename": "1-0747_resized.jpg"
    },
    {
        "id": 38,
        "src": "/gallery/bitconf-2024/1-0752_resized.jpg",
        "alt": "BitConf 2024 - Photo 38",
        "filename": "1-0752_resized.jpg"
    },
    {
        "id": 39,
        "src": "/gallery/bitconf-2024/1-0753_resized.jpg",
        "alt": "BitConf 2024 - Photo 39",
        "filename": "1-0753_resized.jpg"
    },
    {
        "id": 40,
        "src": "/gallery/bitconf-2024/1-0758_resized.jpg",
        "alt": "BitConf 2024 - Photo 40",
        "filename": "1-0758_resized.jpg"
    },
    {
        "id": 41,
        "src": "/gallery/bitconf-2024/1-0760_resized.jpg",
        "alt": "BitConf 2024 - Photo 41",
        "filename": "1-0760_resized.jpg"
    },
    {
        "id": 42,
        "src": "/gallery/bitconf-2024/1-0763_resized.jpg",
        "alt": "BitConf 2024 - Photo 42",
        "filename": "1-0763_resized.jpg"
    },
    {
        "id": 43,
        "src": "/gallery/bitconf-2024/1-0765_resized.jpg",
        "alt": "BitConf 2024 - Photo 43",
        "filename": "1-0765_resized.jpg"
    },
    {
        "id": 44,
        "src": "/gallery/bitconf-2024/1-0766_resized.jpg",
        "alt": "BitConf 2024 - Photo 44",
        "filename": "1-0766_resized.jpg"
    },
    {
        "id": 45,
        "src": "/gallery/bitconf-2024/1-0771_resized.jpg",
        "alt": "BitConf 2024 - Photo 45",
        "filename": "1-0771_resized.jpg"
    },
    {
        "id": 46,
        "src": "/gallery/bitconf-2024/1-0776_resized.jpg",
        "alt": "BitConf 2024 - Photo 46",
        "filename": "1-0776_resized.jpg"
    },
    {
        "id": 47,
        "src": "/gallery/bitconf-2024/1-0777_resized.jpg",
        "alt": "BitConf 2024 - Photo 47",
        "filename": "1-0777_resized.jpg"
    },
    {
        "id": 48,
        "src": "/gallery/bitconf-2024/1-0797_resized.jpg",
        "alt": "BitConf 2024 - Photo 48",
        "filename": "1-0797_resized.jpg"
    },
    {
        "id": 49,
        "src": "/gallery/bitconf-2024/1-0798_resized.jpg",
        "alt": "BitConf 2024 - Photo 49",
        "filename": "1-0798_resized.jpg"
    },
    {
        "id": 50,
        "src": "/gallery/bitconf-2024/1-0802_resized.jpg",
        "alt": "BitConf 2024 - Photo 50",
        "filename": "1-0802_resized.jpg"
    },
    {
        "id": 51,
        "src": "/gallery/bitconf-2024/1-0805_resized.jpg",
        "alt": "BitConf 2024 - Photo 51",
        "filename": "1-0805_resized.jpg"
    },
    {
        "id": 52,
        "src": "/gallery/bitconf-2024/1-0808_resized.jpg",
        "alt": "BitConf 2024 - Photo 52",
        "filename": "1-0808_resized.jpg"
    },
    {
        "id": 53,
        "src": "/gallery/bitconf-2024/1-0812_resized.jpg",
        "alt": "BitConf 2024 - Photo 53",
        "filename": "1-0812_resized.jpg"
    },
    {
        "id": 54,
        "src": "/gallery/bitconf-2024/1-0817_resized.jpg",
        "alt": "BitConf 2024 - Photo 54",
        "filename": "1-0817_resized.jpg"
    },
    {
        "id": 55,
        "src": "/gallery/bitconf-2024/1-0837_resized.jpg",
        "alt": "BitConf 2024 - Photo 55",
        "filename": "1-0837_resized.jpg"
    },
    {
        "id": 56,
        "src": "/gallery/bitconf-2024/1-0851_resized.jpg",
        "alt": "BitConf 2024 - Photo 56",
        "filename": "1-0851_resized.jpg"
    },
    {
        "id": 57,
        "src": "/gallery/bitconf-2024/1-0866_resized.jpg",
        "alt": "BitConf 2024 - Photo 57",
        "filename": "1-0866_resized.jpg"
    },
    {
        "id": 58,
        "src": "/gallery/bitconf-2024/1-0869_resized.jpg",
        "alt": "BitConf 2024 - Photo 58",
        "filename": "1-0869_resized.jpg"
    },
    {
        "id": 59,
        "src": "/gallery/bitconf-2024/1-0872_resized.jpg",
        "alt": "BitConf 2024 - Photo 59",
        "filename": "1-0872_resized.jpg"
    },
    {
        "id": 60,
        "src": "/gallery/bitconf-2024/1-0875_resized.jpg",
        "alt": "BitConf 2024 - Photo 60",
        "filename": "1-0875_resized.jpg"
    },
    {
        "id": 61,
        "src": "/gallery/bitconf-2024/1-0885_resized.jpg",
        "alt": "BitConf 2024 - Photo 61",
        "filename": "1-0885_resized.jpg"
    },
    {
        "id": 62,
        "src": "/gallery/bitconf-2024/1-0886_resized.jpg",
        "alt": "BitConf 2024 - Photo 62",
        "filename": "1-0886_resized.jpg"
    },
    {
        "id": 63,
        "src": "/gallery/bitconf-2024/1-0888_resized.jpg",
        "alt": "BitConf 2024 - Photo 63",
        "filename": "1-0888_resized.jpg"
    },
    {
        "id": 64,
        "src": "/gallery/bitconf-2024/1-0889_resized.jpg",
        "alt": "BitConf 2024 - Photo 64",
        "filename": "1-0889_resized.jpg"
    },
    {
        "id": 65,
        "src": "/gallery/bitconf-2024/1-0890_resized.jpg",
        "alt": "BitConf 2024 - Photo 65",
        "filename": "1-0890_resized.jpg"
    },
    {
        "id": 66,
        "src": "/gallery/bitconf-2024/1-0893_resized.jpg",
        "alt": "BitConf 2024 - Photo 66",
        "filename": "1-0893_resized.jpg"
    },
    {
        "id": 67,
        "src": "/gallery/bitconf-2024/1-0899_resized.jpg",
        "alt": "BitConf 2024 - Photo 67",
        "filename": "1-0899_resized.jpg"
    },
    {
        "id": 68,
        "src": "/gallery/bitconf-2024/1-0903_resized.jpg",
        "alt": "BitConf 2024 - Photo 68",
        "filename": "1-0903_resized.jpg"
    },
    {
        "id": 69,
        "src": "/gallery/bitconf-2024/1-0904_resized.jpg",
        "alt": "BitConf 2024 - Photo 69",
        "filename": "1-0904_resized.jpg"
    },
    {
        "id": 70,
        "src": "/gallery/bitconf-2024/1-0916_resized.jpg",
        "alt": "BitConf 2024 - Photo 70",
        "filename": "1-0916_resized.jpg"
    },
    {
        "id": 71,
        "src": "/gallery/bitconf-2024/1-0921_resized.jpg",
        "alt": "BitConf 2024 - Photo 71",
        "filename": "1-0921_resized.jpg"
    },
    {
        "id": 72,
        "src": "/gallery/bitconf-2024/1-0922_resized.jpg",
        "alt": "BitConf 2024 - Photo 72",
        "filename": "1-0922_resized.jpg"
    },
    {
        "id": 73,
        "src": "/gallery/bitconf-2024/1-0927_resized.jpg",
        "alt": "BitConf 2024 - Photo 73",
        "filename": "1-0927_resized.jpg"
    },
    {
        "id": 74,
        "src": "/gallery/bitconf-2024/1-0932_resized.jpg",
        "alt": "BitConf 2024 - Photo 74",
        "filename": "1-0932_resized.jpg"
    },
    {
        "id": 75,
        "src": "/gallery/bitconf-2024/1-0942_resized.jpg",
        "alt": "BitConf 2024 - Photo 75",
        "filename": "1-0942_resized.jpg"
    },
    {
        "id": 76,
        "src": "/gallery/bitconf-2024/1-0944_resized.jpg",
        "alt": "BitConf 2024 - Photo 76",
        "filename": "1-0944_resized.jpg"
    },
    {
        "id": 77,
        "src": "/gallery/bitconf-2024/1-0958_resized.jpg",
        "alt": "BitConf 2024 - Photo 77",
        "filename": "1-0958_resized.jpg"
    },
    {
        "id": 78,
        "src": "/gallery/bitconf-2024/1-0964_resized.jpg",
        "alt": "BitConf 2024 - Photo 78",
        "filename": "1-0964_resized.jpg"
    },
    {
        "id": 79,
        "src": "/gallery/bitconf-2024/1-0970_resized.jpg",
        "alt": "BitConf 2024 - Photo 79",
        "filename": "1-0970_resized.jpg"
    },
    {
        "id": 80,
        "src": "/gallery/bitconf-2024/1-0971_resized.jpg",
        "alt": "BitConf 2024 - Photo 80",
        "filename": "1-0971_resized.jpg"
    },
    {
        "id": 81,
        "src": "/gallery/bitconf-2024/1-0974_resized.jpg",
        "alt": "BitConf 2024 - Photo 81",
        "filename": "1-0974_resized.jpg"
    },
    {
        "id": 82,
        "src": "/gallery/bitconf-2024/1-0985_resized.jpg",
        "alt": "BitConf 2024 - Photo 82",
        "filename": "1-0985_resized.jpg"
    },
    {
        "id": 83,
        "src": "/gallery/bitconf-2024/1-1009_resized.jpg",
        "alt": "BitConf 2024 - Photo 83",
        "filename": "1-1009_resized.jpg"
    },
    {
        "id": 84,
        "src": "/gallery/bitconf-2024/1-1014_resized.jpg",
        "alt": "BitConf 2024 - Photo 84",
        "filename": "1-1014_resized.jpg"
    },
    {
        "id": 85,
        "src": "/gallery/bitconf-2024/1-1025_resized.jpg",
        "alt": "BitConf 2024 - Photo 85",
        "filename": "1-1025_resized.jpg"
    },
    {
        "id": 86,
        "src": "/gallery/bitconf-2024/1-1028_resized.jpg",
        "alt": "BitConf 2024 - Photo 86",
        "filename": "1-1028_resized.jpg"
    },
    {
        "id": 87,
        "src": "/gallery/bitconf-2024/1-1032_resized.jpg",
        "alt": "BitConf 2024 - Photo 87",
        "filename": "1-1032_resized.jpg"
    },
    {
        "id": 88,
        "src": "/gallery/bitconf-2024/1-1034_resized.jpg",
        "alt": "BitConf 2024 - Photo 88",
        "filename": "1-1034_resized.jpg"
    },
    {
        "id": 89,
        "src": "/gallery/bitconf-2024/1-1048_resized.jpg",
        "alt": "BitConf 2024 - Photo 89",
        "filename": "1-1048_resized.jpg"
    },
    {
        "id": 90,
        "src": "/gallery/bitconf-2024/1-1051_resized.jpg",
        "alt": "BitConf 2024 - Photo 90",
        "filename": "1-1051_resized.jpg"
    },
    {
        "id": 91,
        "src": "/gallery/bitconf-2024/1-1054_resized.jpg",
        "alt": "BitConf 2024 - Photo 91",
        "filename": "1-1054_resized.jpg"
    },
    {
        "id": 92,
        "src": "/gallery/bitconf-2024/1-1061_resized.jpg",
        "alt": "BitConf 2024 - Photo 92",
        "filename": "1-1061_resized.jpg"
    },
    {
        "id": 93,
        "src": "/gallery/bitconf-2024/1-1065_resized.jpg",
        "alt": "BitConf 2024 - Photo 93",
        "filename": "1-1065_resized.jpg"
    },
    {
        "id": 94,
        "src": "/gallery/bitconf-2024/1-1070_resized.jpg",
        "alt": "BitConf 2024 - Photo 94",
        "filename": "1-1070_resized.jpg"
    },
    {
        "id": 95,
        "src": "/gallery/bitconf-2024/1-1072_resized.jpg",
        "alt": "BitConf 2024 - Photo 95",
        "filename": "1-1072_resized.jpg"
    },
    {
        "id": 96,
        "src": "/gallery/bitconf-2024/1-1074_resized.jpg",
        "alt": "BitConf 2024 - Photo 96",
        "filename": "1-1074_resized.jpg"
    },
    {
        "id": 97,
        "src": "/gallery/bitconf-2024/1-1077_resized.jpg",
        "alt": "BitConf 2024 - Photo 97",
        "filename": "1-1077_resized.jpg"
    },
    {
        "id": 98,
        "src": "/gallery/bitconf-2024/1-1078_resized.jpg",
        "alt": "BitConf 2024 - Photo 98",
        "filename": "1-1078_resized.jpg"
    },
    {
        "id": 99,
        "src": "/gallery/bitconf-2024/1-1080_resized.jpg",
        "alt": "BitConf 2024 - Photo 99",
        "filename": "1-1080_resized.jpg"
    },
    {
        "id": 100,
        "src": "/gallery/bitconf-2024/1-1081_resized.jpg",
        "alt": "BitConf 2024 - Photo 100",
        "filename": "1-1081_resized.jpg"
    },
    {
        "id": 101,
        "src": "/gallery/bitconf-2024/1-1083_resized.jpg",
        "alt": "BitConf 2024 - Photo 101",
        "filename": "1-1083_resized.jpg"
    },
    {
        "id": 102,
        "src": "/gallery/bitconf-2024/1-1085_resized.jpg",
        "alt": "BitConf 2024 - Photo 102",
        "filename": "1-1085_resized.jpg"
    },
    {
        "id": 103,
        "src": "/gallery/bitconf-2024/1-1090_resized.jpg",
        "alt": "BitConf 2024 - Photo 103",
        "filename": "1-1090_resized.jpg"
    },
    {
        "id": 104,
        "src": "/gallery/bitconf-2024/1-1096_resized.jpg",
        "alt": "BitConf 2024 - Photo 104",
        "filename": "1-1096_resized.jpg"
    },
    {
        "id": 105,
        "src": "/gallery/bitconf-2024/1-1097_resized.jpg",
        "alt": "BitConf 2024 - Photo 105",
        "filename": "1-1097_resized.jpg"
    },
    {
        "id": 106,
        "src": "/gallery/bitconf-2024/1-1103_resized.jpg",
        "alt": "BitConf 2024 - Photo 106",
        "filename": "1-1103_resized.jpg"
    },
    {
        "id": 107,
        "src": "/gallery/bitconf-2024/1-1107_resized.jpg",
        "alt": "BitConf 2024 - Photo 107",
        "filename": "1-1107_resized.jpg"
    },
    {
        "id": 108,
        "src": "/gallery/bitconf-2024/1-1113_resized.jpg",
        "alt": "BitConf 2024 - Photo 108",
        "filename": "1-1113_resized.jpg"
    },
    {
        "id": 109,
        "src": "/gallery/bitconf-2024/1-1114_resized.jpg",
        "alt": "BitConf 2024 - Photo 109",
        "filename": "1-1114_resized.jpg"
    },
    {
        "id": 110,
        "src": "/gallery/bitconf-2024/1-1124_resized.jpg",
        "alt": "BitConf 2024 - Photo 110",
        "filename": "1-1124_resized.jpg"
    },
    {
        "id": 111,
        "src": "/gallery/bitconf-2024/1-1141_resized.jpg",
        "alt": "BitConf 2024 - Photo 111",
        "filename": "1-1141_resized.jpg"
    },
    {
        "id": 112,
        "src": "/gallery/bitconf-2024/1-1144_resized.jpg",
        "alt": "BitConf 2024 - Photo 112",
        "filename": "1-1144_resized.jpg"
    },
    {
        "id": 113,
        "src": "/gallery/bitconf-2024/1-1158_resized.jpg",
        "alt": "BitConf 2024 - Photo 113",
        "filename": "1-1158_resized.jpg"
    },
    {
        "id": 114,
        "src": "/gallery/bitconf-2024/1-1162_resized.jpg",
        "alt": "BitConf 2024 - Photo 114",
        "filename": "1-1162_resized.jpg"
    },
    {
        "id": 115,
        "src": "/gallery/bitconf-2024/1-1164_resized.jpg",
        "alt": "BitConf 2024 - Photo 115",
        "filename": "1-1164_resized.jpg"
    },
    {
        "id": 116,
        "src": "/gallery/bitconf-2024/1-1165_resized.jpg",
        "alt": "BitConf 2024 - Photo 116",
        "filename": "1-1165_resized.jpg"
    },
    {
        "id": 117,
        "src": "/gallery/bitconf-2024/1-1171_resized.jpg",
        "alt": "BitConf 2024 - Photo 117",
        "filename": "1-1171_resized.jpg"
    },
    {
        "id": 118,
        "src": "/gallery/bitconf-2024/1-1172_resized.jpg",
        "alt": "BitConf 2024 - Photo 118",
        "filename": "1-1172_resized.jpg"
    },
    {
        "id": 119,
        "src": "/gallery/bitconf-2024/1-1178_resized.jpg",
        "alt": "BitConf 2024 - Photo 119",
        "filename": "1-1178_resized.jpg"
    },
    {
        "id": 120,
        "src": "/gallery/bitconf-2024/1-1196_resized.jpg",
        "alt": "BitConf 2024 - Photo 120",
        "filename": "1-1196_resized.jpg"
    },
    {
        "id": 121,
        "src": "/gallery/bitconf-2024/1-1200_resized.jpg",
        "alt": "BitConf 2024 - Photo 121",
        "filename": "1-1200_resized.jpg"
    },
    {
        "id": 122,
        "src": "/gallery/bitconf-2024/1-1209_resized.jpg",
        "alt": "BitConf 2024 - Photo 122",
        "filename": "1-1209_resized.jpg"
    },
    {
        "id": 123,
        "src": "/gallery/bitconf-2024/1-1228_resized.jpg",
        "alt": "BitConf 2024 - Photo 123",
        "filename": "1-1228_resized.jpg"
    },
    {
        "id": 124,
        "src": "/gallery/bitconf-2024/1-1231_resized.jpg",
        "alt": "BitConf 2024 - Photo 124",
        "filename": "1-1231_resized.jpg"
    },
    {
        "id": 125,
        "src": "/gallery/bitconf-2024/1-1238_resized.jpg",
        "alt": "BitConf 2024 - Photo 125",
        "filename": "1-1238_resized.jpg"
    },
    {
        "id": 126,
        "src": "/gallery/bitconf-2024/1-1246_resized.jpg",
        "alt": "BitConf 2024 - Photo 126",
        "filename": "1-1246_resized.jpg"
    },
    {
        "id": 127,
        "src": "/gallery/bitconf-2024/1-1248_resized.jpg",
        "alt": "BitConf 2024 - Photo 127",
        "filename": "1-1248_resized.jpg"
    },
    {
        "id": 128,
        "src": "/gallery/bitconf-2024/1-1250_resized.jpg",
        "alt": "BitConf 2024 - Photo 128",
        "filename": "1-1250_resized.jpg"
    },
    {
        "id": 129,
        "src": "/gallery/bitconf-2024/1-1258_resized.jpg",
        "alt": "BitConf 2024 - Photo 129",
        "filename": "1-1258_resized.jpg"
    },
    {
        "id": 130,
        "src": "/gallery/bitconf-2024/1-1278_resized.jpg",
        "alt": "BitConf 2024 - Photo 130",
        "filename": "1-1278_resized.jpg"
    },
    {
        "id": 131,
        "src": "/gallery/bitconf-2024/1-1280_resized.jpg",
        "alt": "BitConf 2024 - Photo 131",
        "filename": "1-1280_resized.jpg"
    },
    {
        "id": 132,
        "src": "/gallery/bitconf-2024/1-1284_resized.jpg",
        "alt": "BitConf 2024 - Photo 132",
        "filename": "1-1284_resized.jpg"
    },
    {
        "id": 133,
        "src": "/gallery/bitconf-2024/1-1286_resized.jpg",
        "alt": "BitConf 2024 - Photo 133",
        "filename": "1-1286_resized.jpg"
    },
    {
        "id": 134,
        "src": "/gallery/bitconf-2024/1-1296_resized.jpg",
        "alt": "BitConf 2024 - Photo 134",
        "filename": "1-1296_resized.jpg"
    },
    {
        "id": 135,
        "src": "/gallery/bitconf-2024/1-1305_resized.jpg",
        "alt": "BitConf 2024 - Photo 135",
        "filename": "1-1305_resized.jpg"
    },
    {
        "id": 136,
        "src": "/gallery/bitconf-2024/1-1309_resized.jpg",
        "alt": "BitConf 2024 - Photo 136",
        "filename": "1-1309_resized.jpg"
    },
    {
        "id": 137,
        "src": "/gallery/bitconf-2024/1-1317_resized.jpg",
        "alt": "BitConf 2024 - Photo 137",
        "filename": "1-1317_resized.jpg"
    },
    {
        "id": 138,
        "src": "/gallery/bitconf-2024/1-1326_resized.jpg",
        "alt": "BitConf 2024 - Photo 138",
        "filename": "1-1326_resized.jpg"
    },
    {
        "id": 139,
        "src": "/gallery/bitconf-2024/1-1334_resized.jpg",
        "alt": "BitConf 2024 - Photo 139",
        "filename": "1-1334_resized.jpg"
    },
    {
        "id": 140,
        "src": "/gallery/bitconf-2024/1-1338_resized.jpg",
        "alt": "BitConf 2024 - Photo 140",
        "filename": "1-1338_resized.jpg"
    },
    {
        "id": 141,
        "src": "/gallery/bitconf-2024/1-1339_resized.jpg",
        "alt": "BitConf 2024 - Photo 141",
        "filename": "1-1339_resized.jpg"
    },
    {
        "id": 142,
        "src": "/gallery/bitconf-2024/1-1343_resized.jpg",
        "alt": "BitConf 2024 - Photo 142",
        "filename": "1-1343_resized.jpg"
    },
    {
        "id": 143,
        "src": "/gallery/bitconf-2024/1-1344_resized.jpg",
        "alt": "BitConf 2024 - Photo 143",
        "filename": "1-1344_resized.jpg"
    },
    {
        "id": 144,
        "src": "/gallery/bitconf-2024/1-1346_resized.jpg",
        "alt": "BitConf 2024 - Photo 144",
        "filename": "1-1346_resized.jpg"
    },
    {
        "id": 145,
        "src": "/gallery/bitconf-2024/1-1348_resized.jpg",
        "alt": "BitConf 2024 - Photo 145",
        "filename": "1-1348_resized.jpg"
    },
    {
        "id": 146,
        "src": "/gallery/bitconf-2024/1-1353_resized.jpg",
        "alt": "BitConf 2024 - Photo 146",
        "filename": "1-1353_resized.jpg"
    },
    {
        "id": 147,
        "src": "/gallery/bitconf-2024/1-1356_resized.jpg",
        "alt": "BitConf 2024 - Photo 147",
        "filename": "1-1356_resized.jpg"
    },
    {
        "id": 148,
        "src": "/gallery/bitconf-2024/1-1360_resized.jpg",
        "alt": "BitConf 2024 - Photo 148",
        "filename": "1-1360_resized.jpg"
    },
    {
        "id": 149,
        "src": "/gallery/bitconf-2024/1-1367_resized.jpg",
        "alt": "BitConf 2024 - Photo 149",
        "filename": "1-1367_resized.jpg"
    },
    {
        "id": 150,
        "src": "/gallery/bitconf-2024/1-1368_resized.jpg",
        "alt": "BitConf 2024 - Photo 150",
        "filename": "1-1368_resized.jpg"
    },
    {
        "id": 151,
        "src": "/gallery/bitconf-2024/1-1373_resized.jpg",
        "alt": "BitConf 2024 - Photo 151",
        "filename": "1-1373_resized.jpg"
    },
    {
        "id": 152,
        "src": "/gallery/bitconf-2024/1-1375_resized.jpg",
        "alt": "BitConf 2024 - Photo 152",
        "filename": "1-1375_resized.jpg"
    },
    {
        "id": 153,
        "src": "/gallery/bitconf-2024/1-1380_resized.jpg",
        "alt": "BitConf 2024 - Photo 153",
        "filename": "1-1380_resized.jpg"
    },
    {
        "id": 154,
        "src": "/gallery/bitconf-2024/1-1384_resized.jpg",
        "alt": "BitConf 2024 - Photo 154",
        "filename": "1-1384_resized.jpg"
    },
    {
        "id": 155,
        "src": "/gallery/bitconf-2024/1-1387_resized.jpg",
        "alt": "BitConf 2024 - Photo 155",
        "filename": "1-1387_resized.jpg"
    },
    {
        "id": 156,
        "src": "/gallery/bitconf-2024/1-1403_resized.jpg",
        "alt": "BitConf 2024 - Photo 156",
        "filename": "1-1403_resized.jpg"
    },
    {
        "id": 157,
        "src": "/gallery/bitconf-2024/1-1407_resized.jpg",
        "alt": "BitConf 2024 - Photo 157",
        "filename": "1-1407_resized.jpg"
    },
    {
        "id": 158,
        "src": "/gallery/bitconf-2024/1-1425_resized.jpg",
        "alt": "BitConf 2024 - Photo 158",
        "filename": "1-1425_resized.jpg"
    },
    {
        "id": 159,
        "src": "/gallery/bitconf-2024/1-1428_resized.jpg",
        "alt": "BitConf 2024 - Photo 159",
        "filename": "1-1428_resized.jpg"
    },
    {
        "id": 160,
        "src": "/gallery/bitconf-2024/1-1435_resized.jpg",
        "alt": "BitConf 2024 - Photo 160",
        "filename": "1-1435_resized.jpg"
    },
    {
        "id": 161,
        "src": "/gallery/bitconf-2024/1-1438_resized.jpg",
        "alt": "BitConf 2024 - Photo 161",
        "filename": "1-1438_resized.jpg"
    },
    {
        "id": 162,
        "src": "/gallery/bitconf-2024/1-1439_resized.jpg",
        "alt": "BitConf 2024 - Photo 162",
        "filename": "1-1439_resized.jpg"
    },
    {
        "id": 163,
        "src": "/gallery/bitconf-2024/1-1441_resized.jpg",
        "alt": "BitConf 2024 - Photo 163",
        "filename": "1-1441_resized.jpg"
    }
];

  // Shuffle array function
  const shuffleArray = (array: Photo[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Initialize with shuffled photos
  useEffect(() => {
    setDisplayedPhotos(shuffleArray(allPhotos));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            if (target === titleRef.current) {
              setIsVisible(prev => ({ ...prev, title: true }));
            } else if (target === galleryRef.current) {
              setIsVisible(prev => ({ ...prev, gallery: true }));
            } else if (target === statsRef.current) {
              setIsVisible(prev => ({ ...prev, stats: true }));
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (galleryRef.current) observer.observe(galleryRef.current);
    if (statsRef.current) observer.observe(statsRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const reshufflePhotos = () => {
    setDisplayedPhotos(shuffleArray(allPhotos));
    setPhotosToShow(16);
    setCurrentSlide(0); // Reset slider to first slide
  };

  const showMorePhotos = () => {
    setPhotosToShow(prev => Math.min(prev + 16, allPhotos.length));
  };

  const showAllPhotos = () => {
    setPhotosToShow(allPhotos.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % displayedPhotos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + displayedPhotos.length) % displayedPhotos.length);
  };

  // Touch handling for mobile swipe
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  return (
    <section id="gallery2024" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-1/5 w-56 h-56 bg-bitconf-primary/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 right-1/6 w-64 h-64 bg-bitconf-accent/6 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-bitconf-secondary/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible.title 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl font-bold text-white mb-4">BitConf 2024 Edition</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Relive the amazing moments from our previous conference - inspiring talks, meaningful connections, and innovative ideas
          </p>
        </div>

        {/* Mobile Slider - visible on small screens */}
        <div 
          ref={galleryRef}
          className={`md:hidden mb-12 transition-all duration-1200 ease-out ${
            isVisible.gallery 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div 
            ref={sliderRef}
            className="relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {displayedPhotos.map((photo) => (
                  <div
                    key={photo.id}
                    className="min-w-full px-2"
                    onClick={() => setSelectedImage(photo.src)}
                  >
                    <div className="aspect-square bg-gray-800 overflow-hidden rounded-lg border border-bitconf-primary/30">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover"
                        loading={photo.id <= 12 ? "eager" : "lazy"}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20"
              aria-label="Previous photo"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20"
              aria-label="Next photo"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slide Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm border border-white/20">
              {currentSlide + 1} / {displayedPhotos.length}
            </div>
          </div>
        </div>

        {/* Desktop Photo Grid - visible on medium screens and up */}
        <div 
          className={`hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12 transition-all duration-1200 ease-out ${
            isVisible.gallery 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          {displayedPhotos.slice(0, photosToShow).map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-400 ease-out hover:opacity-90"
              onClick={() => setSelectedImage(photo.src)}
            >
              <div className="aspect-square bg-gray-800 overflow-hidden rounded-lg border border-transparent group-hover:border-bitconf-primary/50 transition-all duration-500">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-opacity duration-400 ease-out group-hover:opacity-90"
                  loading={photo.id <= 12 ? "eager" : "lazy"}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-transparent to-black/0 group-hover:from-bitconf-primary/20 group-hover:via-transparent group-hover:to-bitconf-secondary/20 transition-all duration-500 flex items-center justify-center rounded-lg">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
                    <svg className="w-8 h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
                <div className="bg-bitconf-accent/80 backdrop-blur-sm rounded-full w-6 h-6 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More and Shuffle Buttons */}
        <div className="text-center mb-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Show More button - only on desktop */}
            {photosToShow < displayedPhotos.length && (
              <button
                onClick={photosToShow + 16 >= displayedPhotos.length ? showAllPhotos : showMorePhotos}
                className="hidden md:flex group bg-bitconf-primary text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 ease-out hover:bg-bitconf-primary/80 items-center gap-2"
              >
                <svg className="w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="transition-all duration-300">
                  {photosToShow + 16 >= displayedPhotos.length ? 
                    `Show All ${displayedPhotos.length} Photos` : 
                    `Show More Photos (${photosToShow}/${displayedPhotos.length})`
                  }
                </span>
              </button>
            )}
            {/* Shuffle button */}
            <button
              onClick={reshufflePhotos}
              className="group bg-bitconf-accent text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 ease-out hover:bg-bitconf-accent/80 flex items-center gap-2"
            >
              <svg className="w-5 h-5 transition-transform duration-300 ease-out group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="transition-all duration-300">
                Shuffle Photos
              </span>
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div 
          ref={statsRef}
          className={`group bg-bitconf-dark/50 rounded-lg p-8 border border-bitconf-primary/20 transition-all duration-300 ease-out cursor-pointer hover:bg-bitconf-dark/70 hover:border-bitconf-primary/30 ${
            isVisible.stats 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className={`transition-all duration-300 ease-out ${
              isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: isVisible.stats ? '100ms' : '0ms' }}>
              <div className="text-3xl font-bold text-bitconf-accent mb-2 transition-colors duration-300 group-hover:text-bitconf-turquoise">{attendeesCount}{attendeesCount === 150 ? '+' : ''}</div>
              <div className="text-gray-300 transition-colors duration-300 group-hover:text-white">Attendees</div>
            </div>
            <div className={`transition-all duration-300 ease-out ${
              isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: isVisible.stats ? '200ms' : '0ms' }}>
              <div className="text-3xl font-bold text-bitconf-accent mb-2 transition-colors duration-300 group-hover:text-bitconf-turquoise">{photosCount}</div>
              <div className="text-gray-300 transition-colors duration-300 group-hover:text-white">Photos</div>
            </div>
            <div className={`transition-all duration-300 ease-out ${
              isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: isVisible.stats ? '300ms' : '0ms' }}>
              <div className="text-3xl font-bold text-bitconf-accent mb-2 transition-colors duration-300 group-hover:text-bitconf-turquoise">{speakersCount}</div>
              <div className="text-gray-300 transition-colors duration-300 group-hover:text-white">Speakers</div>
            </div>
            <div className={`transition-all duration-300 ease-out ${
              isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: isVisible.stats ? '400ms' : '0ms' }}>
              <div className="text-3xl font-bold text-bitconf-accent mb-2 transition-colors duration-300 group-hover:text-bitconf-turquoise">{sessionsCount}</div>
              <div className="text-gray-300 transition-colors duration-300 group-hover:text-white">Sessions</div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={selectedImage}
              alt="Gallery Image"
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}