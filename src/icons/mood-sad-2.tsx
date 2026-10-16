"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M14.5 16.05a3.5 3.5 0 0 0 -5 0"}],["path",{"d":"M10 9.25c-.5 1 -2.5 1 -3 0"}],["path",{"d":"M17 9.25c-.5 1 -2.5 1 -3 0"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0],"o":[12,12],"a":-5},{"fx":"pop","n":[1,2,3],"a":0.3,"dl":0.12,"st":0.07,"os":[[12,15.52],[8.5,9.63],[15.5,9.63]]}];

export const MoodSad2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MoodSad2Icon.displayName = "MoodSad2Icon";
