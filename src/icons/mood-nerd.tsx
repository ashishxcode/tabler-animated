"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M6 10a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M14 10a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M9.5 15a3.5 3.5 0 0 0 5 0"}],["path",{"d":"M3.5 9h2.5"}],["path",{"d":"M18 9h2.5"}],["path",{"d":"M10 9.5c1.333 -1.333 2.667 -1.333 4 0"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0],"o":[12,12],"a":-5},{"fx":"pop","n":[1,2,3,4,5,6],"a":0.3,"dl":0.12,"st":0.07,"os":[[8,10],[16,10],[12,15.53],[4.75,9],[19.25,9],[12,9]]}];

export const MoodNerdIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MoodNerdIcon.displayName = "MoodNerdIcon";
