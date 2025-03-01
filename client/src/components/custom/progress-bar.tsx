import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Play, Pause, RotateCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ProgressBar() {
  const [duration, setDuration] = useState<number>(5);
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const controls = useAnimation();
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (isNaN(value) || value < 0) {
      setDuration(0);
    } else {
      setDuration(value);
    }
  };

  const startProgress = async () => {
    if (duration <= 0) {
      toast({
        title: "Invalid duration",
        description: "Please enter a duration greater than 0 seconds",
        variant: "destructive",
      });
      return;
    }

    setIsRunning(true);
    setProgress(0);
    
    await controls.start({
      width: "100%",
      transition: {
        duration: duration,
        ease: "linear",
      },
    });
    
    setIsRunning(false);
    setProgress(100);
  };

  const pauseProgress = () => {
    controls.stop();
    setIsRunning(false);
  };

  const resetProgress = () => {
    controls.stop();
    setIsRunning(false);
    setProgress(0);
    controls.set({ width: "0%" });
  };

  useEffect(() => {
    controls.set({ width: `${progress}%` });
  }, []);

  return (
    <Card className="w-full max-w-md mx-4 bg-[#F5F5F5]">
      <CardContent className="pt-6 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="duration" className="text-[#333333]">
            Duration (seconds)
          </Label>
          <Input
            id="duration"
            type="number"
            min="0"
            value={duration}
            onChange={handleInputChange}
            className="border-[#9E9E9E] focus:border-[#2196F3]"
            disabled={isRunning}
          />
        </div>

        <div className="relative h-4 overflow-hidden rounded-lg bg-gray-200">
          <motion.div
            initial={{ width: "0%" }}
            animate={controls}
            className="absolute inset-0 bg-[#4CAF50]"
            style={{ originX: 0 }}
          />
        </div>

        <div className="flex justify-center space-x-2">
          {!isRunning ? (
            <Button
              onClick={startProgress}
              className="bg-[#2196F3] hover:bg-[#1976D2]"
              disabled={duration <= 0}
            >
              <Play className="w-4 h-4 mr-2" />
              Start
            </Button>
          ) : (
            <Button
              onClick={pauseProgress}
              variant="secondary"
              className="bg-[#9E9E9E] hover:bg-[#757575] text-white"
            >
              <Pause className="w-4 h-4 mr-2" />
              Pause
            </Button>
          )}
          <Button
            onClick={resetProgress}
            variant="outline"
            className="border-[#9E9E9E] text-[#333333]"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
