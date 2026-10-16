"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 3v18h18"}],["path",{"d":"M20 18v3"}],["path",{"d":"M16 16v5"}],["path",{"d":"M12 13v8"}],["path",{"d":"M8 16v5"}],["path",{"d":"M3 11c6 0 5 -5 9 -5s3 5 9 5"}]];
const rig: Rig[] = [{"fx":"grow","n":[0,1,2,3,4,5],"st":0.08,"os":[[12,21],[20,21],[16,21],[12,21],[8,21],[12,11]]}];

export const ChartHistogramIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChartHistogramIcon.displayName = "ChartHistogramIcon";
