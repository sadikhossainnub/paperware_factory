import { useState, useEffect } from "react";

export function useMicroInteractions() {
  const [isHapticEnabled, setIsHapticEnabled] = useState(true);
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);

  // Haptic feedback (mobile)
  const haptic = (type: "light" | "medium" | "heavy" = "light") => {
    if (!isHapticEnabled) return;
    
    if ("vibrate" in navigator) {
      const patterns = {
        light: [10],
        medium: [20],
        heavy: [30],
      };
      navigator.vibrate(patterns[type]);
    }
  };

  // Sound feedback
  const playSound = (type: "click" | "hover" | "success" | "error") => {
    if (!isSoundEnabled) return;

    // Create simple beep sounds using Web Audio API
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    const frequencies = {
      click: 800,
      hover: 600,
      success: 1000,
      error: 400,
    };

    oscillator.frequency.value = frequencies[type];
    oscillator.type = "sine";
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  };

  // Button press animation
  const buttonPress = () => {
    haptic("light");
    playSound("click");
  };

  // Hover effect
  const buttonHover = () => {
    haptic("light");
    playSound("hover");
  };

  // Success action
  const successAction = () => {
    haptic("medium");
    playSound("success");
  };

  // Error action
  const errorAction = () => {
    haptic("heavy");
    playSound("error");
  };

  return {
    isHapticEnabled,
    setIsHapticEnabled,
    isSoundEnabled,
    setIsSoundEnabled,
    haptic,
    playSound,
    buttonPress,
    buttonHover,
    successAction,
    errorAction,
  };
}
