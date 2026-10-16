"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M11 16l4 -1.5"}],["path",{"d":"M10 10c-.5 -1 -2.5 -1 -3 0"}],["path",{"d":"M17 10c-.5 -1 -2.5 -1 -3 0"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0],"o":[12,12],"a":-5},{"fx":"pop","n":[1,2,3],"a":0.3,"dl":0.12,"st":0.07,"os":[[13,15.25],[8.5,9.63],[15.5,9.63]]}];

export const MoodUnamusedIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MoodUnamusedIcon.displayName = "MoodUnamusedIcon";
