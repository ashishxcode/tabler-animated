"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 12a9 9 0 1 0 -8.994 9"}],["path",{"d":"M9 10h.01"}],["path",{"d":"M15 10h.01"}],["path",{"d":"M9.5 15a3.5 3.5 0 0 0 5 0"}],["path",{"d":"M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0],"o":[12,12],"a":-5},{"fx":"pop","n":[1,2,3,4],"a":0.3,"dl":0.12,"st":0.07,"os":[[9,10],[15.01,10],[12,15.53],[19,19]]}];

export const MoodSparkIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MoodSparkIcon.displayName = "MoodSparkIcon";
