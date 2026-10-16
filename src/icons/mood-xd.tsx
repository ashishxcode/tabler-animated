"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"}],["path",{"d":"M9 14h6a3 3 0 0 1 -6 0"}],["path",{"d":"M9 8l6 3"}],["path",{"d":"M9 11l6 -3"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0],"o":[12,12],"a":-5},{"fx":"pop","n":[1,2,3],"a":0.3,"dl":0.12,"st":0.07,"os":[[12,15.5],[12,9.5],[12,9.5]]}];

export const MoodXdIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MoodXdIcon.displayName = "MoodXdIcon";
