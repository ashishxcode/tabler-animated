"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M7 8.5l3 3"}],["path",{"d":"M7 11.5l3 -3"}],["path",{"d":"M14 8.5l3 3"}],["path",{"d":"M14 11.5l3 -3"}],["path",{"d":"M9.5 15a3.5 3.5 0 0 0 5 0"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0],"o":[12,12],"a":-5},{"fx":"pop","n":[1,2,3,4,5],"a":0.3,"dl":0.12,"st":0.07,"os":[[8.5,10],[8.5,10],[15.5,10],[15.5,10],[12,15.53]]}];

export const MoodCrazyHappyIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MoodCrazyHappyIcon.displayName = "MoodCrazyHappyIcon";
