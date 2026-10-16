"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 4.5a9 9 0 0 1 3.864 5.89a2.5 2.5 0 0 1 -.29 4.36a9 9 0 0 1 -17.137 0a2.5 2.5 0 0 1 -.29 -4.36a9 9 0 0 1 3.746 -5.81"}],["path",{"d":"M9.5 16a3.5 3.5 0 0 0 5 0"}],["path",{"d":"M8.5 2c1.5 1 2.5 3.5 2.5 5"}],["path",{"d":"M12.5 2c1.5 2 2 3.5 2 5"}],["path",{"d":"M9 12l.01 0"}],["path",{"d":"M15 12l.01 0"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0],"o":[12.01,12.75],"a":-5},{"fx":"pop","n":[1,2,3,4,5],"a":0.3,"dl":0.12,"st":0.07,"os":[[12,16.53],[9.75,4.5],[13.5,4.5],[9,12],[15.01,12]]}];

export const MoodBoyIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MoodBoyIcon.displayName = "MoodBoyIcon";
