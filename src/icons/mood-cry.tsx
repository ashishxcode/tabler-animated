"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 10l.01 0"}],["path",{"d":"M15 10l.01 0"}],["path",{"d":"M9.5 15.25a3.5 3.5 0 0 1 5 0"}],["path",{"d":"M17.566 17.606a2 2 0 1 0 2.897 .03l-1.463 -1.636l-1.434 1.606"}],["path",{"d":"M20.865 13.517a8.937 8.937 0 0 0 .135 -1.517a9 9 0 1 0 -9 9c.69 0 1.36 -.076 2 -.222"}]];
const rig: Rig[] = [{"fx":"tilt","n":[4],"o":[12,12],"a":-5},{"fx":"pop","n":[0,1,2,3],"a":0.3,"dl":0.12,"st":0.07,"os":[[9,10],[15.01,10],[12,14.72],[19,18.5]]}];

export const MoodCryIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MoodCryIcon.displayName = "MoodCryIcon";
